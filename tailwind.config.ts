import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/mdx-components.tsx",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "100%",
        md: "100%",
        lg: "1280px",
        xl: "1440px",
      },
    },
  },
  plugins: [],
};
export default config;
