const pluginWebc = require("@11ty/eleventy-plugin-webc");

module.exports = function(eleventyConfig) {
	eleventyConfig.addPlugin(pluginWebc, {
		components: "src/components/**/*.webc"
	});

	eleventyConfig.setServerPassthroughCopyBehavior("copy");
	eleventyConfig.addPassthroughCopy({ "public": "." });

	return {
		dir: {
			input: "src/pages",
			includes: "../components",
			layouts: "../layouts",
			data: "../data",
		},
		markdownTemplateEngine: false
	};
};
