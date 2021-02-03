import { Link } from 'gatsby';
import React from 'react';
import { pagePathMap } from '../config/index';

function Navigation({ title, links }) {
	return (
		<nav id="navigation">
			<Link className="title" to="/">
				{title}
			</Link>
			<div style={{ display: 'flex' }}>
				{links.map((link, i) => {
					const path = pagePathMap[link];
					return (
						<li key={i}>
							<Link activeClassName="active" to={path}>
								{link}
							</Link>
						</li>
					);
				})}
			</div>
		</nav>
	);
}

export default Navigation;
