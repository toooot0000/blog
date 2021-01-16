module.exports = {
	publicPath: process.env.NODE_ENV === "production" ? "././" : "/",
	outputDir: "dist",
	chainWebpack: (config) => {
		const path = require("path");
		config.resolve.alias
			.set("@img", path.resolve("public/img"))
			.set("@assets", path.resolve("src/assets"));
	},
};
