import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: { extend: { fontFamily: { serif: ['Playfair Display', 'Georgia', 'serif'], sans: ['Inter', 'system-ui', 'sans-serif'] }, colors: { 'pl-dark': '#0f172a', 'pl-charcoal': '#1e2937', 'pl-gold': '#c5a26f', 'pl-cream': '#faf8f5', 'pl-terracotta': '#9f5f4a' } } },
  plugins: []
};
export default config;