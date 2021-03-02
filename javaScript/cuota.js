//Prompt para cotizar el dolar

let presupuesto = parseFloat(prompt("Ingrese su presupuesto en dolares para fabricar una guitarra"));
alert("Tu presupuesto para fabricar una guitarra es de u$s" + presupuesto);
let dolarBlue = parseFloat(prompt("Ingrese el valor del dolar al día de hoy"));


budget = (number1, number2) => {
    let resultado = number1 * number2
    return resultado; 
}

budget(dolarBlue, presupuesto);
console.log("Tu presupuesto en pesos es $" + budget(dolarBlue, presupuesto));

//Objetos de la parte de la guitarra

class guitarPart{
    constructor(part, price){
    this.part = part;
    this.price = price;  
    }

    getArray = function(array){
        this.array.pop[array];
    }
}

let bodyFresno = new guitarPart("cuerpoFresno", 60); 
let bodyCaoba = new guitarPart("cuerpoCaoba", 50); 
let neckMaple = new guitarPart("mastilMaple", 30); 
let neckCaoba = new guitarPart("mastilCaoba", 50); 
let tapaBuckeyeBurl = new guitarPart("matapaBuckeyeBurl", 110);
let diapasonWengue = new guitarPart("diapasonWengue", 20);

const guitar1 = [bodyFresno, neckMaple, tapaBuckeyeBurl];
const guitar2 = [bodyCaoba, neckCaoba, tapaBuckeyeBurl, diapasonWengue];

console.log(guitar1.length);




// CLASE 1

/*let nombre = prompt("Por favor ingrese su nombre");
console.log("Hola " + nombre);

let num = prompt("Ingrese un número");
let suma = parseInt(num) + 10;
console.log(suma);

let text1 = prompt("Ingrese su nombre");
let text2 = prompt("Ingrese su apellido");
console.log(text1 + " " + text2);*/

// CLASE 2

// let number = prompt("ingrese un número");

// if(number < 0){
//     console.log("su número es menor a cero");
// } else if(number > 0){
//     console.log("su número es mayor a cero");
// } else {
//     console.log("su número es igual a cero");
// }

// let numero = prompt("ingrese un número");
// if(numero > 1000){
//     console.log("su número es mayor a mil");
// } else{
//     console.log("su número es menor a mil");
// }

// let saludo = prompt("por favor salude!");
// if(saludo == "hola"){
//     console.log("hola, buenos dias");
// }else{
//     console.log("salude y no se maleducado");
// }

// let numero2 = prompt("ingrese un numero entre 10 y 50");
// if(numero2 >= 10 && numero2 <=50){
//     console.log("su numero esta entre el 10 y 50");
// } else {
//     console.log("su numero NO esta entre el 10 y 50");
// }

// CLASE 3
//entregable
// var dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

// for(var i=0; i<7; i++) {
//     if(i == 6){
//         alert("A disfrutar que es domingo");
//     }
//     if (i % 2 === 1) {
//         console.log(dias[i] + " Es par!");
//     } else {
//         console.log(dias[i] + " Es Impar");
//     }    
// }

//complementario
//calcular IVA
// 

// CLASE 4
// function mayor(a,b){
//     if(a>b){
//         return a;
//     } else {
//         return b;
//     }
// }
// console.log(mayor(8,10));

// CLASE 5
// class usuario{
//     constructor(nombre, apellido, email, contraseña){
//         this.name= nombre;
//         this.lastName=apellido;
//         this.email=email;
//         this.password= contraseña;
//     }

//     register = function(){
//         console.log(this.name + " se acaba de registrar");
//     }
// }

// let user1= new usuario("Joaquin", "Gomez", "@Joaquin", "1234");
// let user2= new usuario("Sebastian", "Villar", "@Seba", "1234");
// let user3= new usuario("Natalia", "Machado", "@Natalia", "1234");

// console.log(user1.lastName);
// console.log(user2.email);
// console.log(user3.name);
// user1.register();

// CLASE 6
// let string = "Juan,Perez , 25 , juan_perez@gmail.com , Clave1234";
// console.log(string);
// console.log(string.toLowerCase());
// let div = string.split(";");
// console.log(div);
