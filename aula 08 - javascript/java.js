console.log("Hello World");
var i = 10;
var d = 13.5;
var nome = "Fulano";
var ligado = true;
console.log("Nome = " + nome);

//Comentario
/*
Interpolação de string
' -> crase
== ->  compara apenas o valor (tudo vira texto)
*/

console.log('i = ${i}');

console.log(typeof i);
console.log(typeof d);
console.log(typeof nome);
console.log(typeof ligado);

var n = 0;

if(n > 0) {
    console.log("Positivo");
} else if (n === 0) {
    console.log("Zero");
} else {
    console.log("Negativo");
}