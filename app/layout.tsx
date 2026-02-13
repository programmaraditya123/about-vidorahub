import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "VidoraHub",
  description: "About Page of vidorahub",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body>
        {children}
      </body>
    </html>
  );
}
