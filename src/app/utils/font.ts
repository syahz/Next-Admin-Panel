/** @format */
import { Poppins, Roboto } from "next/font/google";

export const poppins_init = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
export const roboto_init = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
});

export const poppins = poppins_init.variable;
export const roboto = roboto_init.variable;
