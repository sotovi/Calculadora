function suma()
{

if ((isNaN(document.getElementById("n1").value))||(isNaN(document.getElementById("n2").value))) {
alert("Error:\nEste campo debe tener solo numeros.");

return false;
 }
 
var n1 = parseInt(document.getElementById("n1").value);
var n2 = parseInt(document.getElementById("n2").value);
var suma  = n1+n2;
document.getElementById("resul").value=suma;
} 
function resta()
{
if ((isNaN(document.getElementById("n1").value))||(isNaN(document.getElementById("n2").value))) {
alert("Error:\nEste campo debe tener solo numeros.");

return false;
}
var n1 = parseInt(document.getElementById("n1").value);
var n2 = parseInt(document.getElementById("n2").value);
var resta  = n1-n2;
document.getElementById("resul").value=resta;
} 
function mult()
{
if ((isNaN(document.getElementById("n1").value))||(isNaN(document.getElementById("n2").value))) {
alert("Error:\nEste campo debe tener solo numeros.");

return false;
}
var n1 = parseInt(document.getElementById("n1").value);
var n2 = parseInt(document.getElementById("n2").value);
var mult  = n1*n2;
document.getElementById("resul").value=mult;
} 
function divi()
{
if ((isNaN(document.getElementById("n1").value))||(isNaN(document.getElementById("n2").value))) {
alert("Error:\nEste campo debe tener solo numeros.");

return false;
}
if (document.getElementById("n1").value==0||document.getElementById("n2").value==0) {
alert("Error:\n No se acepta 0.");

return false;
 }
var n1 = parseInt(document.getElementById("n1").value);
var n2 = parseInt(document.getElementById("n2").value);
var divi  = n1/n2;
document.getElementById("resul").value=divi;
} 
function carga()
{
document.getElementById("btn1").onclick=suma;
document.getElementById("btn2").onclick=resta;
document.getElementById("btn3").onclick=mult;
document.getElementById("btn4").onclick=divi;

}
window.onload=carga;