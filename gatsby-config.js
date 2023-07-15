/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  flags: {
    DEV_SSR: true,
  },
  siteMetadata: {
    title: `uci.moe`,
    siteUrl: `https://anime-club.yahia.space`,
  },
  plugins: ["gatsby-plugin-sass"],
};
