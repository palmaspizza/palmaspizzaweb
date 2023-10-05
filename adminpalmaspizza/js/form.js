  document.querySelector("#submit").addEventListener("click", e => {
  e.preventDefault();

  //INGRESE UN NUMERO DE WHATSAPP VALIDO AQUI:
  const delivery = document.querySelector("#delivery").value;
  const Rshipdayx = document.querySelector("#Rshipdayx").value;
  const shipday = document.querySelector("#shipday").value;
  const tel = document.querySelector("#tel").value;
  const Refectivo = document.querySelector("#Refectivo").value;
  const pagacon = document.querySelector("#pagacon").value;
  const tiempo = document.querySelector("#tiempo").value;
  const Rtransferencia = document.querySelector("#Rtransferencia").value;
  const Ttransferencia = document.querySelector("#Ttransferencia").value;
  const nombre = document.querySelector("#nombre").value;
  const Rpollobbq = document.querySelector("#Rpollobbq").value;
  const tamañopollobbq = document.querySelector("#tamañopollobbq").value;
  const cantidadpollobbq = document.querySelector("#cantidadpollobbq").value;
  const Rchillian = document.querySelector("#Rchillian").value;
  const cantidadchillian = document.querySelector("#cantidadchillian").value;
  const tamañochillian = document.querySelector("#tamañochillian").value;
  const tamañocheeseburger = document.querySelector("#tamañocheeseburger").value;
  const cantidadcheeseburger = document.querySelector("#cantidadcheeseburger").value;
  const Rcheeseburger = document.querySelector("#Rcheeseburger").value;
  const tamañohawaiana = document.querySelector("#tamañohawaiana").value;
  const cantidadhawaiana = document.querySelector("#cantidadhawaiana").value;
  const Rhawaiana = document.querySelector("#Rhawaiana").value;
  const tamañovegetariana = document.querySelector("#tamañovegetariana").value;
  const cantidadvegetariana = document.querySelector("#cantidadvegetariana").value;
  const Rvegetariana = document.querySelector("#Rvegetariana").value;
  const tamañosuperpepperoni = document.querySelector("#tamañosuperpepperoni").value;
  const cantidadsuperpepperoni = document.querySelector("#cantidadsuperpepperoni").value;
  const Rsuperpepperoni = document.querySelector("#Rsuperpepperoni").value;
  const cantidaditaliana = document.querySelector("#cantidaditaliana").value;
  const tamañoitaliana = document.querySelector("#tamañoitaliana").value;
  const Ritaliana = document.querySelector("#Ritaliana").value;
  const cantidadnapolitana = document.querySelector("#cantidadnapolitana").value;
  const tamañonapolitana = document.querySelector("#tamañonapolitana").value;
  const Rnapolitana = document.querySelector("#Rnapolitana").value;
  const Rsuperbeef = document.querySelector("#Rsuperbeef").value;
  const cantidadsuperbeef = document.querySelector("#cantidadsuperbeef").value;
  const tamañosuperbeef = document.querySelector("#tamañosuperbeef").value;
  const direccion = document.querySelector("#direccion").value;
  const resp = document.querySelector("#respuesta");

  resp.classList.remove("fail");
  resp.classList.remove("send");

  const url = `https://api.whatsapp.com/send?phone=${tel}&text=
*🍕==Palmas Pizza==🍕*%0A
🍴Pedido de: %0A*➜${nombre}*%0A%0A
🟩Forma de pago: %0A*➜${Rtransferencia}${Refectivo}*%0A%0A
💵Total a pagar: %0A*➜${pagacon}${Ttransferencia}*%0A%0A
📍Dirección: %0A*➜${direccion}*%0A%0A
🚚Delivery: %0A*➜${delivery}*%0A%0A
*|🛎️===Pedido===🛎️|*%0A
${cantidadpollobbq}
${Rpollobbq}
${tamañopollobbq}
${cantidadchillian}
${tamañochillian}
${Rchillian}
${cantidadcheeseburger}
${tamañocheeseburger}
${Rcheeseburger}
${cantidadhawaiana}
${Rhawaiana}
${tamañohawaiana}
${cantidadvegetariana}
${Rvegetariana}
${tamañovegetariana}
${cantidadsuperpepperoni}
${Rsuperpepperoni}
${tamañosuperpepperoni}
${cantidaditaliana}
${Ritaliana}
${tamañoitaliana}
${cantidadnapolitana}
${Rnapolitana}
${tamañonapolitana}
${cantidadsuperbeef}
${Rsuperbeef}
${tamañosuperbeef}%0A
⏳Tiempo de llegada: ➜${tiempo}%0A%0A
${Rshipdayx}${shipday}`;

  if (nombre === "") {
    resp.classList.add("fail");
    resp.innerHTML = `Faltan algunos datos, ${nombre}`;
    return false;
  }
  resp.classList.remove("fail");
  resp.classList.add("send");
  resp.innerHTML = `Se ha enviado tu reserva, ${nombre}`;

  window.open(url);
});






const openEls = document.querySelectorAll("[data-open]");
const closeEls = document.querySelectorAll("[data-close]");
const isVisible = "is-visible";

for (const el of openEls) {
  el.addEventListener("click", function() {
    const modalId = this.dataset.open;
    document.getElementById(modalId).classList.add(isVisible);
  });
}

for (const el of closeEls) {
  el.addEventListener("click", function() {
    this.parentElement.parentElement.parentElement.classList.remove(isVisible);
  });
}

document.addEventListener("click", e => {
  if (e.target == document.querySelector(".modal.is-visible")) {
    document.querySelector(".modal.is-visible").classList.remove(isVisible);
  }
});

document.addEventListener("keyup", e => {
  // if we press the ESC
  if (e.key == "Escape" && document.querySelector(".modal.is-visible")) {
    document.querySelector(".modal.is-visible").classList.remove(isVisible);
  }
});


var transferencia = document.getElementById('transferencia');
var Rtransferencia = document.getElementById('Rtransferencia');

   transferencia.onclick = function(e){
     Rtransferencia.value =  this.value;
}

var efectivo = document.getElementById('efectivo');
var Ritaliana = document.getElementById('Refectivo');

   efectivo.onclick = function(e){
     Refectivo.value =  this.value;
}

var italiana = document.getElementById('italiana');
var Ritaliana = document.getElementById('Ritaliana');

   italiana.onclick = function(e){
     Ritaliana.value =  this.value;
}

var vegetariana = document.getElementById('vegetariana');
var Rvegetariana = document.getElementById('Rvegetariana');

   vegetariana.onclick = function(e){
     Rvegetariana.value =  this.value;
}


var hawaiana = document.getElementById('hawaiana');
var Rhawaiana = document.getElementById('Rhawaiana');

   hawaiana.onclick = function(e){
     Rhawaiana.value =  this.value;
}

var pollobbq = document.getElementById('pollobbq');
var Rpollobbq = document.getElementById('Rpollobbq');

   pollobbq.onclick = function(e){
     Rpollobbq.value =  this.value;
}

var superpepperoni = document.getElementById('superpepperoni');
var Rsuperpepperoni = document.getElementById('Rsuperpepperoni');

   superpepperoni.onclick = function(e){
     Rsuperpepperoni.value =  this.value;
}

var chillian = document.getElementById('chillian');
var Rchillian = document.getElementById('Rchillian');

   chillian.onclick = function(e){
     Rchillian.value =  this.value;
}

var superbeef = document.getElementById('superbeef');
var Rsuperbeef = document.getElementById('Rsuperbeef');

   superbeef.onclick = function(e){
     Rsuperbeef.value =  this.value;
}

var cheeseburger = document.getElementById('cheeseburger');
var Rcheeseburger = document.getElementById('Rcheeseburger');

   cheeseburger.onclick = function(e){
     Rcheeseburger.value =  this.value;
}

var napolitana = document.getElementById('napolitana');
var Rnapolitana = document.getElementById('Rnapolitana');

   napolitana.onclick = function(e){
     Rnapolitana.value =  this.value;
}

var seguimiento = document.getElementById('seguimiento');
var Rshipdayx = document.getElementById('Rshipdayx');

   seguimiento.onclick = function(e){
     Rshipdayx.value =  this.value;
}

function limpiarpollobbq() {
  document.getElementById("Rpollobbq").value = "";
}
function limpiarnapolitana() {
  document.getElementById("Rnapolitana").value = "";
}
function limpiaritaliana() {
  document.getElementById("Ritaliana").value = "";
}
function limpiarvegetariana() {
  document.getElementById("Rvegetariana").value = "";
}
function limpiarsuperpepperoni() {
  document.getElementById("Rsuperpepperoni").value = "";
}
function limpiarhawaiana() {
  document.getElementById("Rhawaiana").value = "";
}
function limpiarsuperbeef() {
  document.getElementById("Rsuperbeef").value = "";
}

function Lcantidadsuperbeef() {
   document.getElementById("cantidadsuperbeef").value = "";
}

function Ltamañosuperbeef() {
  document.getElementById("tamañosuperbeef").value = "";
}

function limpiarcheeseburger() {
  document.getElementById("Rcheeseburger").value = "";
}
function limpiarchillian() {
  document.getElementById("Rchillian").value = "";
}

function efectivovolver() {
  document.getElementById("Refectivo").value = "";
}

function transferenciavolver() {
  document.getElementById("Rtransferencia").value = "";
}

function limpiarshipday() {
  document.getElementById("Rshipdayx").value = "";
}


function Lnapolitana() {
  document.getElementById("cantidadnapolitana").value ="";
}
function Litaliana() {
  document.getElementById("cantidaditaliana").value ="";
}
function Lsuperpepperoni() {
  document.getElementById("cantidadsuperpepperoni").value ="";
}
function Lvegetariana() {
  document.getElementById("cantidadvegetariana").value ="";
}
function Lhawaiana() {
  document.getElementById("cantidadhawaiana").value ="";
}
function Lcheeseburger() {
  document.getElementById("cantidadcheeseburger").value ="";
}
function Lchillian() {
  document.getElementById("cantidadchillian").value ="";
}
function Lpollobbq() {
  document.getElementById("cantidadpollobbq").value ="";
}


function Ltamañonapolitana() {
  document.getElementById("tamañonapolitana").value ="";
}
function Ltamañoitaliana() {
  document.getElementById("tamañoitaliana").value ="";
}
function Ltamañosuperpepperoni() {
  document.getElementById("tamañosuperpepperoni").value ="";
}
function Ltamañovegetariana() {
  document.getElementById("tamañovegetariana").value ="";
}
function Ltamañohawaiana() {
  document.getElementById("tamañohawaiana").value ="";
}
function Ltamañocheeseburger() {
  document.getElementById("tamañocheeseburger").value ="";
}
function Ltamañochillian() {
  document.getElementById("tamañochillian").value ="";
}
function Ltamañopollobbq() {
  document.getElementById("tamañopollobbq").value ="";
}