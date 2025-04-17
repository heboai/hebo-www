import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        yellow: {
          50: "#fffbeb",
          100: "#fef3c7",
          200: "#fde68a",
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#f59e0b",
        },
        purple: {
          950: "#2e1065",
        },
        tab: {
          active: "#AFCFFF",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      maxWidth: {
        'container-sm': '705px',    // FAQ width
        'container-md': '800px',    // Lifecycle tabs width
        'container-lg': '871px',    // LinkedIn section, Enterprise pilot width
        'container-llm': '600px',   // Existing LLM width
        'container-2xl': '1536px',  // Hero, Footer, Join Community width
        'card-sm': '210px',         // LinkedIn card width
        'card-md': '280px',         // Mobile LinkedIn card width
        'dialog': '32rem',          // Dialog component width
        'sheet': '24rem',           // Sheet component width
      },
      maxHeight: {
        'mobile-menu': '80%',       // Mobile menu height
        'image-sm': '173px',        // Enterprise pilot image height
      },
      spacing: {
        'header-sm': '48px',
        'header-md': '52px',
        'container-sm': '705px',
        'container-md': '800px',
        'container-lg': '871px',
        'container-xl': '1280px',
        'container-2xl': '1536px',
        'card-sm': '210px',
        'card-md': '280px',
        'image-sm': '120px',
        'image-md': '173px',
      },
      
      gridTemplateColumns: {
        'linkedin-md': 'repeat(2, minmax(0, 1fr))',
        'linkedin-lg': 'repeat(4, minmax(0, 1fr))',
      },

      fontSize: {
        'heading-sm': ['22px', '1.2'],
        'heading-md': ['28px', '1.2'],
      },
    },
  },
  plugins: [],
}
export default config
