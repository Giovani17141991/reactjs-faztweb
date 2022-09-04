import "./tasks.css";

export function TaskCard({ ready }) {
  /*  const cardStyles = { background: "#202020", color: "#fff", padding: "20px" };

  const tittleStyle = { fontWeight: "lighter" }; */

  return (
    <div className="card">
      <h1>Mi primer tarjeta</h1>
      <span className={ready ? 'bg-green':'bg-red'}>
        {ready === true ? "Tarea realizada" : "Tarea pendiente"}
      </span>
    </div>
  );
}
