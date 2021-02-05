module.exports = {
	siteMetadata: {
		title: 'Queer Haus Collective',
		description: '',
		siteUrl: 'https://collective.queer.haus',
		links: [
			{ text: 'SoundCloud', url: 'https://soundcloud.com/leckenberlin' },
			{ text: 'Instagram', url: 'https://www.instagram.com/lllecken/' },
		],
	},
	flags: {
		FAST_DEV: true,
		DEV_SSR: false,
		PRESERVE_WEBPACK_CACHE: true,
	},
	plugins: [
		'gatsby-plugin-sass',
		'gatsby-plugin-sharp',
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-sitemap',
		'gatsby-plugin-mdx',
		'gatsby-transformer-sharp',
		'gatsby-transformer-remark',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: './src/images/',
			},
			__key: 'images',
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'pages',
				path: './src/pages/',
			},
			__key: 'pages',
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/src/md`,
				name: 'markdown',
			},
		},
	],
};
