//PREGUNTA 2
//Tarea 1
let factura = 49
let tip = (factura > 49 && factura < 301)
let propina
if(tip)
    propina = factura * 0.15
else
    propina = factura * 0.25
//Tarea 2
console.log("La factura fue "+factura+ " la propina fue " +propina +" y el valor total "+ propina+factura)
//Tarea 3
let calcTip = factura => {
    let propina
    if(tip)
        return factura * 0.15
    else
        return factura * 0.25
}