import { Preset, color } from "apply";

Preset.setName("svelte-add/netlify-adapter");

Preset.group((preset) => {
	preset.editJson("package.json").merge({
		devDependencies: {
			"@sveltejs/adapter-netlify": "next",
		},
	});
}).withTitle("Adding needed dependencies");


Preset.edit("svelte.config.cjs").update((content) => {
		let result = content;

		if (!result.includes("@sveltejs/adapter-netlify")) {
			result = `const netlify = require("@sveltejs/adapter-netlify");\n${result}`;
		}
		if (!result.includes("netlify(")) {
			result = result.replace(/adapter:.*,/, `adapter: netlify(),`);
		}

		return result;
}).withTitle("Setting up Svelte preprocessor");

Preset.group((preset) => {
	preset.extract().whenConflict('ask');
}).withTitle("Adding netlify.toml file");

Preset.instruct(`Run ${color.magenta("npm install")}, ${color.magenta("pnpm install")}, or ${color.magenta("yarn")} to install dependencies`);
