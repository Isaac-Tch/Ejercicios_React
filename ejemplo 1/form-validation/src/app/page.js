"use client";
import { useState } from "react";
import TablaDatos from "@/components/TablaDatos";

const REGEX_CORREO = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const columnas = [
 { campo: "nombre", titulo: "Nombre" },
 { campo: "correo", titulo: "Correo" },
];

export default function Home() {
 const [formData, setFormData] = useState({ nombre: "", correo: "" });
 const [errores, setErrores] = useState({});
 const [registros, setRegistros] = useState([]);
 const [enviado, setEnviado] = useState(false);
 
 const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData({ ...formData, [name]: value });
  setEnviado(false);
  };

 const validar = () => {
  const temp = {};
  if (!formData.nombre.trim()) {
  temp.nombre = "El nombre es obligatorio.";
  }
  if (!formData.correo.trim()) {
  temp.correo = "El correo es obligatorio.";
  } else if (!REGEX_CORREO.test(formData.correo)) {
  temp.correo = "Ingrese un correo con formato válido.";
  }
  setErrores(temp);
  return Object.keys(temp).length === 0;
 };

 const handleSubmit = (e) => {
  e.preventDefault();
  if (validar()) {
    const nuevo = { id: crypto.randomUUID(), ...formData };
    setRegistros([...registros, nuevo]);
    setFormData({ nombre: "", correo: "" });
    setEnviado(true);
  }
 };

 return (
 <main className="container py-5" style={{ maxWidth: 720 }}>
  <h2>Formulario con validación</h2>
  <form onSubmit={handleSubmit} noValidate>
    <div className="mb-3">
      <label htmlFor="nombre" className="form-label">Nombre</label>
      <input
        type="text"
        className={`form-control ${errores.nombre ? "is-invalid" : ""}`}
        id="nombre"
        name="nombre"
        value={formData.nombre}
        onChange={handleChange}
      />
      {errores.nombre && (
        <div className="invalid-feedback">{errores.nombre}</div>
      )}
    </div>
    <div className="mb-3">
      <label htmlFor="correo" className="form-label">Correo</label>
      <input
        type="email"
        className={`form-control ${errores.correo ? "is-invalid" : ""}`}
        id="correo"
        name="correo"
        value={formData.correo}
        onChange={handleChange}
      />
      {errores.correo && (
        <div className="invalid-feedback">{errores.correo}</div>
      )}
    </div>
      <button type="submit" className="btn btn-primary">Enviar</button>
  </form>

  {enviado && (
    <div className="alert alert-success mt-3">
      Datos enviados correctamente.
      </div>
    )}

    <TablaDatos titulo="Datos enviados" columnas={columnas} filas={registros} />
  </main>
 );
}
