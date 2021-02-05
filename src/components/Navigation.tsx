import { Grid } from '@material-ui/core';
import { Link } from 'gatsby';
import React from 'react';
import { pagePathMap } from '../config/index';
import logo from '../images/logo.svg';

function Navigation({ title, links }) {
	return (
		<Grid
			id="navigation"
			container
			component="nav"
			justify="space-between"
			direction="row"
			wrap="nowrap"
			alignItems="center"
		>
			<Grid item xs="auto">
				<Link className="title" to={pagePathMap['home']}>
					<img className="logo" src={logo} alt="Queer Haus Logo" />
					<span style={{ whiteSpace: 'nowrap' }}>{title}</span>
				</Link>
			</Grid>
			<Grid item container spacing={2} justify="flex-end" xs="auto">
				{links.map((link, i) => {
					const path = pagePathMap[link];
					return (
						<Grid item key={i}>
							<Link activeClassName="active" to={path}>
								{link}
							</Link>
						</Grid>
					);
				})}
			</Grid>
		</Grid>
	);
}

export default Navigation;
