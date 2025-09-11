import React from "react";

function Envios() {
  return (
    <section className="py-5 text-center bg-[#adadad] text-white mb-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 max-w-7xl mx-auto px-4 gap-8">
        <div className="flex flex-col items-center justify-start">
          <img
            className="w-20 max-h-[30%] object-contain"
            src="https://img.icons8.com/external-victoruler-solid-victoruler/64/external-return-box-logistics-victoruler-solid-victoruler.png"
            alt="cambios y devoluciones"
          />
          <h3 className="my-3 max-h-[30%] text-2xl font-bebas">Cambios GRATIS</h3>
          <p className="mt-0 max-h-[30%]">
            Gestiona tus pedidos a través de la web o en nuestras tiendas
            físicas.
          </p>
        </div>
        <div className="flex flex-col items-center justify-start">
          <img
          className="w-20 max-h-[30%] object-contain"
            src="https://img.icons8.com/ios/50/delivery--v2.png"
            alt="envios express"
          />
          <h3 className="my-3 max-h-[30%] text-2xl font-bebas">Envíos Express</h3>
          <p className="mt-0 max-h-[30%]">Para Medellín y el Área Metropolitana antes de las 4pm</p>
        </div>
        <div className="flex flex-col items-center justify-start">
          <img
          className="w-20 max-h-[30%] object-contain"
            src="https://img.icons8.com/material-rounded/24/coin-in-hand.png"
            alt="medios de pago"
          />
          <h3 className="my-3 max-h-[30%] text-2xl font-bebas">Múltiples Medios de Pago</h3>
          <p className="mt-0 max-h-[30%]">
            Métodos de pago que se ajustan a tus necesidades
          </p>
        </div>
        <div className="flex flex-col items-center justify-start">
          <img className="w-20 max-h-[30%] object-contain"
            src="https://img.icons8.com/ios-glyphs/30/total-sales-1.png"
            alt="financiacion"
          />
          <h3 className="my-3 max-h-[30%] text-2xl font-bebas">Opciones de financiación</h3>
          <p className="mt-0 max-h-[30%]">Ahora el crédito Chevignon es Su•Pay</p>
        </div>
      </div>
    </section>
  );
}

export default Envios;
