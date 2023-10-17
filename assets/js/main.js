const cuenta=document.getElementById("cuenta")
const cuentaNueva=document.getElementById("cuenta-nueva")
const numeroCuenta=document.getElementById("numero-cuenta")
const numeroCuentaNueva=document.getElementById("numero-cuenta-nueva")
const inputUsuario=document.getElementById("input-usuario")
const inputUsuarioNuevo=document.getElementById("input-usuario-nuevo")
const nombreUsuario=document.getElementById("nombre-usuario")
const nombreUsuarioNuevo=document.getElementById("nombre-usuario-nuevo")

cuenta.addEventListener("input",()=>{
    numeroCuenta.textContent=cuenta.value
})

inputUsuario.addEventListener("input",()=>{
    nombreUsuario.textContent=inputUsuario.value
})

cuentaNueva.addEventListener("input",()=>{
    numeroCuentaNueva.textContent=cuentaNueva.value
})

inputUsuarioNuevo.addEventListener("input",()=>{
    nombreUsuarioNuevo.textContent=inputUsuarioNuevo.value
})


var vista1=document.getElementsByClassName("contenedor-principal")[0]
var vista2=document.getElementsByClassName("contenedor-principal-2")[0]
var inicio=document.getElementsByClassName("inicio-sesion")[0]
var registro=document.getElementsByClassName("registro-cuenta")[0]

var cambiar=document.getElementById("cambiar")
var cambiar2=document.getElementById("cambiar-2")

cambiar.addEventListener("click",()=>{
    inicio.style.display="none"
    registro.style.display="flex"
})

cambiar2.addEventListener("click",()=>{
    registro.style.display="none"
    inicio.style.display="flex"
})


