import React from "react";
import { Link } from "react-router-dom";
import { obtenerProductosAleatorios } from "../utils/utils";

function ProductosRecomendados({ productos, cantidad = 3, titulo, handleVerMas, handleProductoCarrito }) {
    const URL = "https://back-server-chevignon.onrender.com";
  // Evita error si productos viene vacío o undefined
  if (!Array.isArray(productos)) return null;

  const recomendados = obtenerProductosAleatorios(productos, cantidad);

  return (
    <section>
      <h2 className="bebas-neue-regular text-5xl font-bold text-[var(--beige-corteza-suave)] mt-14 mb-8">
        {titulo}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        {recomendados.map((producto) => (
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
              <Link to={`/productos/paginaproductos/${producto.id}`} state={{ producto }}>
                <button className="btn-ver-mas" onClick={() => handleVerMas(producto)}>Ver más</button>
              </Link>
              <Link>
                <button className="btn-add-to-cart" onClick={() => handleProductoCarrito(producto)}>Agregar</button>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ProductosRecomendados;
