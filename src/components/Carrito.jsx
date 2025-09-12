import React, { useState } from 'react'

function Carrito({ prop }) {
  const [abierto, setAbierto] = useState(false)

  function cerrarCarrito() {

  }
  return (
    <div>
      <section class="fixed top-0 right-0 w-full max-w-md h-full bg-white z-50 shadow-lg flex flex-col">
        <div class="flex justify-between items-center p-4 border-b">
          <div class="flex items-center gap-2 font-medium text-base">
            <span class="text-xl"
            ><img
                src="https://chevignon.vtexassets.com/assets/vtex.file-manager-graphql/images/4ed64a5a-7b89-40af-b31c-d85a1fa51334___7d5edaf384c76655da436c7883e31b32.svg"
                class="w-12 h-12"/>
            </span>Mi bolsa
          </div>
          <button
            onClick={() => prop(false)}
            class="text-xl cursor-pointer" id="cerrarCarrito">✖️</button>
        </div>

        <div id="cart-items" class="p-4 flex flex-col gap-4 flex-grow overflow-y-auto"></div>

        <div class="border-t p-4 text-sm">
          <div class="flex justify-between mb-2">
            <span>Subtotal</span>
            <span id="subtotalCarrito">$0</span>
          </div>
          <div class="flex justify-between font-bold text-base mb-1">
            <span>Total</span>
            <span id="totalCarrito">$0</span>
          </div>
          <p class="text-[11px] text-gray-500 mb-4">Tasas y fletes calculados en el carrito</p>

          <a href="/checkout.html">
            <button class="w-full transform hover:-translate-y-1 bg-black text-white px-6 py-3 text-sm font-semibold shadow-lg rounded transition duration-200 hover:shadow-2xl active:scale-95 cursor-pointer">
              Ir al checkout
            </button>
          </a>
        </div>
      </section>
    </div>
  )
}

export default Carrito