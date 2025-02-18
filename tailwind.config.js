module.exports = {
  content: [
    "./*.html",
    "./pages/*.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFB400",
        secondary: "#F3F4F6",
        textgray: "#6B7280",
        accent: "#3B82F6",
        error: "#EF4444",
        success: "#10B981",
      },
      fontFamily: {
        sans: ['Geist', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      screens: {
        'xs': '480px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        bumblebee: {
          ...require("daisyui/src/theming/themes")["[data-theme=bumblebee]"],
          primary: "#FFB400",
          "primary-content": "#FFFFFF",
          neutral: "#6B7280",
          "base-100": "#FFFFFF",
          "base-200": "#F3F4F6",
        },
      },
    ],
  },
} 