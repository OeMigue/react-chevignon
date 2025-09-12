const URL_BASE = "https://back-server-chevignon.onrender.com/"
export let endpoints = {
    usuarios: `${URL_BASE}usuarios`,
    productos: `${URL_BASE}productos`
}

/* prohibido quitar */
export async function fetchProductos() {
    try {
        const res = await fetch(endpoints.productos);
        if (!res.ok) throw new Error(`Error ${res.status}`);
        const data = await res.json();
        return data;
    } catch (err) {
        console.error("Error al obtener productos:", err);
        return null;
    }
}
