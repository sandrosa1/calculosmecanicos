import {calHelice} from './angulo.js'

//Pagina angulo de helice//
//Reverte o campo para status orinal
tipo.addEventListener('focus', function () {
    resTipo.style.color = 'revert'
    resTipo.innerHTML = 'Tipo de Rosca'
    resAngulo.value = ''
    passo.value = ''
    primitivo.value =''
    resAngulo.value = ''
    oculta.style.display = 'none'
    resPasso.innerHTML = 'Informe o passo'
    resPasso.style.color = 'revert'
    resPrim.style.color = 'revert'
    resPrim.innerHTML = 'Informe o &empty; efetivo'

    
})

passo.addEventListener('focus', function () {
    let txtRosca = document.getElementById('tipo').value 
    resPasso.style.color = 'revert'
    oculta.style.display = 'none'
    error.innerHTML = 'Calcular hêlice'


    if(txtRosca == "polegada")
    {
        resPasso.innerHTML = 'Passo em polega.'
        resPasso.style.color = 'green'
    }
    if(txtRosca == "metrica")
    {
        resPasso.innerHTML = 'Passo em mm.'
        resPasso.style.color = 'green'
    }
    
    
})
primitivo.addEventListener('focus', function () {
    resPrim.style.color = 'revert'
    oculta.style.display = 'none'
    error.innerHTML = 'Calcular hêlice'
})

//Valida os parametros de entrada
btn.addEventListener('click', function anguloHelice(){

    let existeErro = false;
    let txtRosca = document.getElementById('tipo').value 
    let txtPasso = document.getElementById('passo').value 
    let txtPrimitvo = document.getElementById('primitivo').value
    let answer = ''
    if(txtRosca == ""){
        existeErro = true
        resTipo.style.color = 'red'
        resTipo.innerHTML = 'Selecione a rosca!'
    }

    if(txtPasso){

        let num = Number(txtPasso)
        if( isNaN(num)){
            existeErro = true
            resPasso.style.color = 'red'
            resPasso.innerHTML = 'Parametro incorreto!'
            error.innerHTML = 'Digitar números e pontos.'
        }   
    }
    else{
        existeErro = true
        resPasso.style.color = 'red'
        resPasso.innerHTML = 'Infome o &empty; primitvo!'

    }
    if(txtPrimitvo)
    {
        let num = Number(txtPrimitvo)
        if( isNaN(num)){
            existeErro = true
            resPrim.style.color = 'red'
            resPrim.innerHTML = 'Parâmetro incorreto!'
            error.innerHTML = 'Digitar números e pontos.'
        }     
    }
    else{

        existeErro = true
        resPrim.style.color = 'red'
        resPrim.innerHTML = 'Infome o &empty;primitvo !'
    }
    if(txtRosca == 'polegada') txtPasso = 25.4 / txtPasso
    if(!existeErro) {

        answer = calHelice(txtPasso,txtPrimitvo)
        oculta.style.display = 'block'
        resAngulo.style.color = 'green'
        resAngulo.value = answer

    }
    
})

