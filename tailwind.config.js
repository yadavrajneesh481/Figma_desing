/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        darkslategray: {
          "100": "#403d39",
          "200": "#333",
        },
        midnightblue: "#0f2b95",
        mediumaquamarine: "#3eb489",
        gray: {
          "100": "#828282",
          "200": "#7b7b7b",
        },
        black: "#000",
        aliceblue: "rgba(236, 240, 246, 0.53)",
        gainsboro: "#d9d9d9",
        whitesmoke: "#f8f8f8",
        goldenrod: "#fec42d",
        dodgerblue: "#468bfd",
        silver: "#c4c4c4",
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
        roboto: "Roboto",
      },
      borderRadius: {
        "3xs": "10px",
        "8xs": "5px",
        "341xl": "360px",
        xl: "20px",
      },
    },
    fontSize: {
      base: "16px",
      xl: "20px",
      "5xl": "24px",
      mini: "15px",
      xs: "12px",
      "3xs": "10px",
      "4xs": "9px",
      smi: "13px",
      "7xs": "6px",
      "5xs": "8px",
      sm: "14px",
      "16xl": "35px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
