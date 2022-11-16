const API_URL = `http://localhost:3000/peliculas`;


const contenedor = document.getElementById('cartas');
const buscar = async (url, busqueda = '') => {
    const peticion = await (await fetch(`${url}?q=${busqueda}`)).json();
    for (let i = 0; i < peticion.length; i++) {
        const pelicula = peticion[i];
        contenedor.appendChild(mostrarCartas(pelicula));
    }
};

const mostrarCartas = (element) => {
    const carta = document.createElement('div');
    carta.setAttribute('class', 'card');
    carta.innerHTML = `
    <div class="carta">
    <img src=${element.imagen} alt="" />
      <div>
        <h3>${element.nombre}</h3>
        <p>Calificación: ${element.calificacion}</p>
        <p>Genero: ${element.genero}</p>
      </div>
    </div>`;

    return carta;
};

buscar(API_URL);

const form = document.querySelector('form');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    contenedor.innerHTML = '';
    const busqueda = e.target.search.value;
    buscar(API_URL, busqueda);
});