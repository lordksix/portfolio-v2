import localFont from "next/font/local";
import { Inter } from "next/font/google";

export const calSans = localFont({
  src: "./CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
});
