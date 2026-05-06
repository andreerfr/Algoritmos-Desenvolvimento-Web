
function botao1(){
 //   var resp = prompt ("Informe sua data de nascimento", "dd/MM/aaaa");
//    var resp = confirm ("Voce esta certo disso, poso perguntar?");
   // alert(resp);
 //  window.document.write("EU NÃO ACREDITO");
   // document.write("<br>Pior que é verdade");
   // element.innerHTML = "Novo Texto";
   const element = document.getElementById("p01");
   let texto = document.getElementById("input1").value;
   element.innerHTML = "<b>Você digitou: </b>" + texto;
}