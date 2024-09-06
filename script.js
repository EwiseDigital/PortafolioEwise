let menuVisible = false;
// FUNCION QUE OCULTA O MUESTRA EL MENU
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
    //Oculto el menu una vez qued selecciono una opcion 
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var habilidades = document.getElementById("habilidades");
    var distancia_habilidades = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_habilidades >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("Photoshop");
        habilidades[1].classList.add("Illustrator");
        habilidades[2].classList.add("htmlccs");
        habilidades[3].classList.add("canva");
        habilidades[4].classList.add("microsoft");
        habilidades[5].classList.add("atencion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("compromiso");
        habilidades[9].classList.add("direccion");
    }
}
//detecto el Scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
}