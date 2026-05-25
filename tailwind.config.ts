import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ["var(--font-poppins)", "ui-sans-serif", "system-ui", "sans-serif"],
        accent: ["var(--font-mulish)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-montserrat)", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["Times New Roman", "Times", "serif"]
      },
      colors: {
        "accent-orange": "#FF5A4E",
        "accent-blue": "#3a45ff",
        "trust-green": "#00b67a"
      }
    }
  },
  plugins: []
};

export default config;
