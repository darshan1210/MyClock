
import "./globals.css";


export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
  manifest: "/manifest.json",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-adsense-account" content="ca-pub-6924546822554093" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6924546822554093" crossorigin="anonymous"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
