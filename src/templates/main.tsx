import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

export default function Main({ data }) {
	const { main } = data;
	console.log(main);

	return (
		<Layout>
			<SEO title={main.frontmatter.title} />
			<div
				className="conatiner"
				dangerouslySetInnerHTML={{
					__html: main.html,
				}}
			/>
		</Layout>
	);
}

export const query = graphql`
	query($id: String!) {
		main: markdownRemark(frontmatter: { id: { eq: $id }, type: { eq: "main" } }) {
			html
			frontmatter {
				title
			}
		}
	}
`;
