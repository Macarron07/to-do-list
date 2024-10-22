"use client"
import Title from "./components/title";
import React, { useState } from "react";
export default function Home() {
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [tareas, setTareas] =useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitulo("");
    setDescripcion(""); 
    setTareas([...tareas, {titulo, descripcion}]);
    console.log(tareas);
  };

  let mostrarTareas = <h2>No hay tareas</h2>;
  mostrarTareas = tareas.map((tarea, desc) => {
    return (
      <div>
        <h1>{tarea.titulo}</h1>
        <p>{tarea.descripcion}</p>
      </div>
    )
  })
  return (
    <>
    <Title/>
    <form action="" onSubmit={handleSubmit}>
      <input type="text" placeholder="Añadir Tarea" value={titulo} onChange={(e) => setTitulo(e.target.value)}/>
      <input type="text" placeholder="Añadir descripcion" value={descripcion} onChange={(e) => setDescripcion(e.target.value)}/>
      <button>Añadir Tarea</button>
    </form>
    <hr />  

    </>
    
  );
}
