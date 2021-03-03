const path = require("path");

module.exports = (api, options) => {
  api.registerCommand("build:prerender", async (args) => {
    const PrerenderSPAPlugin = require("prerender-spa-plugin");
    // const { data } = await axios.get("http://some-api.com/companies");
    const posts = ["1", "2", "3"];
    api.chainWebpack((config) => {
      config.plugin("prerender").use(PrerenderSPAPlugin, [
        {
          // Required - The path to the webpack-outputted app to prerender.
          staticDir: path.join(__dirname, "dist"),
          // Required - Routes to render.
          routes: ["/"].concat(posts.map((post) => `/posts/${post}`)),
        },
      ]);
    });

    await api.service.run("build", args);
  });
};

module.exports.defaultModes = {
  "build:prerender": "production",
};
