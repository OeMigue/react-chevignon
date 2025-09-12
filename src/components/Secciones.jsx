import React, { useState } from 'react'
import { endpoints } from '../utils/api'
import { data } from 'react-router-dom'
export function seccionPrincipal() {
  return (
    <div>Secciones</div>
  )
}

export function seccionCategorias(){

 /*  const [getCategoria, setCategoria] = useState("")
  const [getImagen, setImagen] = useState("")

  function almacenarProducto() {
    let producto = {
      id: generarId(),
      nombre: getNombre,
      descripción: getDescripcion,
      precio: getPrecio,
      cantidad: getCantidad,
    };
    fetch(endpoints.productos, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(producto),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Producto creado:", data);
        alertaConfirmacion(
          "Producto creado con éxito",
          "success",
          redireccion,
          "/home/productos"
        );
      });
  }

  function mostrarCategorias(){
    fetch(endpoints.productos)
    .then((response) => response.json)
    .then((data) => {
      
    })
  } */

    return(
        <section id="categories-section" class="py-10 px-4">
        <div class="w-full mx-auto">
          <h1 class="text-[46px] font-bebas font-bold text-center mb-6">
            Categorías
          </h1>

          
          <div
            id="categories-grid"
            class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 h-full p-4"
          >
            
            <div id="category-card-1">
              <div
                class="relative w-full h-full rounded-lg hover:shadow-[-5px_5px_5px_-5px_#2f2f2f] transition duration-300"
              >
                <img
                  src="/assets/images/ropa-hombres/chaquetas/chaqueta1.webp"
                  alt="Chaquetas"
                  class="w-full h-full object-cover rounded-md"
                />
                <div
                  class="absolute top-0 left-0 p-2 flex items-center justify-center z-10"
                >
                  <h2 class="text-[#333333] text-sm sm:text-2xl m-0">
                    Chaquetas
                  </h2>
                </div>
              </div>
            </div>

            
            <div id="category-card-2">
              <div
                class="relative w-full h-full rounded-lg hover:shadow-[-5px_5px_5px_-5px_#2f2f2f] transition duration-300"
              >
                <img
                  src="/assets/images/ropa-mujeres/jeans/jean3.webp"
                  alt="Jeans"
                  class="w-full h-full object-cover rounded-md"
                />
                <div
                  class="absolute top-0 left-0 p-2 flex items-center justify-center z-10"
                >
                  <h2 class="text-[#333333] text-sm sm:text-2xl m-0">Jeans</h2>
                </div>
              </div>
            </div>

            
            <div id="category-card-3">
              <div
                class="relative w-full h-full rounded-lg hover:shadow-[-5px_5px_5px_-5px_#2f2f2f] transition duration-300"
              >
                <img
                  src="/assets/images/ropa-hombres/zapatos/zapato2.webp"
                  alt="Zapatos"
                  class="w-full h-full object-cover rounded-md"
                />
                <div
                  class="absolute top-0 left-0 p-2 flex items-center justify-center z-10"
                >
                  <h2 class="text-[#333333] text-sm sm:text-2xl m-0">
                    Zapatos
                  </h2>
                </div>
              </div>
            </div>

            
            <div id="category-card-4">
              <div
                class="relative w-full h-full rounded-lg hover:shadow-[-5px_5px_5px_-5px_#2f2f2f] transition duration-300"
              >
                <img
                  src="/assets/images/ropa-niños/camisetas/camiseta2.webp"
                  alt="Niños"
                  class="w-full h-full object-cover rounded-md"
                />
                <div
                  class="absolute top-0 left-0 p-2 flex items-center justify-center z-10"
                >
                  <h2 class="text-[#333333] text-sm sm:text-2xl m-0">Niños</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export function seccionNovedades(){
    return (
        <div>Hola</div>
    )
}