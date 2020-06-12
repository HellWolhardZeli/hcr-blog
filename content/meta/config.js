const colors = require("../../src/styles/colors");

module.exports = {
  siteTitle: "Tech Blog", // <title>
  shortSiteTitle: "Blog", // <title> ending for posts and pages
  siteDescription: "This is blog site for tech related stuff",
  siteUrl: "https://gatsby-starter-personal-blog.greglobinski.com",
  pathPrefix: "",
  siteImage: "preview.jpg",
  siteLanguage: "en",
  // author
  authorName: "Worrzell",
  // info
  infoTitle: "worrzell",
  infoTitleNote: "personal blog",
  // manifest.json
  manifestName: "Tech Blog",
  manifestShortName: "Blog", // max 12 characters
  manifestStartUrl: "/",
  manifestBackgroundColor: colors.background,
  manifestThemeColor: colors.background,
  manifestDisplay: "standalone",
  // contact
  contactEmail: "john@doe.com",
  // social
  authorSocialLinks: [
    { name: "github", url: "https://github.com/greglobinski" },
    { name: "twitter", url: "https://twitter.com/greglobinski" },
    { name: "facebook", url: "https://facebook.com/greglobinski" }
  ]
};
