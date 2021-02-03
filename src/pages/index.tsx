import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const links = [
	{
		text: 'Tutorial',
		url: 'https://www.gatsbyjs.com/docs/tutorial/',
		description:
			"A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
		color: '#E95800',
	},
	{
		text: 'How to Guides',
		url: 'https://www.gatsbyjs.com/docs/how-to/',
		description:
			"Practical step-by-step guides to help you achieve a specific goal. Most useful when you're trying to get something done.",
		color: '#1099A8',
	},
	{
		text: 'Reference Guides',
		url: 'https://www.gatsbyjs.com/docs/reference/',
		description:
			"Nitty-gritty technical descriptions of how Gatsby works. Most useful when you need detailed information about Gatsby's APIs.",
		color: '#BC027F',
	},
	{
		text: 'Conceptual Guides',
		url: 'https://www.gatsbyjs.com/docs/conceptual/',
		description:
			'Big-picture explanations of higher-level Gatsby concepts. Most useful for building understanding of a particular topic.',
		color: '#0D96F2',
	},
	{
		text: 'Plugin Library',
		url: 'https://www.gatsbyjs.com/plugins',
		description:
			'Add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.',
		color: '#000000',
	},
];

function Index({ data }) {
	const about = data.markdownRemark;

	return (
		<Layout>
			<SEO title="Home" />
			<div className="pr-main" id="about">
				<div
					className="container container-sm"
					dangerouslySetInnerHTML={{
						__html: about.html,
					}}
				/>
			</div>
		</Layout>
	);
}

export const query = graphql`
	query {
		markdownRemark(frontmatter: { id: { eq: "home" } }) {
			html
			frontmatter {
				title
			}
		}
	}
`;

export default Index;
