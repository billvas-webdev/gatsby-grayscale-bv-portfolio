const config = require('./config');

module.exports = {
  pathPrefix: config.pathPrefix,
  siteMetadata: {
    title: config.siteTitle,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    'gatsby-plugin-purgecss',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.manifestName,
        short_name: config.manifestShortName,
        start_url: config.pathPrefix || config.manifestStartUrl,
        background_color: config.manifestBackgroundColor,
        theme_color: config.manifestThemeColor,
        display: config.manifestDisplay,
        icon: config.manifestIcon, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-purgecss',
      options: {
        develop: true,
        printRejected: true, // Print removed selectors and processed file names
        whitelist: [
          'fa-github',
          'fa-linkedin-in',
          'fa-twitter',
          'fa-facebook-f',
        ], // Don't remove this selector
        // ignore: ['fa/'], // Ignore files/folders
        // whitelistPatterns: [/^fa-/],
      },
    },
  ],
};
