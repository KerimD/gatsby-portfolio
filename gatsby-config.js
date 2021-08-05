module.exports = {
  siteMetadata: {
    title: 'gatsby-portfolio',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-typescript',
    {
      resolve: 'gatsby-plugin-postcss',
      options: {
        postCssPlugins: [
          require('autoprefixer'),
          require('postcss-custom-media'),
          require('postcss-nested'),
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /svg/
        }
      }
    },
  ],
};