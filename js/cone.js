import {round} from './Round.js'
Math.decimal = function (a ,b ,c ){
  return a + (b/60) + (c/3600)
  
}

// Convert from degrees to radians.
Math.radians = function(degrees) {
	return degrees * Math.PI / 180;

}
//console.log(Math.radians(90)); // 1.5707963267948966

// Convert from radians to degrees.
Math.degrees = function(radians) {
	return radians * 180 / Math.PI;

}
//console.log(Math.degrees(3.141592653589793)); // 180

Math.coseno =  function calculatesCosine(degress){ 
  var pi = Math.PI;
  return Math.cos((pi /180) * degress) ;

}

function tanDeg(deg) {
  var rad = deg * Math.PI/180;
  return Math.tan(rad);

}

function calculaConstanteSobreRoloConico(angulo, rolete){
  alert("chamou")
        
        let constante = (90 + angulo)/2
        constante = tanDeg(constante)
        constante = (constante + 1 ) * rolete
        console.log("Aqui",constante)
    return constante
}

function calculaSobreRoloZero(constante, eZero){
  let roloZero = eZero + constante
  return roloZero

}

function calculaSobreRoloUm(padrao,anguloDecimal,sobreRoloeZero){
  let roloUm = sobreRoloeZero + ((padrao * tanDeg(anguloDecimal)) * 2) 
  console.log(roloUm)
 return roloUm

}
var an = Number(document.getElementById('grau').value)
var gu = Number(document.getElementById('minutos').value)
var lo = Number(document.getElementById('segundos').value)
var padraos = Number(document.getElementById('padrao').value)
var roletes = Number(document.getElementById('rolete').value)
var ezeros = Number(document.getElementById('ezero').value)

calculaCone.addEventListener('click',function () {
  let constante 
  let sobreRoloeZero 
  let sobreRoloUm 
  let anguloDecimal
  let existeErro = false
  let existeErroAngulo = false

  if(ezeros == ""){
    existeErro = true
    respEzero.style.color = 'red'
    respEzero.innerHTML = 'Informe o &empty; E0!'
  }
  if(roletes == ""){
    existeErro = true
    respRolete.style.color = 'red'
    respRolete.innerHTML = 'Informe o &empty; do roletes!'
  }
  if(padraos == ""){
    existeErro = true
    respPadrao.style.color = 'red'
    respPadrao.innerHTML = 'Informe o padrão!'
  }
  if(an == "" || gu == "" || lo == ""){
    existeErroAngulo = true
    existeErro = true
    respAngulo.style.color = 'red'
    respAngulo.style.color = 'red'
    respAngulo.style.color = 'red'
    respAngulo.innerHTML = 'Informe todos as campos!'
  }
  if( isNaN(an)){
    existeErroAngulo = true
    existeErro = true
    respAngulo.style.color = 'red'
    respAngulo.innerHTML = 'Digitar somente numeros!'
  }
  if( isNaN(gu)){
    existeErroAngulo = true
    existeErro = true
    respAngulo.style.color = 'red'
    respAngulo.innerHTML = 'Digitar somente numeros!'
  } 
  if( isNaN(lo)){
    existeErroAngulo = true
    existeErro = true
    respAngulo.style.color = 'red'
    respAngulo.innerHTML = 'Digitar somente numeros!'
  }
  if(!existeErroAngulo){
    anguloDecimal = Math.decimal(an,gu,lo)
  }   
  if(roletes)
  {
    if( isNaN(roletes)){
      existeErro = true
      respRolete.style.color = 'red'
      respRolete.innerHTML = 'Digitar números e pontos.'
    }     
  }
  if(ezeros)
  {
    if( isNaN(ezeros)){
      existeErro = true
      respEzero.style.color = 'red'
      respEzero.innerHTML = 'Digitar números e pontos.'
    }     
  }
  if(padraos)
  {
    if( isNaN(padraos)){
      existeErro = true
      respPpadrao.style.color = 'red'
      respPadrao.innerHTML = 'Digitar números e pontos.'
    }     
  }
  if(!existeErro) {
    constante = calculaConstanteSobreRoloConico(anguloDecimal, roletes)
    sobreRoloeZero = calculaSobreRoloZero(constante, ezeros)
    sobreRoloUm = calculaSobreRoloUm(padraos,anguloDecimal,sobreRoloeZero)
    
  }
  if(sobreRoloUm){
    resp1.innerHTML = `<h2>Valor do E0: ${round(sobreRoloeZero)}</h2>`
    resp2.innerHTML = `<h2>Valor do E1: ${round(sobreRoloUm)}</h2>`
    resp3.innerHTML = `<h2>Valor do Padrão: ${round(padraos)}</h2>`

  }

})

rolete.addEventListener('focus', function () {
    respRolete.style.color = 'revert'
    respRolete.innerHTML = '&empty; do rolete'
  
})
grau.addEventListener('focus', function () {
  respAngulo.style.color = 'revert'
  respAngulo.innerHTML = 'Informe o ângulo'

})
minutos.addEventListener('focus', function () {
  respAngulo.style.color = 'revert'
  respAngulo.innerHTML = 'Informe o ângulo'

})
segundos.addEventListener('focus', function () {
  respAngulo.style.color = 'revert'
  respAngulo.innerHTML = 'Informe o ângulo'

})
padrao.addEventListener('focus', function () {
  respPadrao.style.color = 'revert'
  respPadrao.innerHTML = 'Medida do Padrão'
})
ezero.addEventListener('focus', function () {
  respEzero.style.color = 'revert'
  respEzero.innerHTML = 'Informe o &empty; E0'
})


