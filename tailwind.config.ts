import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';
import daisyui from 'daisyui';
import typography from '@tailwindcss/typography';
import animate from 'tailwindcss-animate';
import fluid from 'tailwind-fluid-typography';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fluidTypography: {},
		extend: {
			fontFamily: {
				display: [
					'Bakemono',
					{
						...fontFamily.sans,
						fontVariationSettings: '"MONO" 500'
					}
				],
				sans: ['Bakemono', ...fontFamily.sans]
			},
			animationTimingFunction: {
				emphasize: 'cubic-bezier(0.2, 0.0, 0, 1.0)'
			}
		}
	},
	plugins: [typography, daisyui, animate, fluid],
	daisyui: {
		themes: [
			{
				fire: {
					'color-scheme': 'light',
					primary: '#E6373A',
					neutral: '#2E2D33',
					// 'base-100': '#EDEDED',
					'base-100': '#F7FCFE',
					'base-content': '#2E2D33',
					// '--rounded-box': '0.25rem',
					// '--rounded-btn': '0.125rem',
					// '--rounded-badge': '0.125rem',
					// '--tab-radius': '0.125rem'
					'--rounded-box': '0',
					'--rounded-btn': '0',
					'--rounded-badge': '0',
					'--tab-radius': '0'
				}
			},
			'light',
			'dark',
			'cupcake'
		]
	}
} satisfies Config;
