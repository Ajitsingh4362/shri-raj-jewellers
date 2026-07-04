import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Shri Raj Jewellers | Gold, Silver & Diamond Jewellery — Tilak Nagar, New Delhi",
  description:
    "Shri Raj Jewellers — Trust, Purity, Elegance. BIS Hallmarked gold, silver and diamond jewellery near Metro Gate No. 1, Tilak Nagar, New Delhi. Visit the store or enquire on WhatsApp.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700;900&family=Work+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col antialiased bg-ivory text-ink font-body">
        {children}
      </body>
    </html>
  );
}
