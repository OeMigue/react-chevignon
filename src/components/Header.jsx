import React, { useState } from "react";
import { endpoints } from "../utils/api";
import Carrito from "./Carrito";
import { Link } from "react-router-dom";


function Header() {
  const [abierto, setAbierto] = useState(false);
  return (
    <nav className="p-4 bg-gray-950 text-gray-950 fixed top-0 z-10 w-full">
      {/* Mobile View */}

      <div className={`fixed top-0 right-0 w-full max-w-md h-full bg-white z-50 shadow-lg flex flex-col ${abierto ? "" : "hidden"}`}>
        <Carrito prop={setAbierto} />
      </div>

      <div className={`flex justify-between items-center lg:hidden`}>
        <div className="max-w-[140px] hover:scale-105 transition">
          <Link to="/index.html">
            <img
              src={`${endpoints}public/img/logos/logoBlancoChevignonClasicoSinFondo.png`}
              alt="Logo"
              className="h-12 w-auto"
            />
          </Link>
        </div>
        <div className="flex items-center justify-center rounded-lg bg-transparent">
          <button
            id="boton-menu"
            type="button"
            className=" border-none inline-flex items-center justify-center p-2 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-8 h-8 text-white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden lg:flex lg:justify-between lg:items-center lg:w-full">
        {/* Logo Section - Left */}
        <div className="max-w-[140px] hover:scale-105 transition">
          <Link to="/index.html">
            <img
              src="/assets/images/logos/logoBlancoChevignonClasicoSinFondo.png"
              alt="Logo"
              className="h-12 w-auto"
            />
          </Link>
        </div>

        {/* Navigation Links - Center */}
        <div className="flex items-center justify-center flex-1 mx-8">
          <ul className="flex gap-8 items-center text-lg p-0 list-none">

            <li className="group-hover:opacity-20 hover:opacity-100 hover:text-[#cecece] transition-opacity duration-300">
              <Link to="productos" className="text-white no-underline">
                Hombres
              </Link>
            </li>
            <li className="group-hover:opacity-20 hover:opacity-100 hover:text-[#cecece] transition-opacity duration-300">
              <Link to="productos" className="text-white no-underline">
                Mujeres
              </Link>
            </li>
            <li className="group-hover:opacity-20 hover:opacity-100 hover:text-[#cecece] transition-opacity duration-300">
              <Link to="productos" className="text-white no-underline">

                Niños
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex items-center justify-between w-full mt-4 mb-4 gap-3 lg:w-1/2 lg:justify-end lg:gap-8">
          <div className="relative w-1/2 lg:w-[40%]">
            <input
              type="search"
              placeholder="Buscar..."
              className="text-base text-[#333333] border border-[#adadad] bg-[#f5f5f5] rounded pl-5 pr-3 ml-3 w-full h-8"
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
                className="w-[1.1rem] h-[1.1rem] text-[#2f2f2f]"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1 0 7.5 7.5a7.5 7.5 0 0 0 9.15 9.15z"
                />
              </svg>
            </div>
          </div>
          <div className="flex gap-6 justify-end mr-3">
            <button className="bg-transparent border-none hover:scale-105 transition">
              <img
                width="32"
                height="32"
                src="https://img.icons8.com/color/48/colombia-circular.png"
                alt="colombia-circular"
              />
            </button>

            <button class="bg-transparent border-none hover:scale-105 transition">

              <Link to="login">

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 text-[#f5f5f5]"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                  />
                </svg>
              </Link>
            </button>

            <button
              onClick={() => setAbierto(!abierto)}
              id="botonCarrito"
              className="bg-transparent border-none hover:scale-105 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-[#f5f5f5]"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
            </button>
          </div>


        </div>
      </div>
    </nav>

  );
}

export default Header;
