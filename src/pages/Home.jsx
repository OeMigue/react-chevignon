import React from "react";
import Header from "../components/Header";
import { seccionCategorias, seccionNovedades } from "../components/Secciones";
import Promociones from "../components/Promociones"
import Envios from "../components/Envios"
import Footer from "../components/Footer" 

function Home() {
  
  return (
    <div>
      <Header />
      <main className="w-full flex flex-col items-center  bg-gray-200">
        <section className="min-h-[100vh] flex items-center justify-center"></section>
        <Promociones />
        <div>{seccionCategorias()}</div>
        <div>{seccionNovedades()}</div>
        <Envios />
        <Footer />
      </main>
    </div>
  );
}

export default Home;
