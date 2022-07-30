
let ver = document.getElementById('ver');
// For 

function repetidor(condicion, funcion){
    for(let i = 1; i <= condicion; i++){
        funcion();
    }
}

// Eventos

function crearPost(){
    let contenedorCajas = document.getElementById('contenedorCajas');
    let caja = document.createElement('div');
    caja.className = 'caja';
    contenedorCajas.appendChild(caja);
}


ver.addEventListener('click', crearPost);


