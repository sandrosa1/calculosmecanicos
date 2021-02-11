import {haveChar} from "./HaveChar.js"
import { reverseDegree } from './ReverseDegree.js';
import {round} from './Round.js'
import {rollIdeal} from './RollIdeal.js'

btnSubmit.addEventListener('click', () => {
    
    let parameters = []
    let answer = []
    parameters[0] = document.getElementById('inputPitch').value
    parameters[1] = document.getElementById('inputPrimitivo').value
    parameters[2] = document.getElementById('inputAngle1').value
    parameters[3] = document.getElementById('inputAngle2').value
    parameters[4] = document.getElementById('inputRoll').value
    answer[0] = ansInputPitch
    answer[1] = ansInputAngle1 
    answer[2] = ansInputPrimitivo
    answer[3] = ansInputAngle2
    answer[4] = ansInputRoll
    let haveError = false

    for(let i = 0; i < answer.length; i++){

        if(haveChar(parameters[i]))
        {
            haveError = true
            answer[i].innerHTML = 'Digitar números e ponto!'
            answer[i].style.color ='Red'
        }
        if(parameters[i] == '')
        {
            haveError = true
            answer[i].innerHTML = 'Preencher o campo!'
            answer[i].style.color ='Red'
        }
    }

    if(!haveError)
    {
        result.style.display = "block"
        calculateTotal(parameters, answer)
    } 

})

inputPitch.addEventListener('focus', () => {
    ansInputPitch.innerHTML = 'Informe o passo.'
    ansInputPitch.style.color = 'revert'
    result.style.display = "none"
})

inputPrimitivo.addEventListener('focus', () => {
    ansInputPrimitivo.innerHTML = 'Informe o &empty;  efetivo.'
    ansInputPrimitivo.style.color = 'revert'
    result.style.display = "none"

})

inputAngle1.addEventListener('focus', () => {
    ansInputAngle1.innerHTML = 'Informe o semi &angsph; 1.'
    ansInputAngle1.style.color = 'revert'
    result.style.display = "none"

})

inputAngle2.addEventListener('focus', () => {
    ansInputAngle2.innerHTML = 'Informe o semi &angsph; 2.'
    ansInputAngle2.style.color = 'revert'
    result.style.display = "none"

})

inputRoll.addEventListener('focus', () => {
    ansInputRoll.innerHTML = 'Informe o &empty; do rolete/esfera'
    ansInputRoll.style.color = 'revert'
    result.style.display = "none"

})

export function calculateTotal(parameters, answer){

    let ang1 = Number(parameters[2]) 
    let ang2 = Number(parameters[3])
    let ang = (ang1 + ang2)/2
    let passo = Number(parameters[0])
    let rolete = Number(parameters[4])
    let primitivo = Number(parameters[1])
    let roll = rollIdeal(passo,ang1,ang2)
    let heliceDegrees = calHeliceDegree(parameters)
    let helice = calHelice(parameters)
    let correcaoHelice = correcaoDeHelice(parameters,helice, ang )
    let constant = constantRoll(parameters,ang1,ang2,correcaoHelice)
    let rollMax = roll + (roll / 8)
    let rollMin = roll - (roll / 8)
    if(rolete > rollMax || roll < rollMin){
        answerRoll.style.backgroundColor = 'red'
        answerRoll.innerHTML = `<p>ROLETE DE ${rolete} FORA DO ESPECIFICADO</p>
        <p>Valor máximo ideal ${rollMax}</p>
        <p>Valor mínimo ideal ${rollMin}</p>` 
    }else
    {
        answerRoll.style.backgroundColor = 'revert'
        answerRoll.innerHTML = `<p>Rolete ideal: ${rolete}</p>
        <p>Valor máximo ideal ${rollMax}</p>
        <p>Valor minimo ideal ${rollMin}</p>`
        
    }
 
    answerHelice.innerHTML = `<p>Ângulo de hélice: ${heliceDegrees}</p>`
    answerConstatRoll.innerHTML = `<p>Constante para tampão: ${round(constant)}</p>`
    answerPrimitivo.innerHTML = `<p>&empty; primitivo ${round(primitivo)}</p>`
    answerSobreRolo.innerHTML = `<p>&empty; sobre rolo: ${round(constant + primitivo)}</p>`
    answerConstantAnel.innerHTML = `<p>Constante para anel de rosca: ${round(((2*rolete)-constant))}</p>`
    answerCorrecaoHelice.innerHTML = `<p>Correção da hélice: ${round(correcaoHelice)}</p>`

}

function correcaoDeHelice(obj,hel,ang){
 
    let ro = obj[4] / 2
    let ang_hel = (Math.tan(Math.radians(hel ))) ** 2
    let s1 = Math.cos(Math.radians(ang))
    let s2 = 1 / ( Math.tan(Math.radians(ang)))
    let correcao = ( ro * ang_hel ) * ( s1 * s2 )
 
    return correcao
  
}   

function constantRoll(obj,a1,a2,co){

    let resSeno =  Math.sin(Math.radians(((a1 + a2) /2)))
    let resCossen = Math.cos(Math.radians(((a1 - a2) /2)))
    let resTang = ( Math.tan(Math.radians( a1 ))) + ( Math.tan(Math.radians( a2 )))
    let constante = ((obj[4]*(1 + (resCossen / resSeno ))) - (obj[0] /resTang) + co)
    
    return constante                            

}

function calHeliceDegree(obj){
    let passo = obj[0]
    let prim = obj[1]
    let ang = 0
    let answer = ''
    /**(diam Pri * pi)/ passo inv tan - 90  */
    ang = 90 - Math.degrees(( Math.atan( (prim * Math.PI)/passo)))
    
    return reverseDegree(ang) 
    
}
function calHelice(obj){
    let passo = obj[0]
    let prim = obj[1]
    let ang = 0
    let answer = ''
    /**(diam Pri * pi)/ passo inv tan - 90  */
    return ang = 90 - Math.degrees(( Math.atan( (prim * Math.PI)/passo)))
}

// Convert from degrees to radians.
Math.radians = function(degrees) {
	return degrees * Math.PI / 180;
}
Math.radians(90); // 1.5707963267948966

// Convert from radians to degrees.
Math.degrees = function(radians) {
	return radians * 180 / Math.PI;
}
Math.degrees(3.141592653589793); // 180

Math.coseno =  function calculatesCosine(degress)
{
  
  var pi = Math.PI;

  return Math.cos((pi /180) * degress) ;
}