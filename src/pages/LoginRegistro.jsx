import React, { useRef } from 'react';
/* import '../pages/LoginRegistro.css'; */
const LoginRegistro = () => {
    const containerRef = useRef(null);

    const handleRegisterClick = () => {
        containerRef.current.classList.add('active');
    };

    const handleLoginClick = () => {
        containerRef.current.classList.remove('active');
    };

    return (
        <div className="container" ref={containerRef}>
            <div className="form-container sign-up">
                <form>
                    <h1>Crear Cuenta</h1>
                    
                    <div className="social-icons">
                        <a href="#" className="icon"><i className="fa-brands fa-google"></i></a>
                        <a href="#" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
                        <a href="#" className="icon"><i className="fa-brands fa-github"></i></a>
                        <a href="#" className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
                    </div>
                
                    <span>O usa tu correo electronico para registrarte</span>
                    <input type="text" placeholder="Nombre" />
                    <input type="email" placeholder="Correo" />
                    <input type="password" placeholder="Contraseña" />
                    <button type="submit">Registrarse</button>
                </form>
            </div>

            <div className="form-container sign-in">
                <form>
                    <h1>Iniciar sesion</h1>
                    
                    <div className="social-icons">
                        <a href="#" className="icon"><i className="fa-brands fa-google"></i></a>
                        <a href="#" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
                        <a href="#" className="icon"><i className="fa-brands fa-github"></i></a>
                        <a href="#" className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
                    </div>
                
                    <span>O usa tu correo electronico para iniciar sesion</span>
                    <input type="email" placeholder="Correo" />
                    <input type="password" placeholder="Contraseña" />
                    <a href="#">¿Olvidaste tu contraseña?</a>
                    <button type="submit">Inicar sesion</button>
                </form>
            </div>

            <div className="toggle-container">
                <div className="toggle">
                    <div className="toggle-panel toggle-left">
                        <h1>Bienvenido De nuevo!</h1>
                        <p>Ingrese sus datos personales para utilizar todas las funciones del sitio.</p>
                        <button className="" id="login" onClick={handleLoginClick}>Iniciar sesion</button>
                    </div>
                    
                    <div className="toggle-panel toggle-right">
                        <h1>Hola, Amigo!</h1>
                        <p>Registrate con tus datos personales para utilizar todas las funciones del sitio.</p>
                        <button className="" id="register" onClick={handleRegisterClick}>Registrarse</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginRegistro;

/* :root {
    --verde-bosque-oscuro: #1c2a21;
    --verde-musgo-apagado: #4a5b4a;
    --marron-hoja-seca: #746456;
    --verde-musgo-opacidad: rgba(74, 91, 74, 0.7);
    --madera-tostada-elegante: #5c4033;
    --gris-niebla: #d7d9d9;
    --gris-roca: #8c8c8c;
    --beige-corteza-suave: #f3efe8;
    --negro-tronco: #121212;
    --verde-hojalata-claro: #90b296;
    --rojo-terracota-apagado: #b04b4b; 

    --fuente-base: 16px;
    --fuente-secundaria: 15px;

    --fuente-h1: 40px;
    --fuente-h2: 32px;
    --fuente-h3: 24px;
    --fuente-h4: 20px;

    --fuente-descripcion: 15px;
    --fuente-etiqueta: 14px;
    --fuente-mini: 12px;

    --fuente-navbar: 15px;
    --fuente-boton: 16px;
    --fuente-boton-pequeno: 14px;

    --fuente-h1-movil: 32px;
    --fuente-h2-movil: 24px;
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
}

body{
    background-color: #c9d6ff;
    background: linear-gradient(to right, #e2e2e2, #c9d6ff);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
}

h1 {
    display: block;
    font-size: 2em;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
    unicode-bidi: isolate;
}

.container{
    background-color: #fff;
    border-radius: 30px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.35);
    position: relative;
    overflow: hidden;
    width: 768px;
    max-width: 100%;
    min-height: 480px;
}

.container p{
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.3px;
    margin: 20px 0;
}

.container span{
    font-size: 12px;
}

.container a{
    color: #333;
    font-size: 13px;
    text-decoration: none;
    margin: 15px 0 10px;
}

.container button{
    background-color: #512da8;
    color: #fff;
    font-size: 12px;
    padding: 10px 45px;
    border: 1px solid transparent;
    border-radius: 8px;
    font-weight: 600;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    margin-top: 10px;
    cursor: pointer;
}

.container button.hidden{
    background-color: transparent;
    border-color: #fff;
}

.container form{
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 40px;
    height: 100%;
}

.container input{
    background-color: #eee;
    border: none;
    margin: 8px 0;
    padding: 10px 15px;
    font-size: 13px;
    border-radius: 8px;
    width: 100%;
    outline: none;
}

.form-container{
    position: absolute;
    top: 0;
    height: 100%;
    transition: all 0.6s ease-in-out;
}

.sign-in{
    left: 0;
    width: 50%;
    z-index: 2;
}

.container.active .sign-in{
    transform: translateX(100%);
}

.sign-up{
    left: 0;
    width: 50%;
    opacity: 0;
    z-index: 1;
}

.container.active .sign-up{
    transform: translateX(100%);
    opacity: 1;
    z-index: 5;
    animation: move 0.6s;
}

@keyframes move{
    0%, 49.99%{
        opacity: 0;
        z-index: 1;
    }
    50%, 100%{
        opacity: 1;
        z-index: 5;
    }
}

.social-icons{
    margin: 20px 0;
}

.social-icons a{
    border: 1px solid #ccc;
    border-radius: 20%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin: 0 3px;
    width: 40px;
    height: 40px;
}

.toggle-container{
    position: absolute;
    top: 0;
    left: 50%;
    width: 50%;
    height: 100%;
    overflow: hidden;
    transition: all 0.6s ease-in-out;
    border-radius: 150px 0 0 100px;
    z-index: 1000;
}

.container.active .toggle-container{
    transform: translateX(-100%);
    border-radius: 0 150px 100px 0;
}

.toggle{
    background-color: #512da8;
    height: 100%;
    background: linear-gradient(to right, #5c6bc0, #512da8);
    color: #fff;
    position: relative;
    left: -100%;
    height: 100%;
    width: 200%;
    transform: translateX(0);
    transition: all 0.6s ease-in-out;
}

.container.active .toggle{
    transform: translateX(50%);
}

.toggle-panel{
    position: absolute;
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 30px;
    text-align: center;
    top: 0;
    transform: translateX(0);
    transition: all 0.6s ease-in-out;
}

.toggle-left{
    transform: translateX(-200%);
}

.container.active .toggle-left{
    transform: translateX(0);
}

.toggle-right{
    right: 0;
    transform: translateX(0);
}

.container.active .toggle-right{
    transform: translateX(200%);
    
} */