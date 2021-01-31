btnRoll.addEventListener('click',() => {

    let passo = document.getElementById('rollPitch').value
    let angulo1 = document.getElementById('angle1').value
    let angulo2 = document.getElementById('angle2').value
    let answer =  rollIdeal (passo, angulo1,angulo2)
    let maxRoll = round(answer + (answer / 8))
    let minRoll = round(answer - (answer / 8))
   

    let existeErro = false

    if (!passo) {
        existeErro = true
        resRollPitch.style.color = 'red'
    } else {
        resRollPitch.style.color = 'revert'
    }
    if (!angulo1) {
        existeErro = true
        resAn1.style.color = 'red'
    } else {
        resAn1.style.color = 'revert'
    }
    if (!angulo2) {
        existeErro = true
        resAn2.style.color = 'red'
    } else {
        resAn2.style.color = 'revert'
    }
    if(isNaN(answer))
    { 
        existeErro = true
        respRoletePasso.innerHTML = `<p><b>Não digitar letras nem caracteres!</p>
                                    <p>Somente números e ponto.</b></p>`;
        respRoletePasso.style.color = 'red'
    }

    if(!existeErro){
        perfilRolo.style.display = 'none'
        perfilSimples.style.display = 'block'
        respRoletePasso.innerHTML =
        `<br><p>Rolete ideal: <b>${answer}</b></p>
        <p>Rolete máximo: <b>${maxRoll}</b></p>
        <p>Rolete mínimo: <b>${minRoll}</b></p>`

    }                             

})
rollPitch.addEventListener('focus', ()=> {

    perfilRolo.style.display = 'block'
    perfilSimples.style.display = 'none'
    rollPitch.value = ''
    angle1.value = ''
    angle2.value = ''
    respRoletePasso.innerHTML= ''
})

function rollIdeal(passo,angulo1,angulo2){

    return round(passo/(calculatesCosine(angulo1) + calculatesCosine(angulo2)))
 }
 
 function round(num){
 
  return parseFloat(num.toFixed(4));
 }
 
 function calculatesCosine(degress)
 {
   var pi = Math.PI;
   return Math.cos((pi /180) * degress) ;
 }