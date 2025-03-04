const contenedorNumeros = document.querySelector(".numeros__calificacion"); // si solo usamos numeros, solo seleccionara la primer coincidencia
const parrafoTexto = document.querySelector(".tarjeta2__parrafo1");
const botonSubmit = document.querySelector(".tarjeta__submit");
const tarjeta2 =document.querySelector(".tarjeta2");
const parrafoTarjeta2 = document.querySelector(".tarjeta2__parrafo1");

let numeroSeleccionado = null;

// PRIMERA TARJETA
contenedorNumeros.addEventListener("click", function(e){
    const numeros = e.target; // accedemos al elemento al que se le hace click
    
    if(numeros.classList.contains("numeros__calificacion")){ // para no seleccionar el contenedor
        return
    }

    let botonYaSeleccionado =  numeros.classList.contains("numeros--active")

    // ELIMINAMOS LA CLASE DE ELEMENTO QUE HAYAN SIDO SELECCIONADOS; CADA VEZ QUE SE SELECCIONA UNO SE BORRA EL ANTERIOR
    for(let i = 0; i < contenedorNumeros.children.length; i++){
        const boton = contenedorNumeros.children[i]; //contenedorNumeros.children te devuelve algo llamado HTMLCollection, que es una colección (tipo lista) de los hijos directos del contenedor.

        if (boton.classList.contains('numeros--active')) {
            boton.classList.remove('numeros--active');
        }
    }

   if(numeros.classList.contains("numeros")){
        numeros.classList.add("numeros--active");
        numeros.blur();
        numeroSeleccionado = e.target.textContent;
        parrafoTexto.textContent = `You selectedout ${e.target.textContent} of 5`
    }
    if(botonYaSeleccionado){
        numeros.classList.remove("numeros--active");
        numeroSeleccionado = 100;
    }

})

// SEGUNDA TARJETA:

botonSubmit.addEventListener("click", function(){
    if(numeroSeleccionado < 6){
        tarjeta2.classList.add("tarjeta2--active");
    }else{
        return
    }
})

parrafoTarjeta2.addEventListener("click", function(){
    tarjeta2.classList.remove("tarjeta2--active");
})
