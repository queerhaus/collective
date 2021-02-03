const path = require(`path`);

exports.createPages = async function ({ graphql, actions }) {
	const { createPage } = actions;
	const { data } = await graphql(`
		query {
			allMarkdownRemark {
				edges {
					node {
						frontmatter {
							type
							id
						}
					}
				}
			}
		}
	`);

	const guides = data.allMarkdownRemark.edges.filter(({ node }) => (node.frontmatter.type || '').includes('guide'));
	const main = data.allMarkdownRemark.edges.filter(({ node }) => (node.frontmatter.type || '').includes('main'));

	main.forEach(({ node }) => {
		const id = (node.frontmatter.id || '').trim();
		createPage({
			path: `/${id}/`,
			component: path.resolve(`./src/templates/main.tsx`),
			context: { id },
		});
	});
	guides.forEach(({ node }) => {
		const id = (node.frontmatter.id || '').trim();
		createPage({
			path: `/guides/${id}/`,
			component: path.resolve(`./src/templates/guide.tsx`),
			context: { id },
		});
	});
};
