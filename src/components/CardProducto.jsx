import React, { useEffect, useState } from "react";
import { endpoints } from "../utils/api";
import { Link } from "react-router-dom";

function CardProducto() {
  
  const [getProductos, setProductos] = useState([]);
  const [getProductoSleccionado, setProductoSeleccionado] = useState()
  const [getProductoCarrito, setProductoCarrito] = useState()

  function consultarProductos() {
    fetch(endpoints.productos)
      .then((response) => response.json())
      .then((data) => {
        setProductos(data);
        console.log(data);
      });
  }

  useEffect(() => {
    consultarProductos();
  }, []); // Añadido array de dependencias vacío

  

  function handleVerMas(producto){
    setProductoSeleccionado(producto)
    console.log("Producto seleccionado: ", producto);
    
  }

  function handleProductoCarrito(producto) {
    setProductoCarrito(producto)
    console.log("Producto agregado al carrito: ", producto);
    
  }

  

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {getProductos.map((producto) => (
        <article key={producto.id} className="border rounded-lg shadow-md p-4">
          <div>
            <img
              src={`${URL}/${producto.imagen}`}
              alt={producto.nombre}
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-semibold">{producto.nombre}</h3>
            <span className="text-gray-600">${producto.precio}</span>
          </div>
          <div>
            <Link to={`/productos/paginaproductos/${producto.id}`} state={{producto}}>
            <button class="btn-ver-mas" onClick={()=>handleVerMas(producto)}>Ver más</button></Link>
            <Link><button class="btn-add-to-cart" onClick={()=>handleProductoCarrito(producto)}>Agregar</button></Link>
          </div>
        </article>
      ))}
    </div>
  );
}

export default CardProducto;
