//-----constantes declaradas para nuestro javascritp---------------------------------------------------------------------------------
const btnEncriptar = document.querySelector(".btn-encriptar");
const txtEncriptar = document.querySelector(".textarea-encriptar");
const aviso = document.querySelector(".encriptador-avisos");
const respuesta = document.querySelector(".evaluar");//evaluar es el textarea de la caja derecha donde queremos que aparezca nuestro texto encriptado
const contenido = document.querySelector(".tarjeta-contenedor");//contenedor que envuelve al muñeco y los dos p
const btnCopiar = document.querySelector(".btn-copiar");
const btnDesencriptar = document.querySelector(".btn-desencriptar");

//----------BOTON ENCRIPTADOR----------------------------------------------------------------------------------------------------------------------------------------------
btnEncriptar.addEventListener("click", e=>{//el boton se activara solo al hacer click en el e=> es por el evento 
    e.preventDefault();//Evita el comportamiento predeterminado del evento de click, es una buena práctica utilizarlo en controladores de eventos para asegurarse de que cualquier acción predeterminada del navegador no interfiera con la lógica de tu función 
        let texto = txtEncriptar.value;//Obtiene el valor actual del campo de texto, obtiene el texto que el usuario ha ingresado en ese campo de entrada y lo almacena en la variable texto.
        let txt = texto.normalize("NFD").replace(/[^\w\sñÑ]/g, "").replace(/[\u0300-\u036f]/g, ""); //Los caracteres encontrados se reemplazan por un espacio en blanco " ".
            console.log(txt);  
            if(texto == ""){ //"" representa una cadena vacía, es decir, una cadena que no contiene ningún carácter, a diferencia de un espacio en blanco que seira un " ".
                aviso.style.background = "#0A3871";//la propiedad style cambiara el css si se cumple esta condicional
                aviso.style.color = "#FFFF";
                aviso.style.fontWeight = "600"; 
                aviso.style.borderRadius = "5px";  
                aviso.textContent = "Ingrese contenido al campo de texto, por favor.";

                setTimeout(()=>{//seTimeout pone un cronometro para que ocurra un evento
                    aviso.removeAttribute("style");//con la propiedad removeAtribute le estamos quitando la propiedad style para que quede como al principio
                    respuesta.textContent = "";//agregamos este apartado para que arroje una cadena sin texto y se limpie el texto encritado en automatico
                },1500);//esta es la cantidad de segundos para que pase el evento en el setTimeout en total serian 1.5 segundos
            } 
            else if (texto !== txt && !/^[a-zñ\s]*$/i.test(texto)){//IMPORTANTE texto !== txt: Verifica si la cadena original texto no es igual a la cadena modificada txt. Esto indica que la cadena txt ha sido modificada y ya no es igual a la cadena original texto. Comprueba si la cadena texto, una vez limpiada de todos los caracteres excepto "ñ" y "Ñ", contiene solo "ñ" y "Ñ". La negación ! se asegura de que la condición sea verdadera solo si texto contiene caracteres. especiales//
                aviso.style.background = "#0A3871";
                aviso.style.color = "#FFFF";
                aviso.style.fontWeight = "800";
                aviso.textContent = "El contenido no debe contener caracteres especiales.";

                setTimeout(()=>{
                    aviso.removeAttribute("style"); 
                    aviso.textContent = "Trate de nuevo sin utilizar caracteres especiales.";
                    aviso.style.color = "#495057";
                    respuesta.textContent = "";
                },1500);
            }

            else if(texto !== texto.toLowerCase()) { //Es un método de JavaScript que convierte todos los caracteres de la cadena texto a minúsculas. Por ejemplo, "Hola".toLowerCase() devolvería "hola".
                aviso.style.background = "#0A3871";//si texto que debe estar en minuscula es diferente en cuanto a la mayuscula entonces cumple esta condicional
                aviso.style.color = "#FFFF";
                aviso.style.fontWeight = "600";
                aviso.style.borderRadius = "5px";
                aviso.textContent = "El texto no debe contener mayusculas.";

                setTimeout(()=>{
                    aviso.removeAttribute("style");
                },1500);

                setTimeout(()=>{
                    aviso.textContent = "Trate de nuevo sin utilizar mayusculas";
                    aviso.style.color =  "#495057";
                },1500);
                
            }

            else {
                texto = texto.replace(/e/mg, "enter"); //El método replace de JavaScript se utiliza para buscar un valor o un patrón en una cadena y reemplazarlo con otro valor.
                texto = texto.replace(/i/mg, "imes");
                texto = texto.replace(/a/mg, "ai");
                texto = texto.replace(/o/mg, "ober");
                texto = texto.replace(/u/mg, "ufat");

                respuesta.innerHTML = texto;
                btnCopiar.style.visibility = "inherit"; // Está configurando la visibilidad del elemento btnCopiar para que herede la visibilidad de su elemento padre. Esto significa que si el elemento padre de btnCopiar es visible (tiene visibility: visible), entonces btnCopiar también será visibl
                contenido.remove();//nos elminiara todo el contenido que tiene nuestra tarjeta gracias al metodo remove

                setTimeout(()=>{
                    aviso.textContent = "El texto fue encriptado con exito.";
                    aviso.style.color =  "#495057";
                },100);

            }
});

//----------BOTON DESENCRIPTADOR----------------------------------------------------------------------------------------------------------------------------------------------
btnDesencriptar.addEventListener("click", e=>{//el boton se activara solo al hacer click en el el e=> es por el evento// 
    e.preventDefault();
        let texto = txtEncriptar.value;//extra el valor de lo ingresado en el textarea
        let txt = texto.normalize("NFD").replace(/[^\w\sñÑ]/g, "").replace(/[\u0300-\u036f]/g, "");
        console.log (txt);
        if(texto == ""){ //si texto es igual a una cadena vacia
                aviso.style.background = "#0A3871";//la propiedad style cambiara el css si se cumple esta condicional
                aviso.style.color = "#FFFF";
                aviso.style.fontWeight = "800";
                aviso.textContent = "Ingrese contenido al campo de texto, por favor.";

                setTimeout(()=>{
                    aviso.removeAttribute("style");//con la propiedad removeAtribute le estamos quitando la propiedad style para que quede como al principio
                },1500);//esta es la cantidad de segundos para que pase el evento en el setTimeout
            }

            else if (texto !== txt && !/^[a-zñ\s]*$/i.test(texto)){
                aviso.style.background = "#0A3871";
                aviso.style.color = "#FFFF";
                aviso.style.fontWeight = "800"; 
                aviso.textContent = "El contenido no debe contener caracteres especiales.";

                setTimeout(()=>{
                    aviso.removeAttribute("style"); 
                    aviso.textContent = "Trate de nuevo sin utilizar caracteres especiales.";
                    aviso.style.color = "#495057";
                    respuesta.textContent = "";
                },1500);


            }

            else if(texto !== texto.toLowerCase()) {
                aviso.style.background = "#0A3871";
                aviso.style.color = "#FFF";
                aviso.style.fontWeight = "800";
                aviso.textContent = "El texto no debe contener mayusculas.";

                setTimeout(()=>{
                    aviso.removeAttribute("style");
                },1500);

            }
            else {
                texto = texto.replace(/enter/mg, "e");
                texto = texto.replace(/imes/mg, "i");
                texto = texto.replace(/ai/mg, "a");
                texto = texto.replace(/ober/mg, "o");
                texto = texto.replace(/ufat/mg, "u");

                respuesta.innerHTML = texto;//caja derecha dentro del html sera igual a lo ingresado en la caja encriptadora una vez que se transofrmen las vocales para su encriptacion 
                btnCopiar.style.visibility = "inherit"; // con esta funcion logramos el unicamente se muestre el boton cuando todo lo demas desaparezca
                contenido.remove();//nos elminiara todo el contenido que tiene nuestra tarjeta gracias al metodo remove
            }
});

//----------BOTON COPIAR----------------------------------------------------------------------------------------------------------------------------------------------
btnCopiar.addEventListener("click", e=>{//el boton se activara solo al hacer click en el el e=> es por el evento// 
    e.preventDefault();
    let copiar = respuesta; //recordemos que la respuesta es el texto ingresado y que posteriormente se paso a la parte derecha una vez que se encripten los caracteres
    copiar.select();//nos permitira elegir todo el texto de nuestra textarea evaluar
    document.execCommand("copy");//esta funcion es la que se encarga de copiar nuestro texto seleccionado en nuestra funcion de copiar
});

/* 
document:Es un objeto que representa el documento HTML cargado en el navegador. Proporciona acceso a todos los elementos del DOM (Document Object Model) y tiene varios métodos para interactuar con la página web.

execCommand:Es un método del objeto document que permite ejecutar comandos predefinidos en el documento. Estos comandos incluyen acciones como copiar, cortar, pegar, entre otros.

"copy":Es el comando que se ejecuta cuando llamas a document.execCommand. Este comando intenta copiar el texto seleccionado actualmente al portapapeles del usuario.*/