import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

function Guides({ data }) {
	const guides = data.guides.edges;

	return (
		<Layout>
			<SEO title="Guides" />
			<div className="pr-main" id="about">
				<p>Here you can find useful guides walking you though the main Queer Haus interface and features</p>
				<ul>
					{guides.map(({ node: guide }) => (
						<li>
							<Link to={guide.frontmatter.id}>{guide.frontmatter.title}</Link>
						</li>
					))}
				</ul>
			</div>
		</Layout>
	);
}

export const query = graphql`
	query {
		guides: allMarkdownRemark(filter: { frontmatter: { type: { eq: "guide" } } }) {
			edges {
				node {
					frontmatter {
						title
						id
					}
				}
			}
		}
	}
`;

export default Guides;
