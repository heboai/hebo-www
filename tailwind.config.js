module.exports = {
  content: [
    "./*.html",
    "./pages/*.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#EEC544",
        secondary: "#F3F4F6",
        textgray: "#6B7280",
        accent: "#3B82F6",
        error: "#EF4444",
        success: "#10B981",
      },
      fontFamily: {
        sans: ['Geist', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        bumblebee: {
          ...require("daisyui/src/theming/themes")["[data-theme=bumblebee]"],
          primary: "#EEC544",
          "primary-content": "#FFFFFF",
          neutral: "#6B7280",
          "base-100": "#FFFFFF",
          "base-200": "#F3F4F6",
        },
      },
    ],
  },
} 