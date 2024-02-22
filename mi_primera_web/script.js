//alert("Hola este es mi Javascript");

let nombre = "Priscila";


console.log(nombre);

let contenidoTitulo = "Nombre";

let titulo = document.querySelector(".acerca-de h2");
if (titulo) {
titulo.innerHTML = contenidoTitulo;
};

//CONDICIONALES
let textoTitulo = titulo.innerText;
console.log(textoTitulo);

if (textoTitulo == "Nombre"){
titulo.innerHTML = "Otro";
} else{
console.log("No se cumple");
};

//FUNCIONES
//function nombredelafuncion(){};

let nombre = "Ani";
let ciudad = "Bs As";
let gusto = "escribir";

let parrafo = document.querySelector(".parrafo2");

function cambiarTEXTO(nombre, ciudad, gusto) {
    let contenido = `Bienvenides a mi pagina web! Aquí aprenderás más sobre mi. Me llamo ${nombre}, soy de ${ciudad}, un pueblo en el departamento de Colonia. Me gusta ${gusto}, salir con amigues y jugar a los Sims 4. Mi sueño es poder trabajar como tester!`;

return contenido
}

parrafo.innerTexts = cambiarTEXTO(nombre, ciudad, gusto);

const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const parrafo = document.getElementById("alertas");

function validarFormulario() {
  let warnings = "";
  let valido = true;
  parrafo.innerHTML = "";

  if (nombre.value.length < 4) {
    warnings += `El nombre debe contener más de 4 carcateres`;
    valido = false;
  }

  if (!valido) {
    parrafo.innerHTML = warnings;
  } else {
    parrafo.innerHTML = "Enviado";
  }
  return valido;
}

form.addEventListener("submit", (e) => {
  if (validarFormulario()) {
    // Si la validación es exitosa, puedes enviar el formulario
    formulario.submit();
  } else {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente
  }
});