import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer" 
import Contenido from "../components/Contenido";

function Home() {
  return (
    <div>
      <Header />
      <main className="w-full flex flex-col items-center  bg-gray-200">
        <Contenido />
      </main>
        <Footer />
    </div>
  );
}

export default Home;
