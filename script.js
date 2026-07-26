// ==========================
// ELEMENTOS
// ==========================

const btnAbrir = document.getElementById("btnAbrir");

const inicio = document.getElementById("inicio");
const sobreScreen = document.getElementById("sobreScreen");
const cartaScreen = document.getElementById("cartaScreen");
const galeriaScreen = document.getElementById("galeriaScreen");
const finalScreen = document.getElementById("finalScreen");

const sobre = document.getElementById("sobre");

const mensaje = document.getElementById("mensaje");

const musica = document.getElementById("musica");

const btnFinal = document.getElementById("btnFinal");

console.log(btnFinal);

const heartContainer = document.getElementById("heartContainer");

// ==========================
// CARTA
// ==========================

const texto = `

Felices 20 años mi amor ❤️ hoy quiero recordarte lo increíble que eres.
Gracias por regalarme dos años llenos de amor,
risas, aventuras y recuerdos que jamás olvidaré.
eres la persona más hermosa que llegó a mi vida.
Espero que este nuevo año esté lleno de sueños
cumplidos, mucha felicidad y momentos inolvidables.
nunca olvides lo orgulloso que estoy de ti.

Feliz cumpleaños mi vale.
Te amo muchísimo ❤️

`;

// ==========================
// CAMBIAR ESCENA
// ==========================

function mostrar(pantalla){

    document.querySelectorAll(".screen").forEach(seccion=>{

        seccion.classList.remove("active");

    });

    pantalla.classList.add("active");

}

// ==========================
// BOTÓN REGALO
// ==========================

btnAbrir.addEventListener("click",()=>{

    mostrar(sobreScreen);

});

// ==========================
// SOBRE
// ==========================

sobre.addEventListener("click",()=>{

    sobre.classList.add("abierto");

    musica.play().catch(()=>{});

    setTimeout(()=>{

        mostrar(cartaScreen);

        escribirCarta();

        iniciarCorazones();

    },1200);

});

// ==========================
// MÁQUINA DE ESCRIBIR
// ==========================

function escribirCarta(){

    mensaje.innerHTML="";

    let i=0;

    function escribir(){

        if(i<texto.length){

            mensaje.innerHTML+=texto.charAt(i);

            i++;

            setTimeout(escribir,35);

        }else{

            setTimeout(()=>{

                mostrar(galeriaScreen);

            },6000);

        }

    }

    escribir();

}

// ==========================
// GALERÍA
// ==========================

btnFinal.addEventListener("click",()=>{

    mostrar(finalScreen);

});

// ==========================
// CORAZONES
// ==========================

function iniciarCorazones(){

    setInterval(()=>{

        const heart=document.createElement("div");

        heart.className="heart";

        heart.innerHTML="❤️";

        heart.style.left=Math.random()*100+"vw";

        heart.style.fontSize=(18+Math.random()*28)+"px";

        heart.style.animationDuration=(5+Math.random()*4)+"s";

        heartContainer.appendChild(heart);

        setTimeout(()=>{

            heart.remove();

        },9000);

    },300);

}