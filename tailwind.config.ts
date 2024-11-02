import type { Config } from "tailwindcss";
// let menuList = document.getElementById("nav-container") as HTMLElement
// menuList.style.maxHeight = "0px";
// function toggleMenu() {
//   if(menuList.style.maxHeight == "0px") 
//   {
//     menuList.style.maxHeight = "300px";
//   }
//   else
//   menuList.style.maxHeight = "0px";
// }
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
