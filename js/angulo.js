import {radiansToDegrees} from './RadiansToDegrees.js';
import { reverseDegree } from './ReverseDegree.js';

export function calHelice(pa,pr){
    let passo = pa
    let prim = pr
    let ang = 0
    let answer = ''
    /**(diam Pri * pi)/ passo inv tan - 90  */
    ang = 90 - radiansToDegrees(( Math.atan( (prim * Math.PI)/passo)))
    
    return reverseDegree(ang) 
    
}




