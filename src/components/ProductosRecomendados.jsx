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
              <article key={producto.id} className="group relative overflow-hidden shadow-lg h-[500px] flex items-end justify-center">
      
                <img src={`${URL}/${producto.imagen}`} alt={producto.nombre} className="absolute inset-0 w-full h-full object-cover z-0"/>
      
                <div className="absolute inset-0 bg-black/10 transition-opacity duration-300 group-hover:bg-black/25" />
      
                <div className="relative text-center text-white p-6 w-full">
                  <h3 className="text-2xl font-semibold mb-2">{producto.nombre}</h3>
                  <span className="text-xl font-bold block mb-4">${producto.precio}</span>
      
                  <div className="flex justify-center gap-4 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <Link to={`/productos/paginaproductos/${producto.id}`} state={{producto}}>
                      <button
                        className="btn-ver-mas bg-white text-black px-5 py-2 rounded hover:bg-gray-200"
                        onClick={() => handleVerMas(producto)}
                      >
                        Ver más
                      </button>
                    </Link>
                    <button
                      className="btn-add-to-cart bg-white text-black px-5 py-2 rounded hover:bg-gray-200"
                      onClick={() => handleProductoCarrito(producto)}
                    >
                      Agregar
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
    </section>
  );
}

export default ProductosRecomendados;
