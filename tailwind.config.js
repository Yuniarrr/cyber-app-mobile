// tailwind.config.js

module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gradientColorStops: theme => ({
        ...theme('colors'),
      }),
    },
    colors: {
      white: "#FFFFFF",
      "darkblue": "#1E2857",
      "gray-chateau": "#9CA3AF",
      "pale-sky": '#6B7280',
      "light-green": "#EAFCF2",
      green: "#25D076",
      "light-yellow": "#FFFAEC",
      "yellow": "#FDC83D",
      "light-gray": "#F3F4F6",
      "blue-gray": "#BBC2E1",
      "gray-line": "#EEEFF2",
      red: "#FF445D",
      "light-red": "#FFCCCB",
      "light-blue": "#DFF2FF",
      blue: "#6F9CDE"

    },
  },
  plugins: [
    require('tailwindcss-gradients'),
  ],
};
