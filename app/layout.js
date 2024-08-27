import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Zharassar Daulet | Software Engineer",
  description:
    "React and TypeScript developer specializing in modern web applications.",
  keywords:
    "Zharassar Daulet, Жарасар Даулет, Software Engineer, React Developer, TypeScript Developer, Даулет Жарасар, жарасар, разработчик в 16",
  author: "Zharassar Daulet",
  openGraph: {
    title: "Zharassar Daulet | Software Engineer",
    description:
      "React and TypeScript developer specializing in modern web applications.",
    type: "website",
    locale: "en_US",
    url: "https://www.jarasar.com",
    site_name: "Zharassar Daulet Portfolio",
    images: [
      {
        url: "https://i.imgur.com/K9lVlYV.jpeg",
        width: 1200,
        height: 630,
        alt: "Zharassar Daulet - Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@jarasard",
    creator: "@jarasard",
  },
  alternates: {
    canonical: "https://www.jarasar.com",
    languages: {
      "ru-RU": "https://www.jarasar.com",
    },
  },
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
