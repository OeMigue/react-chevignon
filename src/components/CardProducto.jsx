import React, { useEffect } from "react";
import { endpoints } from "../utils/api";

function CardProducto() {
    const [getProductos, setProductos] = useEffect([])
  const [getId, setId] = useState("");
  const [getNombre, setNombre] = useState("");
  const [getDescripcion, setDescripcion] = useState("");
  const [getCategoria, setCategoria] = useState("");
  const [getGenero, setGenero] = useState("");
  const [getPrecio, setPrecio] = useState("");
  const [getImagen, setImagen] = useState("");

  function consultarProductos(){
    fetch(endpoints.productos)
    .then((response) => response.json())
    .then((data) => {
        setProductos(data)
        console.log(data);
        
    })
  }

  useEffect(() => {
    consultarProductos()
  })

  return (
    <>
  <div className="contenedor-imagen-productos">
        <img className="" src="" alt=""/>
      </div>
      <div className="contenedor-texto-producto">
      <h3>{setProductos.nombre}</h3>
      <span></span>
      </div>
      <div className="botones-producto">
        <button className="btn-ver-mas">Ver más</button>
        <button className="btn-add-to-cart">Agregar</button>
      </div>
      </>
      );
}

export default CardProducto;
