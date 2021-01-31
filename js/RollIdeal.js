export function rollIdeal(passo,angulo1,angulo2){

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