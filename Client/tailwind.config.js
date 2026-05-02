/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  darkMode: "class",

  theme: {
    extend: {
      colors: {
        // 🔴 Core Theme (PDF Inspired - Royal IAS Look)
        primary: "#6b0f0f",       // deep maroon
        secondary: "#9f1d1d",     // lighter maroon
        tertiary: "#c2410c",      // warm accent (slight orange tint)

        background: "#fdf6ec",    // cream base
        surface: "#fffaf3",       // soft card background

        // 🧾 Surface system
        "surface-variant": "#f5e6d3",
        "surface-container": "#fdf6ec",
        "surface-container-low": "#f5e6d3",
        "surface-container-lowest": "#fffaf3",

        // 📝 Text colors
        "on-surface": "#3b1f1f",       // dark brown text
        "on-surface-variant": "#7c5a4f",
        "on-primary": "#ffffff",

        // ✨ Accent (Gold feel from borders in PDF)
        accent: "#d4af37",

        // ❌ States
        error: "#dc2626",
      },

      fontFamily: {
        headline: ["Playfair Display", "serif"], // premium feel
        body: ["Inter", "sans-serif"],
        label: ["Inter", "sans-serif"],
      },

      borderRadius: {
        DEFAULT: "0.375rem",
        lg: "0.75rem",
        xl: "1rem",
        full: "9999px",
      },

      boxShadow: {
        glow: "0 0 30px rgba(107,15,15,0.3)",
        premium:
          "0 0 20px rgba(107,15,15,0.25), inset 0 0 10px rgba(212,175,55,0.2)",
        button: "0 8px 25px rgba(107,15,15,0.3)",
        soft: "0 4px 20px rgba(0,0,0,0.08)",
      },

      backdropBlur: {
        xl: "20px",
      },

      backgroundImage: {
        "radial-top":
          "radial-gradient(ellipse at top, var(--tw-gradient-stops))",

        // subtle luxury gradient
        "premium-gradient":
          "linear-gradient(135deg, #6b0f0f 0%, #9f1d1d 100%)",
      },
    },
  },

  plugins: [],
};