// nome e xp do herói;
const nameHero = "BitBlaster"
let xp = 7713
let nameNivel = xp


// níveis de xp e seus determinados nomes;
if (xp <= 1000){
    nameNivel = "Ferro" 
}

else if (xp > 1000 && xp <= 2000){
    nameNivel = "Bronze"
}

else if (xp > 2000 && xp <= 5000){
    nameNivel = "Prata"
}

else if (xp > 5000 && xp <= 7000){
    nameNivel = "Ouro"
}

else if (xp > 7000 && xp <= 8000){
    nameNivel = "Platina"
}

else if (xp > 8000 && xp <= 9000){
    nameNivel = "Ascendente"
}

else if (xp > 9000 && xp <= 10000){
    nameNivel = "Imortal"
}

else if (xp > 10000){
    nameNivel = "Radiante"
}


//mensagem final - saída:
console.log ("O herói de nome " + nameHero + " está no nível " + nameNivel + ".")