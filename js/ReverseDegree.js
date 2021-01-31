export function reverseDegree(Dec) {
    let graus;
    let minutos;
    let aux;
    let segundos;
    // Separa os graus
    graus = parseInt(Dec);

    // Pega a fração dos graus e converte em minutos
    aux = (Dec - graus ) * 60;
    minutos = parseInt(aux);

    // Pega a fração dos minutos e converte em segundos
    aux = (aux - minutos) * 60;
    segundos = parseInt(aux);
    // Devolvo a string formatada, a função Math.abs é para retornar o valor absoluto // (retirar o valor negativo) já que estou usando a notação norte, sul, leste ou oeste
    return `${Math.abs(graus)}°${minutos}'${segundos}"` 
}
