import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Calculadora Central Org",
  description: "Proyecto colaborativo de Calculadora Next.js - Organización",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased flex items-center justify-center min-h-screen p-4">
        {children}
      </body>
    </html>
  );
}
