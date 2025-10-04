import type { Config } from 'tailwindcss';

export const tailwindConfig: Partial<Config> = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Add shared theme extensions here
    },
  },
  plugins: [
    // Add shared plugins here
  ],
};
