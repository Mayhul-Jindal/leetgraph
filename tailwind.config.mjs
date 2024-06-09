/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},

    daisyui: {
        themes: [
            {
                leetcode: {
                    "primary": "#FFA116",
                    "secondary": "#d9d9d9",
                    "base-100": "#1A1A1A",
                    "success": "#4CC575",
                    "error": "#F63636",
                },
            },
            
        ],
    },

	plugins: [
        function({ addComponents }) {
            addComponents({
              '.modal-blur': {
                '&::backdrop': {
                  'backdrop-filter': 'blur(2px)',
                },
              },
            });
        },
        require('daisyui'),
    ],
}
