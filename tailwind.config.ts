import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      systemColor:{
        'main': '#075D24',
        'off-white': '#fafafa',
        'absolute-white':'#fff',
        'grey-bg': '#474747',
        'grey-bg-40': '#F1F0F0',
      }
    },
  },
  plugins: [],
};
export default config;
