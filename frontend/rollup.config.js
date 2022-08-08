import svelte from "rollup-plugin-svelte";
import commonjs from "@rollup/plugin-commonjs";

import { nodeResolve } from "@rollup/plugin-node-resolve";
import livereload from "rollup-plugin-livereload";
import { terser } from "rollup-plugin-terser";
import css from "rollup-plugin-css-only";
import json from "@rollup/plugin-json";
import replace from "@rollup/plugin-replace";
import nodePolyfills from "rollup-plugin-polyfill-node";

const production = !process.env.ROLLUP_WATCH;

function serve() {
	let server;

	function toExit() {
		if (server) server.kill(0);
	}

	return {
		writeBundle() {
			if (server) return;
			server = require("child_process").spawn(
				"npm",
				["run", "start", "--", "--dev"],
				{
					stdio: ["ignore", "inherit", "inherit"],
					shell: true,
				}
			);

			process.on("SIGTERM", toExit);
			process.on("exit", toExit);
		},
	};
}

export default {
	input: "src/main.js",
	output: {
		sourcemap: true,
		format: "iife",
		name: "app",
		file: "public/build/bundle.js",
	},
	plugins: [
		svelte({
			compilerOptions: {
				dev: !production,
			},
		}),
		css({ output: "bundle.css" }),

		// This should fix dependencies and other weird shit going on.
		json(),
		nodeResolve({
			browser: true,
			dedupe: ["svelte"],
			preferBuiltins: false,
			jsnext: true,
			main: true,
		}),
		commonjs({ include: "node_modules/**" }),
		nodePolyfills(),

		!production && serve(),
		!production && livereload("public"),
		production && terser(),

		// Cause fuck node that's why
		replace({
			"process.env.NODE_DEBUG": JSON.stringify("development"), // or JSON.stringify('production')
		}),
	],
	watch: {
		clearScreen: false,
	},
};
