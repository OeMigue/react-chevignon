import React, { useState } from "react";
import logoBlancoChevignonClasicoSinFondo from "../assets/imagenes/logoBlancoChevignonClasicoSinFondo.png";
import logopaypal from "../assets/imagenes/logopaypal.png";
import logoPse from "../assets/imagenes/logoPse.jpg";
import logoTarjetas from "../assets/imagenes/logoTarjetas.jpg";
function Checkout() {
  // Estado para el paso actual
  const [currentStep, setCurrentStep] = useState(1);

  // Estado para método de pago seleccionado
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");

  // Estado para controlar qué FAQ está abierto
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Estados para los formularios de cada paso
  const [formData, setFormData] = useState({
    // Paso 1: Identificación
    nombre: "",
    documento: "",
    numeroDocumento: "",
    email: "",
    telefono: "",
    // Paso 2: Envío
    pais: "",
    ciudad: "",
    direccion: "",
  });

  // Array de pasos para mapear
  const steps = [
    { id: 1, label: "1. Identificación" },
    { id: 2, label: "2. Envío" },
    { id: 3, label: "3. Pago" },
    { id: 4, label: "4. Confirmación" },
  ];
  // Manejar cambios en los inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Validar paso actual antes de avanzar
  const validateCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return (
          formData.nombre &&
          formData.documento &&
          formData.numeroDocumento &&
          formData.email &&
          formData.telefono
        );
      case 2:
        return formData.pais && formData.ciudad && formData.direccion;
      case 3:
        return selectedPaymentMethod !== "";
      default:
        return true;
    }
  };

  // Avanzar al siguiente paso
  const nextStep = () => {
    if (validateCurrentStep()) {
      if (currentStep < 4) {
        setCurrentStep(currentStep + 1);
      }
    } else {
      alert("Por favor completa todos los campos requeridos.");
    }
  };

  // Seleccionar método de pago
  const selectPaymentMethod = (method) => {
    setSelectedPaymentMethod(method);
  };

  // Finalizar compra
  const finalizePurchase = () => {
    alert("¡Gracias por tu compra! Tu pedido está siendo procesado.");
  };

  // Datos de FAQ
  const faqData = [
    {
      question: "¿Cuánto tarda el envío?",
      answer:
        "El envío tarda entre 2 y 5 días hábiles dependiendo de tu ciudad o región.",
    },
    {
      question: "¿Puedo pagar contra entrega?",
      answer:
        "Sí, puedes pagar en efectivo cuando recibas tu pedido si eliges esa opción en el método de pago.",
    },
    {
      question: "¿Qué pasa si el producto no me queda?",
      answer:
        "Tienes hasta 7 días para solicitar un cambio o devolución. Solo asegúrate de no quitar las etiquetas ni usarlo.",
    },
    {
      question: "¿Cómo sé que mi pago fue exitoso?",
      answer:
        "Recibirás un correo de confirmación y podrás hacer seguimiento desde tu cuenta.",
    },
  ];
  return (
    <div className="min-h-screen bg-[#f6f5f2] text-[#2a2a2a] font-sans text-base m-0 p-0">
      <header className="text-center py-2 bg-[#1c1c1e] text-white mb-[45px] rounded-b-[50px] h-12 flex items-center justify-center">
        <a href="/index.html" className="h-full">
          <img
            src={logoBlancoChevignonClasicoSinFondo}
            alt="Chevignon Logo"
            className="h-full"
          />
        </a>
      </header>
      <main className="max-w-[900px] mx-auto p-8 bg-[#faf9f7] rounded-xl shadow-[0_0_12px_rgba(0,0,0,0.08)]">
        {/* Barra de progreso */}
        <div className="flex justify-between mb-6">
          {steps.map((step, index) => (
            <span
              key={step.id}
              className={`flex-1 text-center py-2 text-sm border-b-2 ${
                currentStep === step.id
                  ? "text-[#5c4033] border-[#e2845c] font-bold"
                  : "text-[#7b7b7b] border-[#d1c7bd]"
              }`}
            >
              {step.label}
            </span>
          ))}
        </div>
        {/* Mensaje de compra como invitado */}
        <section className="mb-3">
          <p>
            <strong>Compra como invitado</strong> — No necesitas crear cuenta.
          </p>
        </section>
        {/* PASO 1: IDENTIFICACIÓN */}
        {currentStep === 1 && (
          <section className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Identificación</h2>
            <form className="space-y-4">
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleInputChange}
                placeholder="Nombre completo"
                className="w-full p-3 my-2 border border-[#d1c7bd] rounded-md bg-white text-[#2a2a2a] focus:outline-none focus:ring-2 focus:ring-[#c8a15b]"
                required
              />
              <select
                name="documento"
                value={formData.documento}
                onChange={handleInputChange}
                className="max-w-[50%] w-full p-3 my-2 border border-[#d1c7bd] rounded-md bg-white text-[#2a2a2a] focus:outline-none focus:ring-2 focus:ring-[#c8a15b]"
                required
              >
                <option value="">Selecciona tu documento</option>
                <option value="cc">Cédula de ciudadanía</option>
                <option value="ce">Cédula de extranjería</option>
                <option value="ti">Tarjeta de identidad</option>
                <option value="pp">Pasaporte</option>
              </select>
              <input
                type="text"
                name="numeroDocumento"
                value={formData.numeroDocumento}
                onChange={handleInputChange}
                placeholder="Número de documento"
                className="w-full p-3 my-2 border border-[#d1c7bd] rounded-md bg-white text-[#2a2a2a] focus:outline-none focus:ring-2 focus:ring-[#c8a15b]"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Correo electrónico"
                className="w-full p-3 my-2 border border-[#d1c7bd] rounded-md bg-white text-[#2a2a2a] focus:outline-none focus:ring-2 focus:ring-[#c8a15b]"
                required
              />
              <input
                type="tel"
                name="telefono"
                value={formData.telefono}
                onChange={handleInputChange}
                placeholder="Teléfono"
                className="w-full p-3 my-2 border border-[#d1c7bd] rounded-md bg-white text-[#2a2a2a] focus:outline-none focus:ring-2 focus:ring-[#c8a15b]"
                required
              />
              <button
                type="button"
                onClick={nextStep}
                className="w-full bg-[#5c4033] text-white py-4 px-6 tracking-[2px] transition duration-200 ease-in-out hover:scale-105 rounded-lg font-medium"
              >
                Siguiente
              </button>
            </form>
          </section>
        )}

        {/* PASO 2: ENVÍO */}
        {currentStep === 2 && (
          <section className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Detalles del Envío</h2>
            <form className="space-y-4 mb-8">
              <select
                name="pais"
                value={formData.pais}
                onChange={handleInputChange}
                className="max-w-[50%] w-full p-3 my-2 border border-[#d1c7bd] rounded-md bg-white text-[#2a2a2a] focus:outline-none focus:ring-2 focus:ring-[#c8a15b]"
                required
              >
                <option value="">Selecciona tu país</option>
                <option value="co">Colombia</option>
                <option value="pe">Perú</option>
                <option value="mx">México</option>
              </select>
              <input
                type="text"
                name="ciudad"
                value={formData.ciudad}
                onChange={handleInputChange}
                placeholder="Ciudad"
                className="w-full p-3 my-2 border border-[#d1c7bd] rounded-md bg-white text-[#2a2a2a] focus:outline-none focus:ring-2 focus:ring-[#c8a15b]"
                required
              />
              <input
                type="text"
                name="direccion"
                value={formData.direccion}
                onChange={handleInputChange}
                placeholder="Dirección de entrega"
                className="w-full p-3 my-2 border border-[#d1c7bd] rounded-md bg-white text-[#2a2a2a] focus:outline-none focus:ring-2 focus:ring-[#c8a15b]"
                required
              />
            </form>

            {/* Resumen del Pedido */}
            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4">Resumen del Pedido</h2>
              <div className="mb-2">
                <div className="flex justify-between text-[#2a2a2a]">
                  <span>Chaqueta Cuero Negro</span>
                  <span>$499.900</span>
                </div>
              </div>
              <div className="mb-2 mt-4 font-bold text-[#3e2e25]">
                <p>
                  Envío: <strong>$7.200</strong>
                </p>
                <p>
                  Total: <strong>$499.900</strong>
                </p>
              </div>
            </div>

            <p className="mb-2 text-sm text-gray-600">
              Envío estándar hasta 3 días hábiles - $7.200.
            </p>

            <button
              type="button"
              onClick={nextStep}
              className="w-full bg-[#5c4033] text-white py-4 px-6 tracking-[2px] transition duration-200 ease-in-out hover:scale-105 rounded-lg font-medium"
            >
              Siguiente
            </button>
          </section>
        )}

        {/* PASO 3: MÉTODO DE PAGO */}
        {currentStep === 3 && (
          <section className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Método de pago</h2>
            <p className="mb-4">Selecciona un método para continuar.</p>

            {/* Opciones de Pago */}
            <div className="flex gap-4 flex-wrap mt-4">
              <button
                type="button"
                onClick={() => selectPaymentMethod("tarjeta")}
                className={`flex-1 min-w-[150px] bg-[#faf9f7] border-2 rounded-xl p-4 text-center cursor-pointer transition-all duration-300 flex flex-col items-center text-sm text-[#2a2a2a] hover:border-[#c8a15b] hover:bg-[#efe7de] ${
                  selectedPaymentMethod === "tarjeta"
                    ? "border-[#e2845c] bg-[#f6f5f2] font-bold"
                    : "border-[#d1c7bd]"
                }`}
              >
                <img
                  src={logoTarjetas}
                  alt="Tarjeta"
                  className="w-10 h-10 mb-2"
                />
                <span>Tarjeta</span>
              </button>

              <button
                type="button"
                onClick={() => selectPaymentMethod("paypal")}
                className={`flex-1 min-w-[150px] bg-[#faf9f7] border-2 rounded-xl p-4 text-center cursor-pointer transition-all duration-300 flex flex-col items-center text-sm text-[#2a2a2a] hover:border-[#c8a15b] hover:bg-[#efe7de] ${
                  selectedPaymentMethod === "paypal"
                    ? "border-[#e2845c] bg-[#f6f5f2] font-bold"
                    : "border-[#d1c7bd]"
                }`}
              >
                <img src={logopaypal} alt="Paypal" className="w-10 h-10 mb-2" />
                <span>PayPal</span>
              </button>

              <button
                type="button"
                onClick={() => selectPaymentMethod("pse")}
                className={`flex-1 min-w-[150px] bg-[#faf9f7] border-2 rounded-xl p-4 text-center cursor-pointer transition-all duration-300 flex flex-col items-center text-sm text-[#2a2a2a] hover:border-[#c8a15b] hover:bg-[#efe7de] ${
                  selectedPaymentMethod === "pse"
                    ? "border-[#e2845c] bg-[#f6f5f2] font-bold"
                    : "border-[#d1c7bd]"
                }`}
              >
                <img src={logoPse} alt="Pse" className="w-10 h-10 mb-2" />
                <span>PSE</span>
              </button>
            </div>

            {/* Información específica del método de pago */}
            {selectedPaymentMethod === "tarjeta" && (
              <div className="mt-6 text-[#6f625a] text-sm space-y-4">
                <h3 className="text-base font-semibold text-[#2a2a2a]">
                  Pago con tarjeta
                </h3>
                <input
                  type="text"
                  placeholder="Número de tarjeta"
                  className="w-full p-3 border border-[#d1c7bd] rounded-md bg-white text-[#2a2a2a] focus:outline-none focus:ring-2 focus:ring-[#c8a15b]"
                  required
                />
                <input
                  type="text"
                  placeholder="Nombre del titular"
                  className="w-full p-3 border border-[#d1c7bd] rounded-md bg-white text-[#2a2a2a] focus:outline-none focus:ring-2 focus:ring-[#c8a15b]"
                  required
                />
                <input
                  type="text"
                  placeholder="MM/AA"
                  className="w-full p-3 border border-[#d1c7bd] rounded-md bg-white text-[#2a2a2a] focus:outline-none focus:ring-2 focus:ring-[#c8a15b]"
                  required
                />
                <input
                  type="text"
                  placeholder="CVV"
                  className="w-full p-3 border border-[#d1c7bd] rounded-md bg-white text-[#2a2a2a] focus:outline-none focus:ring-2 focus:ring-[#c8a15b]"
                  required
                />
              </div>
            )}

            {selectedPaymentMethod === "paypal" && (
              <div className="mt-6 text-[#6f625a] text-sm space-y-4">
                <h3 className="text-base font-semibold text-[#2a2a2a]">
                  Conecta tu cuenta PayPal
                </h3>
                <input
                  type="email"
                  placeholder="Correo de PayPal"
                  className="w-full p-3 border border-[#d1c7bd] rounded-md bg-white text-[#2a2a2a] focus:outline-none focus:ring-2 focus:ring-[#c8a15b]"
                  required
                />
              </div>
            )}

            {selectedPaymentMethod === "pse" && (
              <div className="mt-6 text-[#6f625a] text-sm space-y-4">
                <h3 className="text-base font-semibold text-[#2a2a2a]">
                  Pago con PSE
                </h3>
                <select
                  className="w-full p-3 border border-[#d1c7bd] rounded-md bg-white text-[#2a2a2a] focus:outline-none focus:ring-2 focus:ring-[#c8a15b]"
                  required
                >
                  <option value="">Selecciona tu banco</option>
                  <option>Davivienda</option>
                  <option>Bancolombia</option>
                  <option>Nequi</option>
                  <option>UALÁ</option>
                </select>
              </div>
            )}

            <button
              type="button"
              onClick={nextStep}
              className="w-full bg-[#5c4033] text-white py-4 px-6 tracking-[2px] transition duration-200 ease-in-out hover:scale-105 rounded-lg font-medium mt-6"
            >
              Siguiente
            </button>
          </section>
        )}

        {/* PASO 4: CONFIRMACIÓN */}
        {currentStep === 4 && (
          <section className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Confirmación</h2>
            <p className="mb-2">
              ¡Gracias por tu compra! Tu pedido está siendo procesado.
            </p>
            <p className="mb-2">📦 En preparación...</p>

            <button
              onClick={finalizePurchase}
              className="w-full bg-[#e2845c] text-white py-4 px-6 tracking-[2px] transition duration-200 ease-in-out hover:scale-105 hover:bg-[#5c4033] active:scale-95 rounded-lg font-medium mt-8"
            >
              Finalizar compra
            </button>
          </section>
        )}
        <section className="policies">
          <p className="mb-1">
            🔁 <strong>Devoluciones fáciles:</strong> hasta 30 días.
            <a href="#">Ver política</a>
          </p>
          <p className="mb-1">
            🔒 <strong>Pago 100% seguro con SSL</strong>
          </p>
        </section>
        {/* SECCIÓN FAQ */}
        <section className="mt-8 border-t border-[#d1c7bd] pt-4">
          <h2 className="text-xl font-semibold mb-4">Preguntas Frecuentes</h2>
          <div className="space-y-0">
            {faqData.map((faq, index) => (
              <div key={index} className="mb-4 border-b border-[#d1c7bd]">
                <button
                  onClick={() => toggleFaq(index)}
                  className={`w-full bg-none border-none text-left text-sm font-bold py-4 cursor-pointer relative transition-colors duration-200 ${
                    openFaq === index
                      ? "text-[#e2845c]"
                      : "text-[#3e2e25] hover:text-[#e2845c]"
                  }`}
                >
                  {faq.question}
                  <span
                    className={`absolute right-0 text-lg transition-all duration-200 ${
                      openFaq === index
                        ? "text-[#e2845c] transform rotate-180"
                        : "text-[#7b7b7b]"
                    }`}
                  >
                    {openFaq === index ? "−" : "+"}
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openFaq === index
                      ? "max-h-96 opacity-100 pb-4"
                      : "max-h-0 opacity-0 pb-0"
                  }`}
                >
                  <p className="text-[#6f625a] text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Checkout;