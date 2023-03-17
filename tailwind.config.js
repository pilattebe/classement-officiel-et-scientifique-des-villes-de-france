/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				ad: "rgb(81,14,6)",
			},
			screens: {
				tall: { raw: "(min-height: 700px)" },
				vtall: { raw: "(min-height: 800px)" },
			},
		},
	},
	plugins: [],
};
