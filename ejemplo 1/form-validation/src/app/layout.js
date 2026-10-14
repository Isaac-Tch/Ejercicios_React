import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Guía 12 - React con Next.js",
  description: "Práctica de Lenguajes Interpretados en el Cliente",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

