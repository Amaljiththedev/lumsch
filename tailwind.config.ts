import svgToDataUri from 'mini-svg-data-uri';


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
