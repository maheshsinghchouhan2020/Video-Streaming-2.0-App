import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#151522",
        chineseSilver:"#ccc",   //for text
        vividRed:"#a80929",     //for button bg
        darkGray:"#262626",     //for navbar bg
        brightYellow:"#f1c40f" , //navbar text on hover
        gradient1:"#232323",
        gradient2:"#232323fa",
        darkRed: "#8f362b"  //languages hover
      },
      padding: {
        px: "2.5rem",
        py: "1rem",
        small_screens: "1rem",
      },
      fontSize: {
        // Default (Desktop)
        h1: ["18px", { lineHeight: "2.85rem", fontWeight: "700" }], // Title (Bold)
        h2: ["16px", { lineHeight: "1.8rem", fontWeight: "400" }], // Subtitle (No Bold)
        h3: ["11px", { fontWeight: "400" }], // Text (No Bold)
        h4: ["15px", { fontWeight: "400" }],
        h5: ["1rem", { lineHeight: "1.5rem", fontWeight: "400" }],
        h6: ["0.875rem", { lineHeight: "1.25rem", fontWeight: "400" }],
        h7:["12px", { lineHeight: "1.5rem", fontWeight: "400" }],  //btn text
      },

      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      fontWeight: {
        regular: "400",
        medium: "500",
        bold: "700",
      },
    },
  },
  plugins: [],
} satisfies Config;