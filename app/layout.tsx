import "./globals.css";
import type { Metadata } from "next";
import { Container } from '@/components'
import Image from "next/image";
// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });
// className={inter.className}

export const metadata: Metadata = {
  title: "Buena Tierra",
  description: "Iglesia Cristiana en Toluca",
};

const Footer = () => (
  <footer className="">
    
  </footer>
)
const Header = () => (
  <header className="">
    <Container>
      <Image src="/logo.png" alt="Buena Tierra" width={200} height={200} />
      <nav></nav>
      
    </Container>
  </header>
)


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
