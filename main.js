
let ver = document.getElementById('ver');
// For 

// for(inicio ; condicion; actualizacion ){
//     //codigo
// }

function repetidor(condicion, funsion){
    for(let i = 1; i <= condicion; i++){
        funsion();
    }
}

crearPost = () => {
    let contenedorCajas = document.getElementById('contenedorCajas');
    let caja = document.createElement('div');
    caja.className = 'caja';
    contenedorCajas.appendChild(caja);
}


ver.addEventListener('click',() => repetidor(4, crearPost));


