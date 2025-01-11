import svgToDataUri from 'mini-svg-data-uri';
import defaultTheme from 'tailwindcss/defaultTheme';
import colors from 'tailwindcss/colors';

/** @type {import('tailwindcss').Config} */
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
		  muted: 'var(--muted)',
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
			  backgroundPosition: '50% 50%, 50% 50%',
			},
			to: {
			  backgroundPosition: '350% 50%, 350% 50%',
			},
		  },
		  move: {
			"0%": { transform: "translateX(-200px)" },
			"100%": { transform: "translateX(200px)" },
		  },
		  spotlight: {
			'0%': {
			  opacity: 0,
			  transform: 'translate(-72%, -62%) scale(0.6)',
			},
			'100%': {
			  opacity: 1,
			  transform: 'translate(-50%, -40%) scale(1)',
			},
		  },
		  shimmer: {
			from: {
			  backgroundPosition: '0 0',
			},
			to: {
			  backgroundPosition: '-200% 0',
			},
		  },
		  fadeIn: {
			'0%': {
			  opacity: 0,
			},
			'100%': {
			  opacity: 1,
			},
		  },
		  slideUp: {
			'0%': {
			  transform: 'translateY(20px)',
			  opacity: 0,
			},
			'100%': {
			  transform: 'translateY(0)',
			  opacity: 1,
			},
		  },
		},
		fontFamily: {
		  orbitron: ['Orbitron', 'sans-serif'],
		  inter: ['Inter', 'sans-serif'],
		},
		spacing: {
		  'screen-10': '10vh',
		  'screen-20': '20vh',
		},
		borderRadius: {
		  lg: 'var(--radius)',
		  md: 'calc(var(--radius) - 2px)',
		  sm: 'calc(var(--radius) - 4px)',
		},
	  },
	},
  plugins: [
    function ({
      matchUtilities,
      theme,
    }: {
      matchUtilities: (
        utilities: Record<string, (value: any) => any>,
        options: { values: Record<string, any>; type: string }
      ) => void;
      theme: (path: string) => any;
    }) {
      matchUtilities(
        {
          'bg-grid': (value: string) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme('backgroundColor')), type: 'color' }
      );
    },
  ],
};

// Utility function to flatten the color palette
function flattenColorPalette(colors: Record<string, any>) {
  const result: Record<string, string> = {};
  for (const [key, value] of Object.entries(colors)) {
    if (typeof value === 'object') {
      for (const [nestedKey, nestedValue] of Object.entries(value)) {
        result[`${key}-${nestedKey}`] = nestedValue as string;
      }
    } else {
      result[key] = value as string;
    }
  }
  return result;
}

