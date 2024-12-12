module.exports = {
  content: [
    "./*.html",
    "./pages/*.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FCD34D",    // Bumblebee Yellow
        secondary: "#F3F4F6",  // Muted Gray
        textgray: "#6B7280",   // Steel Gray
        accent: "#3B82F6",     // Muted Blue
        error: "#EF4444",      // Soft Red
        success: "#10B981",    // Soft Green
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        bumblebee: {
          ...require("daisyui/src/theming/themes")["[data-theme=bumblebee]"],
          primary: "#FCD34D",
          "primary-content": "#FFFFFF",
          neutral: "#6B7280",
          "base-100": "#FFFFFF",
          "base-200": "#F3F4F6",
        },
      },
    ],
  },
} 