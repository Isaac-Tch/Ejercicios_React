export default function TablaDatos({ titulo, columnas, filas }) {
 if (filas.length === 0) {
 return <p className="text-muted mt-4">Aún no hay registros.</p>;
 }
  return (
 <>
 <h3 className="mt-5">{titulo}</h3>
 <div className="table-responsive">
 <table className="table table-striped">
 <thead>
 <tr>
 {columnas.map((col) => (
 <th key={col.campo}>{col.titulo}</th>
 ))}
 </tr>
 </thead>
 <tbody>
 {filas.map((fila) => (
 <tr key={fila.id}>
 {columnas.map((col) => (
 <td key={col.campo}>{fila[col.campo]}</td>
 ))}
 </tr>
 ))}
 </tbody>
 </table>
 </div>
 </>
 );
}