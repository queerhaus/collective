/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

function SEO({ lang, meta, keywords, title }) {
	const { site } = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						title
						description
					}
				}
			}
		`
	);

	const metaDescription = site.siteMetadata.description;

	return (
		<Helmet
			htmlAttributes={{
				lang,
			}}
			title={site.siteMetadata.title}
			meta={[
				{
					name: 'description',
					content: metaDescription,
				},
				{
					property: 'og:title',
					content: title,
				},
				{
					property: 'og:description',
					content: metaDescription,
				},
				{
					property: 'og:type',
					content: 'website',
				},
			]
				.concat(
					keywords.length > 0
						? {
								name: 'keywords',
								content: keywords.join(', '),
						  }
						: []
				)
				.concat(meta)}
		/>
	);
}

SEO.defaultProps = {
	lang: 'en',
	meta: [],
	keywords: [],
};

export default SEO;
