import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
export const metadata = {
 title: "Guía 12 - React con Next.js",
 description: "Práctica de Lenguajes Interpretados en el Cliente",
};
export default function RootLayout({ children }) {
 return (
 <html lang="es">
 <body>{children}</body>
 </html>
 );
}

