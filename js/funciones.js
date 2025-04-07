


//esta funcion es de mayor de edad
function funciones() {
    let edad = parseInt(prompt("Por favor, ingresa tu edad:"));
    let mensaje = document.getElementById("mensaje");

    if (edad >= 18) {
        mensaje.textContent = "Acceso concedido. Bienvenido a la Página.";
        mensaje.style.color = "black"; // Color verde para indicar éxito
    } else {
        mensaje.textContent = "Acceso denegado. Debes ser mayor de 18 años para acceder a esta página.";
        mensaje.style.color = "black"; // Color rojo para indicar restricción
    }
}


//esta funcion es de blanco y negro y cambio de letra de black a light
const button = document.getElementById('toggle-dark-mode');

button.addEventListener('click', () => {
  // Alternar la clase 'dark' en el <html>
  document.documentElement.classList.toggle('dark');

  // Cambiar el texto del botón
  if (button.textContent.trim().toLowerCase() === 'light') {
    button.textContent = 'dark';
  } else {
    button.textContent = 'light';
  }
});


//funcion de venta modal

function openModal() {
    document.getElementById("myModal").style.width = "50%"; // Ajusta el tamaño
    document.getElementById("overlay").classList.remove("hidden");
}

function closeModal() {
    document.getElementById("myModal").style.width = "0";
    document.getElementById("overlay").classList.add("hidden");
    
}