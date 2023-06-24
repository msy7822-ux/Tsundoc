import type { Config } from "tailwindcss";

const spacingObj = Object.fromEntries(
  [...Array(1201)].map((_, i) => i).map((num) => [num, `${num}px`])
);

const zIndexValues = Object.fromEntries(
  [...Array(11)].map((_, i) => i * 10).map((num) => [num, `${num}`])
);

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        main: "#4157D0",
      },
      spacing: {
        ...spacingObj,
      },
      maxWidth: {
        ...spacingObj,
      },
      maxHeight: {
        ...spacingObj,
      },
      borderRadius: {
        "4xl": "2rem",
      },
      zIndex: {
        ...zIndexValues,
      },
      height: {
        "screen-without-header": "calc(100vh - 110px)",
      },
    },
  },
  plugins: [],
} satisfies Config;
