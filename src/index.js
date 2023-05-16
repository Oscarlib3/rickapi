/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const baseUrl = "https://rickandmortyapi.com";
const appNode = document.querySelector("#app")

// Intl
// 1.- Format fechas
// 2.- Format monedas

const formatPrice = price => {

    const newPrice = new window.Intl.NumberFormat("es-ES", {
        style: "currency",
        currency: "EUR"
    }).format(price)
 
    return newPrice;
 }

// web api
const minimo = 1;
const maximo = 42;

// Conectarnos al server
const random = () => Math.floor(Math.random()*(maximo - minimo)) + minimo;
window
   .fetch(`${baseUrl}/api/character?page=${random()}`)
   .then(respuesta => respuesta.json())
   .then(responseJson => {

       const todosLosItems = [];
       
       responseJson.results.forEach(item => {
           
           // Crear imagen
           const imagen = document.createElement("img");
           imagen.src = item.image;
           imagen.className = "h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6"

           // Crear título
           const titulo = document.createElement("h2");
           titulo.className = "text-lg"
           titulo.textContent = item.name;

           const status =document.createElement('h3');
           status.className = "text-lg"
           status.textContent = item.status;
           // Crear precio
            const gender = document.createElement ('div');
            gender.className = "text-lg"
            gender.textContent = item.gender;
            
            const location1 = document.createElement ('div');
            location1.className = "text-sm"
            location1.textContent = item.location.url;

            const originame = document.createElement ('div');
            originame.className = "text-lg"
            originame.textContent = item.origin.name;

            const origin = document.createElement ('div');
            origin.className = "text-sm"
            origin.textContent = item.origin.url;

            const location = document.createElement ('div');
            location.classname="text-lg"
            location.textContent =item.location.name;
           // Creamos un contenedor el título y el precio
           const datosrick = document.createElement("div")
           datosrick.className = "text-center md:text-left";
           datosrick.appendChild(titulo);
           datosrick.appendChild(status);
           datosrick.appendChild(gender);
           datosrick.appendChild(location);
           datosrick.appendChild(location1);
           datosrick.appendChild(originame);
           datosrick.appendChild(origin);
           // Metemos todo dentro de una tarjeta contenedora
           const card = document.createElement("div");
           card.className = "md:flex bg-white rounded-lg p-6 hover:bg-gray-300";
           card.append(imagen, datosrick);

           // Metemos todo dentro del contenedor principal
           const contenedor = document.createElement("div");
           contenedor.appendChild(card);

           todosLosItems.push(contenedor);

       });

       appNode.append(...todosLosItems);
       
   });
