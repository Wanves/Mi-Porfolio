// Nav hamburgerburger selections
const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

// Scroll to top selection
const scrollUp = document.querySelector("#scroll-up");

// Select nav links
const navLink = document.querySelectorAll(".nav-link");

// Hamburger menu function
burger.addEventListener("click", () => {
  ul.classList.toggle("show");
});

// Close hamburger menu when a link is clicked
navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);

// scroll to top functionality
scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

// Certificados

let certificado = "certificado1"
const mostrarCertificados =()=>{
  let certificado1 = document.getElementById("imgCertificado");

  if(certificado == "certificado1"){
    certificado1.src = "certPython.jpg";
    certificado = "certificado2";
  }
  else if(certificado == "certificado2"){
    certificado1.src = "frontUnaHur1.jpg";
    certificado = "certificado3";
  }
  else if(certificado == "certificado3"){
    certificado1.src = "frontUnaHur2.jpg";
    certificado = "certificado4";
  }
  else if(certificado == "certificado4"){
    certificado1.src = "certPrograma.jpg";
    certificado = "certificado5";
  }
  else if(certificado == "certificado5"){
    certificado1.src = "progAlu.jpg";
    certificado = "certificado6";
  }
  else if(certificado == "certificado6"){
    certificado1.src = "a1.jpg";
    certificado = "certificado7";
  }
  else if(certificado == "certificado7"){
    certificado1.src = "a2.jpg";
    certificado = "certificado8";
  }
  else if(certificado == "certificado8"){
    certificado1.src = "a4.jpg";
    certificado = "certificado9";
  }
  else if(certificado == "certificado9"){
    certificado1.src = "agility.jpg";
    certificado = "certificado10";
  }
  else if(certificado == "certificado10"){
    certificado1.src = "responsivo.jpg";
    certificado = "certificado11";
  }
  else{
    certificado1.src = "certSoftSkills.jpg";
    certificado = "certificado1";
  }


}

const boton = document.querySelector("#button");
boton.addEventListener("click",()=>{
  mostrarCertificados();
})

window.addEventListener("load",mostrarCertificados());