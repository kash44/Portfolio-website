module.exports = {
  // mode: 'jit',
  // purge: [
  //   './public/**/*.html',
  //   './src/**/*.{js,jsx,ts,tsx,vue}'
  // ],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        royalBlue: "#15cdfc",
        chineseSilver: "#cccccc",
      },
      backgroundColor: {
        "royal-blue": "#15cdfc",
        "deep-blue": "#0f172a",
      },
      boxShadow: {
        "3xl": "0 0 20px 0 rgb(255, 255, 224)",
      },
      keyframes: {
        rotating: {
          "0%, 100%": {
            transform: "rotateX(0deg) rotateY(0deg) rotateZ(0deg)",
          },
          "16%": { transform: "rotateY(-90deg)" },
          "33%": { transform: "rotateY(-90deg) rotateZ(90deg)" },
          "50%": { transform: "rotateY(-180deg) rotateZ(90deg)" },
          "66%": { transform: "rotateY(-270deg) rotateZ(90deg)" },
          // "76%": { transform: "rotateY(-180deg) rotateZ(180deg)" },
          "83%": { transform: "rotateX(00deg)" },
        },
      },
      animation: {
        "spin-cube": "rotating 12s ease-in-out infinite",
      },
    },
  },
  tailwindConfig: "./styles/tailwind.config.js",
  plugins: [
    require("prettier-plugin-tailwindcss"),
    require("tailwindcss-transforms")({
      "3d": true,
    }),
  ],
};
