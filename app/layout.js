import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
    weight: ["400", "600"],
  subsets: ["latin"],
});

export const metadata = {
  title: "QurbanMudah2025",
  description: "Mari berqurban bersama kami.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
