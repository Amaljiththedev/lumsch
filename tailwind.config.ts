const { default: flattenColorPalette } = require("tailwindcss/lib/util/flattenColorPalette");
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{ts,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class", "class"], // Dark mode will be activated using the class
  theme: {
  	extend: {
  		colors: {
  			background: 'var(--background)',
  			foreground: 'var(--foreground)',
  			accent: 'var(--accent)',
  			muted: 'var(--muted)'
  		},
  		animation: {
  			aurora: 'aurora 60s linear infinite',
  			spotlight: 'spotlight 3s ease .75s 1 forwards',
  			fadeIn: 'fadeIn 1.5s ease-in-out',
  			slideUp: 'slideUp 1.5s ease-in-out',
  			shimmer: 'shimmer 2s linear infinite',
        move: "move 5s linear infinite",
        
  		},
  		keyframes: {
  			aurora: {
  				from: {
  					backgroundPosition: '50% 50%, 50% 50%'
  				},
  				to: {
  					backgroundPosition: '350% 50%, 350% 50%'
  				}
  			},
        move: {
          "0%": { transform: "translateX(-200px)" },
          "100%": { transform: "translateX(200px)" },
        },
  			spotlight: {
  				'0%': {
  					opacity: 0,
  					transform: 'translate(-72%, -62%) scale(0.6)'
  				},
  				'100%': {
  					opacity: 1,
  					transform: 'translate(-50%, -40%) scale(1)'
  				}
  			},
  			shimmer: {
  				from: {
  					backgroundPosition: '0 0'
  				},
  				to: {
  					backgroundPosition: '-200% 0'
  				}
  			},
  			fadeIn: {
  				'0%': {
  					opacity: 0
  				},
  				'100%': {
  					opacity: 1
  				}
  			},
  			slideUp: {
  				'0%': {
  					transform: 'translateY(20px)',
  					opacity: 0
  				},
  				'100%': {
  					transform: 'translateY(0)',
  					opacity: 1
  				}
  			}
  		},
  		fontFamily: {
  			orbitron: [
  				'Orbitron',
  				'sans-serif'
  			],
  			inter: [
  				'Inter',
  				'sans-serif'
  			]
  		},
  		spacing: {
  			'screen-10': '10vh',
  			'screen-20': '20vh'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
    addVariablesForColors, // Custom plugin for adding CSS variables
      require("tailwindcss-animate")
],
};

// Plugin to add global CSS variables for Tailwind's color palette
function addVariablesForColors({ addBase, theme }: { addBase: Function, theme: Function }) {
  const allColors = flattenColorPalette(theme("colors"));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
  addBase({ ":root": newVars });
}