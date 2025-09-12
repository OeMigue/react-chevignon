import React, { useEffect, useState } from "react";
import { endpoints } from "../utils/api";
import { useLocation, useParams } from "react-router-dom";
import ProductosRecomendados from "../components/ProductosRecomendados";

function PaginaProducto() {
  const URL = "https://back-server-chevignon.onrender.com";
  const { id } = useParams(); // ← ID desde la URL
  const location = useLocation();
  const [producto, setProducto] = useState(location.state?.producto || null);
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch("https://back-server-chevignon.onrender.com/productos")
      .then((res) => res.json())
      .then((data) => setProductos(data));
  }, []);

  useEffect(() => {
    if (!producto) {
      // Si no vino por state, lo traemos del backend
      fetch(`https://back-server-chevignon.onrender.com/productos/${id}`)
        .then((response) => response.json())
        .then((data) => setProducto(data))
        .catch((err) => console.error("Error cargando producto", err));
    }
  }, [id, producto]);

  return (
    <main className="mt-20 mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <nav className="bg-[var(--madera-tostada-elegante)] opacity-75">
        <div className="max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <a
                href="#"
                className="opacity-100 text-[var(--gris-niebla)] hover:text-[var(--beige-corteza-suave)]"
              >
                Home
              </a>
            </li>
            <li className="opacity-100 text-[var(--gris-niebla)]">/</li>
            <li>
              <a
                href="#"
                className="w-full text-[var(--gris-niebla)] hover:text-[var(--beige-corteza-suave)]"
              >
                {`Ropa de ${producto.genero}`}
              </a>
            </li>
            <li className="opacity-100 text-[var(--gris-niebla)]">/</li>
            <li>
              <a
                href="#"
                className="text-[var(--gris-niebla)] hover:text-[var(--beige-corteza-suave)]"
              >
                {producto.categoria}
              </a>
            </li>
            <li className="opacity-100 text-[var(--gris-niebla)]">/</li>
            <li className="text-[var(--madera-tostada-elegante)] font-medium">
              <a
                href="#"
                className="text-[var(--madera-tostada-elegante)] font-medium"
              >
                {producto.nombre}
              </a>
            </li>
          </ol>
        </div>
      </nav>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:h-[700px] gap-8 lg:gap-12 p-5 rounded-xl mb-32">
        {/* Imagenes Producto */}
        <section className="flex flex-col lg:flex-row lg:h-[700px] gap-2 items-start rounded-xl">
          <div className="flex justify-center overflow-hidden rounded-xl size-full lg:size-full shadow-lg">
            <img width="" src={`${URL}/${producto?.imagen}`} alt="" className="size-full" />
          </div>

          <div className="grid grid-cols-4 md:grid-cols-3 md:grid-rows-2 lg:grid-cols-1 lg:grid-rows-4 gap-2 md:size-11/12 lg:h-full lg:w-1/3 justify-items-center items-start">
            <img
              id="imagen"
              src={`${URL}/${producto?.imagen}`}
              alt="Vista 1"
              className="size-full object-cover rounded-lg cursor-pointer border-2 border-transparent hover:border-[var(--color-texto)] transition"
            />
            <img
              id="imagen"
              src={`${URL}/${producto?.imagen}`}
              alt="Vista 2"
              className="size-full object-cover rounded-lg cursor-pointer border-2 border-transparent hover:border-[var(--color-texto)] transition"
            />
            <img
              id="imagen"
              src={`${URL}/${producto?.imagen}`}
              alt="Vista 3"
              className="size-full object-cover rounded-lg cursor-pointer border-2 border-transparent hover:border-[var(--color-texto)] transition"
            />
            <img
              id="imagen"
              src={`${URL}/${producto?.imagen}`}
              alt="Vista 4"
              className="size-full object-cover rounded-lg cursor-pointer border-2 border-transparent hover:border-[var(--color-texto)] transition"
            />
          </div>
        </section>

        <section className="bg-[var(--color-iconos)] p-6 rounded-xl flex flex-col justify-between">
          <div>
            <h1
              id="nombre"
              className="text-2xl md:text-3xl lg:text-4xl font-playfair font-bold text-[var(--beige-corteza-suave)] mb-2"
            >
              {producto.nombre}
            </h1>
            <p className="text-sm text-[var(--gris-niebla)] mb-4">
              REF: 201819H1
            </p>

            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg class="w-5 h-5 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg class="w-5 h-5 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg class="w-5 h-5 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg class="w-5 h-5 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <span class="text-sm text-[var(--gris-niebla)] ml-2">
                (127 valoraciones)
              </span>
            </div>

            <div class="text-3xl md:text-4xl font-bold text-[var(--gris-niebla)]">
              <strong id="precio" class="">{producto.precio}</strong>
            </div>
          </div>

          <div>
            <h3 class="font-semibold mt-5 mb-1 text-[var(--gris-niebla)]">
              Color
            </h3>
            <div class="flex space-x-3">
              <button
                class="w-10 h-10 rounded-full bg-blue-900 border-2 border-transparent hover:border-[var(--color-texto)] transition"
                title="Azul Ultra Oscuro"
              ></button>
              <button
                class="w-10 h-10 rounded-full bg-gray-800 border-2 border-transparent hover:border-[var(--color-texto)] transition"
                title="Negro"
              ></button>
              <button
                class="w-10 h-10 rounded-full bg-blue-600 border-2 border-transparent hover:border-[var(--color-texto)] transition"
                title="Azul Medio"
              ></button>
            </div>
          </div>

          <div class="mb-5">
            <div class="flex justify-between items-center mb-1 mt-3">
              <h3 class="font-semibold text-[var(--gris-niebla)]">Talla</h3>
            </div>
            <div class="grid grid-cols-4 gap-2">
              <button class="py-3 px-4 border border-[var(--color-texto)] rounded-md hover:border-[var(--color-texto)] hover:bg-[var(--color-texto)] hover:text-[var(--color-texto-inverso)] text-[var(--color-texto)] text-xl transition duration-200 ease-in-out hover:scale-105">
                S
              </button>
              <button class="py-3 px-4 border border-[var(--color-texto)] rounded-md hover:border-[var(--color-texto)] hover:bg-[var(--color-texto)] hover:text-[var(--color-texto-inverso)] text-[var(--color-texto)] text-xl transition duration-200 ease-in-out hover:scale-105">
                M
              </button>
              <button class="py-3 px-4 border border-[var(--color-texto)] rounded-md hover:border-[var(--color-texto)] hover:bg-[var(--color-texto)] hover:text-[var(--color-texto-inverso)] text-[var(--color-texto)] text-xl transition duration-200 ease-in-out hover:scale-105">
                L
              </button>
              <button class="py-3 px-4 border border-[var(--color-texto)] rounded-md hover:border-[var(--color-texto)] hover:bg-[var(--color-texto)] hover:text-[var(--color-texto-inverso)] text-[var(--color-texto)] text-xl transition duration-200 ease-in-out hover:scale-105">
                XL
              </button>
            </div>
          </div>

          <button
            id="btnAgregarCarrito"
            className="w-full bg-[var(--color-texto)] text-[var(--color-texto-inverso)] tracking-[2px] py-4 px-6 rounded-md font-semibold transition duration-200 ease-in-out hover:scale-105"
          >
            Agregar a la bolsa
          </button>

          <div className="pt-6 space-y-3 text-sm">
            <div className="flex items-center text-[var(--beige-corteza-suave)]">
              <svg
                class="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                />
              </svg>
              Envíos y disponibilidad
            </div>
            <div class="flex items-center text-[var(--beige-corteza-suave)]">
              <svg
                class="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
              Cambios y devoluciones gratis
            </div>
            <div class="flex items-center text-[var(--beige-corteza-suave)]">
              <svg
                class="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
              Pagos seguros
            </div>
          </div>
        </section>
      </section>

      <section className="w-full">
        
        <ProductosRecomendados
        productos={productos}
        cantidad={3}
        titulo="Productos recomendados"
      />
      </section>

      <section className="w-full">
        
        <ProductosRecomendados
        productos={productos}
        cantidad={3}
        titulo="Productos que te podrían gustar"
      />
      </section>
    </main>
  );
}

export default PaginaProducto;
