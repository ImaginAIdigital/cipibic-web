import type { Metadata } from "next";
import { Roboto, Roboto_Slab } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-roboto",
});

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-roboto-slab",
});

export const metadata: Metadata = {
  title: "CIPIBIC — Cámara de Industriales de Proyectos e Ingeniería de Bienes de Capital",
  description: "Entidad gremial empresaria que agrupa a los fabricantes de Bienes de Capital especiales de la República Argentina.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="es" className={`${roboto.variable} ${robotoSlab.variable}`}>
        <body className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
