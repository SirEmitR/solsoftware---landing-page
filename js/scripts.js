const atras = document.getElementById("atras")
const adelante = document.getElementById("adelante")
const catalogo_costos = document.getElementsByClassName('catalogo-costos');

let actual = 0;
let limite = catalogo_costos.length;

init();
atras.addEventListener('click', () =>{
    cambiar(1)
});
adelante.addEventListener('click', () =>{
    cambiar(2)
});


function init(){
    for (let index = 0; index < catalogo_costos.length; index++) {
        catalogo_costos.item(index).style.display = "none";
    }
    if(catalogo_costos.item(actual)){
        catalogo_costos.item(actual).style.display="block";
    }
    
}

function cambiar(opcion){
    if(opcion == 1){
        if(actual > 0){
            actual -= 1;
        }else{
            actual = limite - 1;
        }
    }else{
        if(actual < limite - 1){
            actual += 1;
        }else{
            actual = 0;
        }
    }
    init();
}