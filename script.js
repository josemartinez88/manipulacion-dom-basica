//document.querySelector --> Llama a las etiquetas de HTML
const h1 = document.querySelector("h1"); 
const form = document.querySelector("#form"); 
const form2 = document.querySelector("#form2"); 
const p = document.querySelector("p"); 
const parrafito = document.getElementsByClassName("parrafito"); //Llama una clase sin necesidad de poner el "." 
const pid = document.getElementById("pid"); // llama un ID sin necesidad de poner el "#"
const input1 = document.querySelector("#calculo1"); 
const input2 = document.querySelector("#calculo2");
const input3 = document.querySelector("#calculo3"); 
const input4 = document.querySelector("#calculo4");
const btn = document.querySelector("#btncalcular");
const btn2 = document.querySelector("#btn2");
const pResult = document.querySelector("#result");
const pResult2 = document.querySelector("#result2");


// LLAMARLOS
console.log(input1.value);
console.log(h1);
// Para llamar varias etiquetas, hacerlo por medio de objeto
console.log({h1, p, parrafito, pid, input1});
console.log("hello, world");


















// ___________________________________________________________
/* ESCRIBIR HTML EN JS */
 h1.innerText = "que pasooo <br> ñerito"; //Add txt plano en HTML
 h1.innerHTML = "joselo papasitooo"; //Add codigo HTML en el archivo de HTML
 h1.getAttribute("class"); //Lee el valor de un atributo "en este caso el atributo class" que tiene una etiqueta "en este caso h1"
 h1.setAttribute("class", "nuevo_valor"); //Modifica el valor del atributo
 h1.classList.add("blue"); //Agrega un valor a una clase
 h1.classList.remove("nuevo_valor"); // Elimina un valor de una clase, "el que escribamos en parentesis se borra"
 console.log(h1.getAttribute("class")) //LLAMAR al H1


// ___________________________________________________________

 input1.value = "456" //agrega un placeholder al input

// ___________________________________________________________


const img = document.createElement("img"); //Crea un elemento de HTML "<img>, <section>, <header>, <div>, etc"
img.setAttribute("src",  "https://www.apple.com/co/apple-watch-ultra-2/images/watch-shared-compare/compare_s9__3q6pcf291iqq_small_2x.jpg"); // Le asigna un atributo (src) y un valor "https"
console.log(img) //LLAMA
pid.innerHTML = "" //elimina el txt de "p" al generarle un string vacio OJO --> Ponerlo antes del ".append"
pid.append(img); //al ID de un etiqueta parrafo "pid", le agregamos esta nueva etiqueta creada desde js "img"


// ___________________________________________________________

/* NOTA: js lee de abajo hacia arriba */


























// ___________________________________________________________
/* EVENTOS JS:
ADDEVENTLISTENER 
Agrega un escuchador de eventos, escucha cada vez que suceda cierto evento*/
btn.addEventListener("click", calcularconcatenacion);
//"click" es el evento que va ejecutar
//calcularconcatenacion es la function de abajo que esta llamando


// ___________________________________________________________
/* EVENTOS JS:
HTML --> LLAMAR EVENTOS: ONCLICK 
Creamos una function que ponemos en el HTML en el atribulo "onClick" del "button" para que nos traiga esta operacion que esta dentro de la function*/
function calcularconcatenacion(){
    const sumaInputs = Number(input1.value) + Number(input2.value); //Number: convierte los strings del input en numeros
    pResult.innerText = "Resultado: " + sumaInputs
}

// ___________________________________________________________
/* EVENTOS JS:
SEGUNDO FORM DEL HTML
como el ultimo boton es type submit, se debe ejecutar el siguiente codigo para que no se recargue la pag.*/

form2.addEventListener("submit", calcularconcatenacion2);

function calcularconcatenacion2(event){
    event.preventDefault(); //permite q la pag no recargue
    const sumaInputs2 = input3.value + input4.value; //concatena
    pResult2.innerText = "Resultado: " + sumaInputs2
};



