/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "shorten-mobile": 'url("/bg-shorten-mobile.svg")',
        "shorten-desktop": 'url("/bg-shorten-desktop.svg")',
        "bg-boost-mobile": 'url("/bg-boost-mobile.svg")',
        "bg-boost-desktop": 'url("/bg-boost-desktop.svg")',
      },
      fontSize: {
        h1: "5rem", // 80px
        h2: "2.625rem", // 42px
        h3: "2.5rem", // 40px
        h4: "1.75rem", // 28px
        h5: "1.375rem", // 22px
        h6: "1.25rem", // 20px
        lg: "1.125rem", // 18px
        md: "1rem", // 16px
        sm: "0.9375rem", // 15px
      },
      lineHeight: {
        h1: "5.625rem", // 90px
        h2: "3rem", // 48px
        h3: "3rem", // 48px
        h4: "3rem", // 48px
        h5: "2.0625rem", // 33px
        h6: "1.875rem", // 30px
        lg: "1.875rem", // 30px
        md: "1.5rem", // 24px
        sm: "1.4375rem", // 23px
      },
      maxWidth: {
        container: "1110px",
      },
      screens: {
        xl: "1110px",
      },
    },
  },
  plugins: [],
};
