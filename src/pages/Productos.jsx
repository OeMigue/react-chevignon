import React, { useEffect, useState } from "react";
import { fetchProductos } from "../utils/api";
import CardProducto from "../components/CardProducto";
import Envios from "../components/Envios";
import Footer from "../components/Footer";
import Header from "../components/Header";


export default function Productos() {
  const [productos, setProductos] = useState([]);
  const [filtro, setFiltro] = useState({
    categoria: [],
    genero: "",
    precioMax: ""
  });

  useEffect(() => {
    async function cargarProductos() {
      const data = await fetchProductos();
      if (data) setProductos(data);
    }

    cargarProductos();
  }, []);

  const toggleCategoria = (cat) => {
    setFiltro((prev) => {
      const existe = prev.categoria.includes(cat);
      const nueva = existe
        ? prev.categoria.filter((c) => c !== cat)
        : [...prev.categoria, cat];
      return { ...prev, categoria: nueva };
    });
  };

  const productosFiltrados = productos.filter((p) => {
    const porCategoria =
      filtro.categoria.length > 0 ? filtro.categoria.includes(p.categoria) : true;
    const porGenero = filtro.genero ? p.genero === filtro.genero : true;
    const porPrecio = filtro.precioMax ? p.precio <= parseInt(filtro.precioMax) : true;
    return porCategoria && porGenero && porPrecio;
  });
  console.log(productosFiltrados);
  

  return (

    <div>
      <Header />

      <main className="container mx-auto py-6 flex flex-col gap-6">
        <section className="px-6 py-25 border-b">
          <nav className="text-sm text-gray-400 mb-2">
            <span>Home</span>
            <span className="mx-1">|</span>
            <span className="text-black font-medium">New Arrivals</span>
          </nav>
          <h1 className="text-5xl font-bold mb-1">Ropa de moda</h1>
          <p className="max-w-xl text-[var(--color-texto)] mb-4">
            Diferentes estilos y siluetas; una amplia gama de colores y diseños novedosos.
          </p>
        </section>

        <div className="container mx-auto py-6 flex flex-col lg:flex-row gap-6">
          {/* filtros */}
          <section className="max-w-full mx-5 lg:w-[20%] xl:w-[15%] mt-5">
            <h2 className="text-md font-semibold mb-2">Filtrar por:</h2>
            <aside className="w-[90%] md:w-full text-[var(--gris-niebla)] bg-[var(--marron-hoja)] grid grid-cols-2 md:grid-cols-5 lg:grid-cols-1 grid-rows-2 gap-2">

              <details className="bg-[var(--color-iconos)] p-2 rounded">
                <summary className="cursor-pointer font-semibold">Categoría</summary>
                <ul className="pl-4 mt-2 space-y-1 text-sm">
                  {["camisetas", "camisas", "zapatos", "chaquetas", "pantalones","jeans", "buzos", "bermudas", "vestidos"].map((cat) => (
                    <li key={cat}>
                      <label>
                        <input
                          type="checkbox"
                          checked={filtro.categoria.includes(cat)}
                          onChange={() => toggleCategoria(cat)}
                        />
                        {` ${cat}`}
                      </label>
                    </li>
                  ))}
                </ul>
              </details>

              <details className="bg-[var(--color-iconos)] p-2 rounded">
                <summary className="cursor-pointer font-semibold">Género</summary>
                <ul className="pl-4 mt-2 space-y-1 text-sm">
                  {["hombre", "mujer", "niño"].map((gen) => (
                    <li key={gen}>
                      <label>
                        <input
                          type="checkbox"
                          name="genero"
                          checked={filtro.genero === gen}
                          onChange={() => setFiltro({ ...filtro, genero: gen })}
                        />
                        {` ${gen.charAt(0).toUpperCase() + gen.slice(1)}`}
                      </label>
                    </li>
                  ))}
                </ul>
              </details>

              <details className="bg-[var(--color-iconos)] p-2 rounded">
                <summary className="cursor-pointer font-semibold">Precio máximo</summary>
                <div className="pl-4 mt-2 text-sm">
                  <input
                    type="number"
                    placeholder="Ej: 250000"
                    value={filtro.precioMax}
                    onChange={(e) => setFiltro({ ...filtro, precioMax: e.target.value })}
                    className="w-full p-1 rounded"
                  />
                </div>
              </details>
            </aside>
          </section>
                  {/* card productos */}
          <section className="w-full">
            {productosFiltrados.length === 0 ? (
              <p className="text-center text-gray-500">No se encontraron productos con esos filtros.</p>
            ) : (
              <CardProducto productos={productosFiltrados} />
            )}
          </section>
        </div>
      </main>

      {/* envios */}
      <Envios />
      {/* footer */}
      <Footer />
    </div>
    
  );
}
