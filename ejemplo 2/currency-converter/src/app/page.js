"use client";
import { useState } from "react";
// Tipos de cambio ficticios para el ejemplo (unidades por 1 USD).
// No reflejan el mercado actual.
const TASAS_POR_USD = {
 USD: 1,
 EUR: 0.86,
 JPY: 147.5,
 GBP: 0.75,
};
const MONEDAS = [
 { codigo: "USD", nombre: "Dólar estadounidense" },
 { codigo: "EUR", nombre: "Euro" },
 { codigo: "JPY", nombre: "Yen japonés" },
 { codigo: "GBP", nombre: "Libra esterlina" },
];
function formatear(valor, moneda) {
 return new Intl.NumberFormat("es-SV", {
 style: "currency",
 currency: moneda,
 }).format(valor);
}
export default function Conversor() {
 const [monto, setMonto] = useState("");
 const [origen, setOrigen] = useState("USD");
 const [destino, setDestino] = useState("EUR");
 const [resultado, setResultado] = useState(null);
 const [error, setError] = useState("");
 const handleConvert = (e) => {
 e.preventDefault();
 const cantidad = parseFloat(monto);
 if (isNaN(cantidad) || cantidad <= 0) {
 setError("Ingrese un monto mayor que cero.");
 setResultado(null);
 return;
 }
 setError("");
 const tasa = TASAS_POR_USD[destino] / TASAS_POR_USD[origen];
 setResultado({ cantidad, origen, destino, convertido: cantidad * tasa });
 };

 const intercambiar = () => {
 setOrigen(destino);
 setDestino(origen);
 setResultado(null);
 };
 return (
 <main className="container py-5" style={{ maxWidth: 720 }}>
 <h2>Conversor de monedas</h2>
 <form onSubmit={handleConvert} noValidate>
 <div className="mb-3">
 <label htmlFor="monto" className="form-label">Monto</label>
 <input
 type="number"
 className={`form-control ${error ? "is-invalid" : ""}`}
 id="monto"
 min="0"
 step="0.01"
 value={monto}
 onChange={(e) => setMonto(e.target.value)}
/>
 {error && <div className="invalid-feedback">{error}</div>}
 </div>
 <div className="row g-3 mb-3">
 <div className="col-md-6">
 <label htmlFor="origen" className="form-label">De</label>
 <select
 className="form-select"
 id="origen"
 value={origen}
 onChange={(e) => setOrigen(e.target.value)}
 >
 {MONEDAS.map((m) => (
 <option key={m.codigo} value={m.codigo}>
 {m.codigo} - {m.nombre}
 </option>
 ))}
 </select>
 </div>
 <div className="col-md-6">
 <label htmlFor="destino" className="form-label">A</label>
 <select
 className="form-select"
 id="destino"
 value={destino}
 onChange={(e) => setDestino(e.target.value)}
 >
 {MONEDAS.map((m) => (
 <option key={m.codigo} value={m.codigo}>
 {m.codigo} - {m.nombre}
 </option>
 ))}
 </select>
 </div>
 </div>
 <div className="d-flex flex-wrap gap-2">
 <button type="submit" className="btn btn-primary">Convertir</button>
 <button
 type="button"
 className="btn btn-outline-dark"
 onClick={intercambiar}
 >
 Intercambiar monedas
 </button>
 </div>
 </form>
 {resultado && (
 <div className="alert alert-success mt-3">
 {formatear(resultado.cantidad, resultado.origen)} equivale a{" "}
 <strong>{formatear(resultado.convertido, resultado.destino)}</strong>
 </div>
 )}
 </main>
 );
}
