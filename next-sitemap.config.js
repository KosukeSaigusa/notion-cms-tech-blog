/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://www.run-app.dev',
  generateRobotsTxt: true, // (optional)
  // ...other options
}
