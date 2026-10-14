"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
const enlaces = [
 { href: "/", texto: "Formulario" },
 { href: "/conversor", texto: "Conversor" },
];
export default function Navbar() {
 const pathname = usePathname();
 const [abierto, setAbierto] = useState(false);
 return (
 <nav className="navbar navbar-expand-md navbar-dark bg-primary">
 <div className="container">
 <Link className="navbar-brand" href="/">Guía 12</Link>
 <button
 className="navbar-toggler"
 type="button"
 aria-label="Mostrar menú"
 aria-expanded={abierto}
 onClick={() => setAbierto(!abierto)}
 >
 <span className="navbar-toggler-icon"></span>
 </button>
 <div className={`collapse navbar-collapse ${abierto ? "show" : ""}`}>
 <ul className="navbar-nav ms-auto">
 {enlaces.map((enlace) => (
 <li className="nav-item" key={enlace.href}>
 <Link
 href={enlace.href}
className={`nav-link ${pathname === enlace.href ? "active" : ""}`}
 onClick={() => setAbierto(false)}
 >
 {enlace.texto}
 </Link>
 </li>
 ))}
 </ul>
 </div>
 </div>
 </nav>
 );
}
