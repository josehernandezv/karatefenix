import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				// display: ['Reem Kufi', ...defaultTheme.fontFamily.sans],
				display: ['Teko', ...defaultTheme.fontFamily.sans],
				sans: ['Montserrat', ...defaultTheme.fontFamily.sans]
			}
		}
	},
	plugins: [require('@tailwindcss/typography'), require('daisyui')],
	daisyui: {
		themes: [
			{
				fire: {
					primary: '#D32614',
					secondary: '#49498A',
					accent: '#7CBC99',
					neutral: '#F3ECE4',
					'base-100': '#FDFBFA',
					'base-200': '#F8F4EF'
				}
			},
			'light',
			'dark',
			'cupcake'
		]
	}
};
