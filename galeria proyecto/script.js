// =========================
// BOTÓN GALERÍA
// =========================

const titulo = document.getElementById("tituloPrincipal");

const boton = document.getElementById("botonGaleria");

const hero = document.getElementById("cajaHero");

if (boton) {

    // CLICK BOTÓN
    boton.addEventListener("mousedown", function () {

        titulo.innerHTML = "Explora nuestra colección";

        hero.classList.add("shadow-lg");

        hero.classList.toggle("hero-activo");

    });

    // MOUSE ENCIMA
    boton.addEventListener("mouseover", function () {

        titulo.style.color = "yellow";

    });

    // SACAR MOUSE
    boton.addEventListener("mouseout", function () {

        titulo.style.color = "white";

    });

}



// =========================
// GALERÍA
// =========================

let contador = 0;

const imagenes = document.querySelectorAll(".imagen-galeria");

const mensaje = document.getElementById("mensajeGaleria");

const botonOcultar = document.getElementById("botonOcultar");

imagenes.forEach(function (imagen) {

    // PASAR MOUSE
    imagen.addEventListener("mouseover", function () {

        imagen.style.transform = "scale(1.05)";

        imagen.style.transition = "0.4s";

        contador++;

        if (mensaje) {

            mensaje.innerHTML = "Has visto " + contador + " obras";

        }

    });

    // SACAR MOUSE
    imagen.addEventListener("mouseout", function () {

        imagen.style.transform = "scale(1)";

        if (mensaje) {

            mensaje.innerHTML = "Explora nuestras obras";

        }

    });

  imagen.addEventListener("click", function () {

    imagen.classList.toggle("imagen-activa");

document.body.style.backgroundImage =
"url('" + imagen.dataset.fondo + "')";
    document.body.style.backgroundSize = "cover";

    document.body.style.backgroundPosition = "center";

    if (mensaje) {

        mensaje.innerHTML = "Obra seleccionada";

    }

  });

  });



// =========================
// BOTÓN OCULTAR
// =========================

if (botonOcultar) {

    botonOcultar.addEventListener("click", function () {

        imagenes.forEach(function (imagen) {

            imagen.classList.toggle("oculto");

        });

    });

}



// =========================
// CONTACTO
// =========================

const formulario = document.getElementById("formularioContacto");

const nombre = document.getElementById("nombre");

const correo = document.getElementById("correo");

const mensajeTexto = document.getElementById("mensaje");

const mensajeFormulario = document.getElementById("mensajeFormulario");

const nuevoMensaje = document.createElement("h4");

nuevoMensaje.innerHTML = "Formulario interactivo activo";

nuevoMensaje.style.color = "gold";

nuevoMensaje.style.textAlign = "center";

if(formulario){
    formulario.before(nuevoMensaje);
}
if (formulario) {

    formulario.addEventListener("submit", function (event) {

        event.preventDefault();

        if (
            nombre.value === "" ||
            correo.value === "" ||
            mensajeTexto.value === ""
        ) {

         mensajeFormulario.innerHTML = "Complete todos los campos";

         mensajeFormulario.style.color = "red";
        } else {

         mensajeFormulario.innerHTML = "Formulario enviado correctamente";

         mensajeFormulario.style.color = "lime";

            formulario.reset();

        }

    });

}
