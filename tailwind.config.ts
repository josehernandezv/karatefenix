import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';
import daisyui from 'daisyui';
import typography from '@tailwindcss/typography';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				// display: ['Reem Kufi', ...defaultTheme.fontFamily.sans],
				display: ['Teko', ...fontFamily.sans],
				sans: ['Montserrat', ...fontFamily.sans]
			}
		}
	},
	plugins: [typography, daisyui],
	daisyui: {
		themes: [
			{
				fire: {
					primary: '#D32614',
					secondary: '#49498A',
					accent: '#7CBC99',
					neutral: '#312F2E',
					'base-100': '#FDFBFA',
					'base-200': '#F8F4EF'
				}
			},
			'light',
			'dark',
			'cupcake'
		]
	}
} satisfies Config;
