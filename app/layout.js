import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Zharassar Daulet",
  description: "Software Engineer",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      style={{
        overflow: "hidden",
      }}>
      <body
        className={inter.className}
        style={{
          overflowX: "hidden",
        }}>
        {children}
      </body>
    </html>
  );
}
