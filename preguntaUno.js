//PREGUNTA UNO
//Variables

let ricks = []
let mortys = []

let puntuajeRicks
let puntuajeMortys


//Tarea uno : Calcule el puntaje promedio de cada equipo, utilizando los datos de prueba proporcionados al final del enunciado.

console.log("TAREA 1")

console.log("Datos 1")

ricks = [96,108,89]
mortys = [88,91,110]
console.log("Ricks: " + (ricks[0]+ricks[1]+ricks[2])/3 + " Mortys: " + (mortys[0]+mortys[1]+mortys[2])/3)

console.log("Datos 2")

ricks = [97,112,101]
mortys = [109,95,123]
console.log("Ricks: " + (ricks[0]+ricks[1]+ricks[2])/3 + " Mortys: " + (mortys[0]+mortys[1]+mortys[2])/3)

console.log("Datos 3")

ricks = [97,112,101]
mortys = [109,95,106]
console.log("Ricks: " + (ricks[0]+ricks[1]+ricks[2])/3 + " Mortys: " + (mortys[0]+mortys[1]+mortys[2])/3)

//Tarea dos : Compare los puntajes promedio del equipo para determinar el ganador de la
//competencia, e imprimirlo en la consola. No olvides que puede haber un
//empate, así que toma en cuenta ese caso también.

console.log("TAREA 2")

ricks = [96,108,89]
mortys = [88,91,110]

puntuajeRicks = (ricks[0]+ricks[1]+ricks[2])/3 
puntuajeMortys = (mortys[0]+mortys[1]+mortys[2])/3

if(puntuajeMortys > puntuajeRicks){
    console.log("El ganador es el equipo Mortys")
}
else if(puntuajeMortys == puntuajeRicks){
    console.log("Empate")
}
else{
    console.log("El ganador es el equipo Ricks")
}
    
//Tarea tres : Incluya el requisito de una puntuación mínima de 100. Con esta regla el equipo
//solo gana si tiene una puntuación más alta que el otro equipo, y además tiene
//una puntuación de al menos 100 puntos.

console.log("TAREA 3")

ricks = [88,89,90]
mortys = [99,98,78]

puntuajeRicks = (ricks[0]+ricks[1]+ricks[2])/3 
puntuajeMortys = (mortys[0]+mortys[1]+mortys[2])/3



if(puntuajeMortys > puntuajeRicks){
    if(puntuajeMortys>99){
        console.log("El ganador es el equipo Mortys")
    }
    else{
        console.log("El equipo Mortys tiene mayor puntuaje pero no cuenta con al menos un puntuaje mayor o igual a 100pts")
    }
}
else if(puntuajeMortys == puntuajeRicks){
    console.log("Empate")
}
else{
    if(puntuajeRicks>99){
        console.log("El ganador es el equipo Ricks")
    }
    else{
        console.log("El equipo Ricks tiene mayor puntuaje pero no cuenta con al menos un puntuaje mayor o igual a 100pts")
    }
}

//Tarea cuatro : ¡La puntuación mínima también se aplica a un empate! Entonces, un empate
//solo ocurre cuando ambos equipos tienen la misma puntuación y ambos tienen
//una puntuación mayor o igual a 100 puntos. De lo contrario, ningún equipo
//gana el premio.

console.log("TAREA 4")


ricks = [40,40,30]
mortys = [10,10,90]

puntuajeRicks = (ricks[0]+ricks[1]+ricks[2])/3 
puntuajeMortys = (mortys[0]+mortys[1]+mortys[2])/3


if(puntuajeMortys > puntuajeRicks){
    if(puntuajeMortys>99){
        console.log("El ganador es el equipo Mortys")
    }
    else{
        console.log("El equipo Mortys tiene mayor puntuaje pero no cuenta con al menos un puntuaje mayor o igual a 100pts")
    }
}
else if(puntuajeMortys == puntuajeRicks){
    if(puntuajeMortys>99 && puntuajeRicks>99){
        console.log("Empate")
    }
    else{
        console.log("Puntuajes empatados pero ningun equipo cuenta con al menos un puntuaje mayor o igual a 100pts")
    }
}
else{
    if(puntuajeRicks>99){
        console.log("El ganador es el equipo Ricks")
    }
    else{
        console.log("El equipo Ricks tiene mayor puntuaje pero no cuenta con al menos un puntuaje mayor o igual a 100pts")
    }
}

//Tarea 5 : Cree una arrow function 'calcAverage' para calcular el promedio de 3 puntuaciones

console.log("TAREA 5")

const calcAverage = array => (array[0]+array[1]+array[2])/3

console.log("Function Arrow Creada")

//Tarea 6 : Usa la función para calcular el promedio de ambos equipos

console.log("TAREA 6")

ricks = [97,112,101]
mortys = [109,95,123]

console.log(calcAverage(ricks))
console.log(calcAverage(mortys))

//Tarea 7 : Cree una función 'checkWinner' que tome la puntuación media de cada equipo.
//como parámetros ('avgRIcks' y 'avgMortys'), y luego muestre el ganador, junto
//con los puntajes, de acuerdo con la regla anterior. Ejemplo: "Los koalas ganan
//(30 contra 13)"

console.log("TAREA 7")

function checkWinner(avgRIcks,avgMortys){

    if(avgMortys > avgRIcks){
        if(avgMortys>99){
            console.log("Los Mortys ganan " + avgMortys +" contra "+ avgRIcks)
        }
        else{
            console.log("El equipo Mortys tiene mayor puntuaje " + avgMortys + " pero no cuenta con al menos un puntuaje mayor o igual a 100pts")
        }
    }
    else if(avgMortys == avgRIcks){
        if(avgRIcks>99 && avgMortys>99){
            console.log("Empate "+ avgRIcks + " contra "+ avgMortys)
        }
        else{
            console.log("Puntuajes empatados " + avgRIcks + " contra "+ avgMortys + "pero ningun equipo cuenta con al menos un puntuaje mayor o igual a 100pts")
        }
    }
    else{
        if(avgRIcks>99){
            console.log("Los Ricks ganan " + avgRIcks +" contra "+ avgMortys)
        }
        else{
            console.log("El equipo Ricks tiene mayor puntuaje " + avgRIcks + " pero no cuenta con al menos un puntuaje mayor o igual a 100pts")
        }
    }
}

console.log("Funcion Creada")

//Tarea 8:  Utilice la función 'checkWinner' para determinar el ganador para los datos 1 y Datos 2

console.log("TAREA 8")

ricks = [96,108,89]
mortys = [88,91,110]

puntuajeRicks = (ricks[0]+ricks[1]+ricks[2])/3 
puntuajeMortys = (mortys[0]+mortys[1]+mortys[2])/3

console.log("Datos 1")

checkWinner(puntuajeRicks,puntuajeMortys)

ricks = [97,112,101]
mortys = [109,95,123]

puntuajeRicks = (ricks[0]+ricks[1]+ricks[2])/3 
puntuajeMortys = (mortys[0]+mortys[1]+mortys[2])/3

console.log("Datos 2")

checkWinner(puntuajeRicks,puntuajeMortys)

