module.exports = {
  siteMetadata: {
    title: "gatsby-portfolio",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-typescript",
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /svg/
        }
      }
    }
  ],
};