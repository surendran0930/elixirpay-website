import svgToDataUri from 'mini-svg-data-uri';

import flattenColorPalette from 'tailwindcss/lib/util/flattenColorPalette';
 
function addVariablesForColors({ addBase, theme }) {

	const allColors = flattenColorPalette(theme('colors'));

	const newVars = Object.fromEntries(

		Object.entries(allColors).map(([key, val]) => [`--${key}`, val])

	);
 
	addBase({

		':root': newVars

	});

}
 
/** @type {import('tailwindcss').Config} */

export default {

	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {

		// Base design is authored at 1920x1080 (Figma "Large desktop" frame).

		// Breakpoints below match the Responsive Sizing Reference table (Section 14).

		screens: {

			sm: '480px', // Large mobile

			md: '768px', // Tablet (portrait)

			lg: '1024px', // Laptop / small desktop

			xl: '1440px', // Large desktop

			'2xl': '1920px' // Design-native width

		},

		extend: {

			maxWidth: {

				container: '1920px'

			},

			colors: {

				// Design system — Tokens / Colour palette (Light mode)

				brand: {

					primary: '#171717', // gray-900, used as default body text

					accent: '#1555FC' // blue-500, used as the interactive/CTA color

				},

				gray: {

					50: '#F8F8F8',

					100: '#F3F3F3',

					200: '#EDEDED',

					300: '#E2E2E2',

					400: '#C7C7C7',

					500: '#999999',

					600: '#7C7C7C',

					700: '#525252',

					800: '#383838',

					900: '#171717'

				},

				blue: {

					// Functional UI — Information

					50: '#E7EEFF',

					100: '#BDCFFF',

					200: '#93B1FF',

					300: '#6993FF',

					400: '#3F74FF',

					500: '#1555FC',

					600: '#023CD3',

					700: '#002FAA',

					800: '#002481',

					900: '#001959'

				},

				green: {

					// Functional UI — Success

					50: '#F4FFF6',

					100: '#DFFCE8',

					200: '#C8F3D7',

					300: '#B0E7C4',

					400: '#88D5A5',

					500: '#59BA88',

					600: '#30A66D',

					700: '#278F5E',

					800: '#16794C',

					900: '#173B2C'

				},

				red: {

					// Functional UI — Error

					50: '#FFF7F7',

					100: '#FFE7E7',

					200: '#FFD8D8',

					300: '#FDC2C2',

					400: '#F79596',

					500: '#E03636',

					600: '#CC2929',

					700: '#B52A2A',

					800: '#941F1F',

					900: '#6B1515'

				},

				amber: {

					// Functional UI — Warning

					50: '#FDFAED',

					100: '#FFF7D3',

					200: '#FEEDA9',

					300: '#FBD873',

					400: '#FBCC55',

					500: '#E79913',

					600: '#DB7706',

					700: '#B35309',

					800: '#91400D',

					900: '#763813'

				},

				// Brand colours — optional secondary/tertiary picks, shown greyed-out

				// (unselected/inactive) in the source file, so these hex values are a

				// best-effort read and should be double-checked against Figma directly.

				orange: {

					50: '#FFF5F5',

					100: '#FFEFE4',

					200: '#FFDEC8',

					300: '#FFC9A3',

					400: '#F4B02F',

					500: '#E88C13',

					600: '#D45A08',

					700: '#BD3E0C',

					800: '#9E3513',

					900: '#682711'

				},

				teal: {

					50: '#F0FDFA',

					100: '#E6F7F4',

					200: '#BAE3E1',

					300: '#87DEDA',

					400: '#73D1C4',

					500: '#39BAAD',

					600: '#0D8DB2',

					700: '#0F7368',

					800: '#116CE7',

					900: '#114D41'

				},

				violet: {

					50: '#F8FAFF',

					100: '#F0E8FF',

					200: '#A0BDFF',

					300: '#C9BAF8',

					400: '#8DAFF5',

					500: '#8B40E3',

					600: '#5F30B1',

					700: '#4F3D81',

					800: '#392580',

					900: '#231059'

				}

			},

			fontFamily: {

				// Tokens — Typography: primary + secondary typefaces

				sans: ['Host Grotesk', 'system-ui', 'sans-serif'],

				mono: ['Geist Mono', 'ui-monospace', 'monospace']

			},

			fontWeight: {

				light: '300',

				regular: '400',

				medium: '500',

				semibold: '600',

				bold: '700'

			},

			fontSize: {

				// Tokens — Typography: Web scale (px), Tailwind expects rem below

				'web-88': ['5.5rem', { lineHeight: '1.05' }],

				'web-80': ['5rem', { lineHeight: '1.05' }],

				'web-72': ['4.5rem', { lineHeight: '1.1' }],

				'web-64': ['4rem', { lineHeight: '1.1' }],

				'web-56': ['3.5rem', { lineHeight: '1.15' }],

				'web-52': ['3.25rem', { lineHeight: '1.15' }],

				'web-48': ['3rem', { lineHeight: '1.2' }],

				'web-44': ['2.75rem', { lineHeight: '1.2' }],

				'web-40': ['2.5rem', { lineHeight: '1.25' }],

				'web-32': ['2rem', { lineHeight: '1.3' }],

				'web-28': ['1.75rem', { lineHeight: '1.35' }],

				'web-26': ['1.625rem', { lineHeight: '1.35' }],

				'web-24': ['1.5rem', { lineHeight: '1.4' }],

				'web-20': ['1.25rem', { lineHeight: '1.4' }],

				'web-16': ['1rem', { lineHeight: '1.5' }],

				'web-14': ['0.875rem', { lineHeight: '1.5' }],

				'web-12': ['0.75rem', { lineHeight: '1.5' }],

				// Tokens — Typography: Paragraph scale (px)

				'para-24': ['1.5rem', { lineHeight: '1.45' }],

				'para-20': ['1.25rem', { lineHeight: '1.45' }],

				'para-18': ['1.125rem', { lineHeight: '1.45' }],

				'para-16': ['1rem', { lineHeight: '1.45' }],

				'para-14': ['0.875rem', { lineHeight: '1.45' }],

				'para-12': ['0.75rem', { lineHeight: '1.45' }]

			},

			spacing: {

				// 8px base grid per Section 3

				18: '4.5rem'

			}

		}

	},

	plugins: [

		addVariablesForColors,

		function ({ matchUtilities, theme }) {

			matchUtilities(

				{

					'bg-grid': (value) => ({

						backgroundImage: `url("${svgToDataUri(

							`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40" fill="none" stroke="${value}"><path d="M0 .5H39.5V40"/></svg>`

						)}")`

					}),

					'bg-grid-small': (value) => ({

						backgroundImage: `url("${svgToDataUri(

							`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`

						)}")`

					}),

					'bg-dot': (value) => ({

						backgroundImage: `url("${svgToDataUri(

							`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`

						)}")`

					})

				},

				{ values: flattenColorPalette(theme('backgroundColor')), type: 'color' }

			);

		}

	]

};
 