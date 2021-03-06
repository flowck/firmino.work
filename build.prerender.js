require("dotenv/config");
const path = require("path");
const axios = require("axios");
const log4js = require("log4js");
const logger = log4js.getLogger();
logger.level = "debug";

axios.default.defaults.baseURL = process.env.VUE_APP_API;

/**
 * getPostsSlugs: Fetch the API to retrieve post slugs
 * during build time
 */
async function getPostsSlugs() {
  try {
    const { data: posts } = await axios.get("/posts");
    return posts.map(post => {
      logger.info(`Generating slug: ${post.slug}__${post.id}...`);
      return `${post.slug}__${post.id}`;
    });
  } catch (error) {
    logger.error("An error occurred while fetching posts");
    logger.error(error);
    logger.error("Exiting...");
    process.exit(1);
  }
}

module.exports = (api, options) => {
  api.registerCommand("build:prerender", async args => {
    const PrerenderSPAPlugin = require("prerender-spa-plugin");
    const posts = await getPostsSlugs();
    api.chainWebpack(config => {
      config.plugin("prerender").use(PrerenderSPAPlugin, [
        {
          // Required - The path to the webpack-outputted app to prerender.
          staticDir: path.join(__dirname, "dist"),
          // Required - Routes to render.
          routes: ["/"].concat(posts.map(post => `/blog/${post}`))
        }
      ]);
    });

    await api.service.run("build", args);
  });
};

module.exports.defaultModes = {
  "build:prerender": "production"
};
