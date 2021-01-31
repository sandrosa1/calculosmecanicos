import {round} from './Round.js'
var existeErro = false
pitch.addEventListener('click',()=>{
    if(tipoDeRosca.value == '1'){
        resRollPitch.innerHTML = 'Digitar passo em polegada.'
        resRollPitch.style.color = 'green'

    }else{
        if(tipoDeRosca.value == '2'){
            resRollPitch.innerHTML = 'Rosca métrica.'
            resRollPitch.style.color = 'green'
        }else{
            resTipoRos.innerHTML = 'Escolher rosca!.'
            resTipoRos.style.color = 'red'
        }
    }
    if(tipoMaq.value == ''){
        resTipoMaq.innerHTML = "Informe a máquina!"
        resTipoMaq.style.color = 'red'
    }
    respEngrenagens.innerHTML = ''
    respEngrenagens.style.color = 'revert'
    
})
tipoMaq.addEventListener('focus',()=>{
        resTipoMaq.innerHTML = "Informe a máquina."
        resTipoMaq.style.color = 'revert'
        resTipoRos.innerHTML = 'Tipo de rosca.'
        resTipoRos.style.color = 'revert'
        respEngrenagens.innerHTML = ''
        respEngrenagens.style.color = 'revert'
})
tipoDeRosca.addEventListener('focus',()=>{
    resTipoMaq.innerHTML = "Informe a máquina."
    resTipoMaq.style.color = 'revert'
    resTipoRos.innerHTML = 'Tipo de rosca.'
    resTipoRos.style.color = 'revert'
    respEngrenagens.innerHTML = ''
    respEngrenagens.style.color = 'revert'
})
    
btnEng.addEventListener('click',()=> {
    
    var russa = []
    var matrix_16 = []
    var matrix_33 = []
    var reishauer = []
    russa = [30, 30, 30, 32, 36, 40, 42, 42, 45, 47, 48, 48, 54, 54, 60, 60, 60, 72, 72, 76, 76, 78, 80, 81, 84, 84, 90, 90, 92, 94, 94, 95, 99, 120, 127]
    matrix_16 = [30, 35, 36, 40, 46, 48, 50, 50, 52, 56, 60, 64, 70, 71, 72, 75, 75, 76, 80, 81, 84, 90, 96, 100, 108, 127 ]
    matrix_33 = [28, 30, 30, 32, 32, 33, 35, 36, 37, 37, 38, 40, 40, 41, 42, 44, 44, 45, 48, 48, 50, 50, 51, 52, 55, 57, 60, 61, 62, 67, 69, 70, 72, 75, 78, 80, 84, 100, 105, 127]
    reishauer = [28, 28, 32, 36, 39, 40, 40, 41, 42, 42, 45, 45, 47, 48, 48, 49, 50, 50, 51, 52, 56, 57, 60, 60, 63, 63, 64, 65, 70, 72, 75, 76, 76, 77, 80, 80, 84, 90, 96, 105, 112, 127]
    let passo = document.getElementById('pitch').value
    let numero_maquina = document.getElementById('tipoMaq').value
    let tipo = document.getElementById('tipoDeRosca').value
    let fuso
    let maq = []
    

    if(passo){
        if(isNaN(passo))
        { 
            existeErro = true
            respEngrenagens.innerHTML = `<p><b>Não digitar letras nem caracteres!</p>
                                        <p>Somente numeros e ponto.</b></p>`;
            respEngrenagens.style.color = 'red'
        }
    }else{

        existeErro = true
        resRollPitch.innerHTML= 'Informe o passo!'
        resRollPitch.style.color = 'red'
    }  
    if(!existeErro){
        if(tipo == 1){
            if (numero_maquina == 1){
                fuso = 6
                maq = reishauer
                calculo_polegada(passo,fuso,maq)
                
                
            }     
            else if (numero_maquina == 2){
                maq = matrix_33
                fuso = 20
                calculo_polegada(passo,fuso,maq)
                
            }    
            else if( numero_maquina == 3){
                maq = russa
                fuso = 6
                calculo_polegada(passo,fuso,maq)
                
            }    
            else if (numero_maquina == 5){
                maq = matrix_16
                fuso = 10
                calculo_polegada(passo,fuso,maq)
                
            }
                
        }   
        else if (tipo == 2)
        { 
            if (numero_maquina == 1)
            {
                maq = reishauer
                fuso = 6
                
                calculo_metrica(passo,fuso,maq)
            
                
            }    
            else if (numero_maquina == 2){
                maq = matrix_33
                fuso = 20
                
                calculo_metrica(passo,fuso,maq)
                
                
            }    
            else if (numero_maquina == 3){
                maq = russa
                fuso = 6
                
                calculo_metrica(passo,fuso,maq)
                
            }     
            else if (numero_maquina == 5){
                maq = matrix_16
                fuso = 10
                
                calculo_metrica(passo,fuso,maq)
                
            }
                
        }    
        else
        {
            respEngrenagens.innerHTML = "Falta parâmetros!"
            respEngrenagens.style.color = 'red'
        }
    }
   

})
    

function calculo_polegada(obj1,obj2,obj3){

    let cont = 1
    let passo = obj1
    let fuso = obj2
    let ref = obj3[obj3.length -1]
    let engrenagens = obj3
    let engrenagensPasso = ''
    let engrenagemA
    let engrenagemB
    let engrenagemC
    let engrenagemD   

        
    while(cont < ref){

        engrenagemA = Number(fuso * cont);
        engrenagemB = Number(passo * cont);
        let temp = '';
        let testA = engrenagens.filter(elemento => elemento == engrenagemA);
        let testB = engrenagens.filter(elemento => elemento == engrenagemB);

        if(testA.length != 0 && testB.length !=0 )
        {
            temp = `<p class="engrenagens">Passo: ${round((25.4 / fuso)*((engrenagemA)/(engrenagemB)))}-> A: ${engrenagemA} - B: 1 - C: 1 - D: ${engrenagemB}</p>`;
            engrenagensPasso = engrenagensPasso.concat(temp);
        };
        if(engrenagemA % 2 == 0){
            engrenagemC = engrenagemA / 2
            let testC = engrenagens.filter(elemento => elemento == engrenagemC);
            let testD = engrenagens.filter(elemento => elemento == engrenagemB);
            if(testC.length != 0 && testD.length !=0 )
            {
                temp = `<p class="engrenagens">Passo: ${round((25.4 / fuso)*((engrenagemC )/(.5 * engrenagemB)))}-> A: ${engrenagemC} - B: ½ - C: 1 - D: ${engrenagemB}</p>`;
                engrenagensPasso = engrenagensPasso.concat(temp);
            };
        }
            if(engrenagemB % 2 == 0){
                engrenagemD = engrenagemB / 2
                let testE = engrenagens.filter(elemento => elemento == engrenagemA);
                let testF = engrenagens.filter(elemento => elemento == engrenagemD);
                if(testE.length != 0 && testF.length !=0 )
                {
                    temp = `<p class="engrenagens">Passo: ${round((25.4 / fuso)*((engrenagemA* .5)/(engrenagemD )))}-> A: ${engrenagemA} - B: 1 - C: ½  - D: ${engrenagemD}</p>`;
                    engrenagensPasso = engrenagensPasso.concat(temp);
                };
            }

        
      
        cont++
    }
    if(engrenagensPasso != ''){
        respEngrenagens.innerHTML = engrenagensPasso
    }
    else{
         passo = round(25.4/obj1)
         calculo_metrica(passo,obj2,obj3)
    }
    
    
}    

function calculo_metrica(obj1,obj2,obj3){
    let i 
    let j 
    let k 
    let l   
    let passo = obj1
    let fuso = obj2
    let ref = obj3.length 
    let maq = obj3
    let temp = ''
    let engrenagensPasso = ''
    let cal

    
    for(i = 5; i < (ref ); i++ ){
        for(j = 1; j < (ref ); j++ ){
            for(k = 3; k < (ref); k++ ){
                for(l = 3; l < ref; l++ ){
                    let a = maq[i]
                    let b = maq[j]
                    let c = maq[k]
                    let d = maq[l]
                    cal = (((a * c ) / (b * d)) * (25.4 / fuso ))
                    cal = round(cal)
                    if(((l != i) || (k != l)) && (cal == passo)){
                        temp = `<p class="engrenagens">Passo: ${cal}-> A: ${a} - B: ${b} - C: ${c} - D: ${d}</P> `
                        engrenagensPasso = engrenagensPasso.concat(temp)
                    }
                }
            }
        }
    }
    
    if(engrenagensPasso != ''){
        respEngrenagens.innerHTML = engrenagensPasso
    }
    else{
        if(passo > (passo + .001)){
            passo = (passo + .0001)
            calculo_metrica(passo,obj2,obj3)
        }else{

            respEngrenagens.innerHTML = `<p>Não foi possível encontra engrenagens.</P>
            Tente digitar o passo de ${passo - .0011}`
        }
    }
           
}
    
  