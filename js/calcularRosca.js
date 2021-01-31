btn_rosca.addEventListener('click', function(){
    let t = document.getElementById('tipo').value
    let p = document.getElementById('passo').value 
    let d = document.getElementById('diaMaior').value
    if((p  == '') || (d == ''))
    {
        if(p == '')  
        {
            resPasso.innerHTML = "Informe o passo "
            resPasso.style.color = 'red'
            
        }
        if(d == '')
        {
            resDia.innerHTML = "Informe o &empty; em mm."
            resDia.style.color = 'red'
        }
        if(t == ''){
            resTipo.innerHTML = "Escolher tipo "
            resTipo.style.color = 'red'
        }

    }
    else{
        if(haveChar(d) || haveChar(p))
        {
            resPasso.innerHTML = "Não digitar letras ou caracteres! "
            resDia.innerHTML = "Somente numeros e ponto."
            resPasso.style.color = 'red'
            resDia.style.color = 'red'


        }else{

            if(t == "witworth")
        { 
        
            witworth(d,p)
            
        }
        else if(t == "metrica")
        {
        
            metrica(d,p)
            
        }else if(t == "polegada")
        {
           
            pa = 25.4/p
            metrica(d,pa)
            
        }else
        {

            resTipo.innerHTML = "Escolher tipo "
            resTipo.style.color = 'red'
        }

        }      
        
    }
  
})

tipo.addEventListener('focus', function()
{

     passo.value = ''
     diaMaior.value = ''   
     a.value = ''
     d1.value = ''
     d2.value = ''
     f.value = ''
     dz.value = ''
     dm.value = ''
     d22.value ='' 
     h.value = ''
     re.value = ''
     ri.value = ''
     resTipo.innerHTML = "Tipo de Rosca"
     resTipo.style.color = 'revert'
     resDia.innerHTML = "Diâmetro em milimetros"
     resDia.style.color = "revert"
     resPasso.innerHTML = "Passo"
     resPasso.style.color = "revert"
    
 
         
})
passo.addEventListener('focus', function(){

    let t = document.getElementById('tipo').value
    if(t == "witworth")
    { 
       resDia.innerHTML = "Diâmetro em mm"
       resPasso.innerHTML = "Passo em polegadas"
       resPassoAte()
        
    }
    else if(t == "metrica"){

       resDia.innerHTML = "Diâmetro em mm"
       resPasso.innerHTML = "Passo em mm"
       resPassoAte()
        
    }else if(t == "polegada"){

       resDia.innerHTML = "Diâmetro em mm"
       resPasso.innerHTML = "Passo em polegadas"
       resPassoAte()
    }

    
})

function metrica(de,pa){

    let d = parseFloat(de)
    let p = parseFloat(pa)
    //ângulo do perfil da rosca:
    let an = 60
    a.value = an
    //d1 = diâmetro menor do parafuso (Æ do núcleo):
    let diMePa1 = round(d - (1.2268 * p))
    d1.value = diMePa1
    //d2 = diâmetro efetivo do parafuso (Æ médio):
    let diEfPa = round(d - (0.6495 * p))
    d2.value = diEfPa
    //f = folga entre a raiz do filete da porca e a crista do filete do parafuso:
    let fuPor =  round(0.045 * p)
    f.value = fuPor
    //D= diâmetro maior da porca:
     let fr = round((2 * fuPor))
     let diMaior = d + fr 
     dz.value = diMaior
     //D1= diâmetro menor da porca (furo):
     let diMenorPor = round(d - (1.0825 * p))
     dm.value = diMenorPor
     //D2 =diâmetro efetivo da porca (Æ médio):
     let diEfPor = diEfPa
     d22.value = diEfPor
     //he altura do filete do parafuso:
     let haFiPa = round(0.61343 * p) 
     h.value = haFiPa
     //rre= raio de arredondamento da raiz do filete do parafuso:
     let rap = round(0.14434 * p)
     re.value = rap
     //rri = raio de arredondamento da raiz do filete da porca:
     let rrp = round(0.063 * p)
     ri.value = rrp
   

}

function witworth(de, pa){
    
    let d = parseFloat(de)
    let p = parseFloat(pa)
    //ângulo do perfil da rosca:
    let  an = 55
    a.value = an
    let passo =  round(24.5 / p) 
    //f = folga entre a raiz do filete da porca e a crista do filete do parafuso:
    f.value = 0
    let hi = he = round(0.6403 * passo)
    h.value = hi
    //raio dos filetes
    let rri = rre = round(0.1373 * passo)
    re.value = rri
    ri.value = rri
    let dme = d
    //D= diâmetro maior da porca:
    dz.value = dme
     //D1= diâmetro menor da porca (furo):
    let d11 = round(d - 2 * he)
    d1.value = d11 
    dm.value = d11
    let  def = d - he
    //d2 = diâmetro efetivo do parafuso (Æ médio):
    d2.value = def
    //D2 =diâmetro efetivo da porca (Æ médio):
    d22.value = def
   
}
function haveChar(char){
    if(isNaN(char)) return true
    else return false

}

function round(num){
    return parseFloat(num.toFixed(3));
   }

function resPassoAte(){
    resPasso.style.color='green'
    resDia.style.color='green'


}
