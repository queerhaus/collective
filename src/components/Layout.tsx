import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import Navigation from './Navigation';
import Footer from './Footer';
import { PAGES } from '../config';

function Layout({ children }) {
	return (
		<StaticQuery
			query={query}
			render={(data) => {
				const { title, links } = data.site.siteMetadata;
				return (
					<div>
						<Navigation title={title} links={PAGES} />
						<main className="main">{children}</main>
						<Footer />
					</div>
				);
			}}
		/>
	);
}

const query = graphql`
	query {
		site {
			siteMetadata {
				title
				links {
					text
					url
				}
			}
		}
	}
`;

export default Layout;
