import { Roboto } from "next/font/google";
import { Roboto_Slab } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["cyrillic"],
  weight:["400", "700"]
});

const roboto_slab = Roboto_Slab({
  subsets: ["cyrillic"],
  weight:["400", "700"]
});

export const metadata = {
  title: "Popug - интернет магазин по продаже попугаев",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto_slab.className}>{children}</body>
    </html>
  );
}
