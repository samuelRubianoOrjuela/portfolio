let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    let skills = document.getElementById("skills");
    let distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("spring");
        habilidades[3].classList.add("python");
        habilidades[4].classList.add("sql");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("resolucion");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 

function copiar(x) {
    let texto = (x) ? "samuelrubiano0702@gmail.com" : "+57 319 706 57 99";
    let inputTemporal = document.createElement("input");
    inputTemporal.value = texto;
    document.body.appendChild(inputTemporal);
    inputTemporal.select();
    inputTemporal.setSelectionRange(0, 99999);
    document.execCommand("copy");
    document.body.removeChild(inputTemporal);
    mostrarAlerta(x);
}


// alerta

function mostrarAlerta(x) {
    let alerta = document.getElementById("alertaPersonalizada");
    let textoCopiado = (x) ? "Correo electronico" : "Numero de telefono";
    alerta.firstElementChild.textContent = textoCopiado + " copiado en el portapapeles";
    alerta.classList.add("mostrar");
    setTimeout(function() {
        cerrarAlerta();
    }, 1500);
}

function cerrarAlerta() {
    let alerta = document.getElementById("alertaPersonalizada");
    alerta.classList.remove("mostrar");
}
