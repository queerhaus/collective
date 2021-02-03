import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

export default function Guide({ data }) {
	const { guide } = data;
	console.log(guide);

	return (
		<Layout>
			<SEO title="Guides" />
			<div
				className="conatiner"
				dangerouslySetInnerHTML={{
					__html: guide.html,
				}}
			/>
		</Layout>
	);
}

export const query = graphql`
	query($id: String!) {
		guide: markdownRemark(frontmatter: { id: { eq: $id }, type: { eq: "guide" } }) {
			html
			frontmatter {
				title
			}
		}
	}
`;
