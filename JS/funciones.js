

function imc(peso, altura) {
    const IMC = peso / (altura ** 2);
    alert (`Tu IMC es: ${IMC.toFixed(1)} `)
    return IMC;
};
function pgcMujeres(IMC, edad) { 
   const pgc = 1.2 * IMC + 0.23 * edad - 5.4;
   return pgc;
}
function pgcHomnbres(IMC, edad) {
    const pgc = 1.2 * IMC + 0.23 * edad -10.8 - 5.4;
    return pgc;
}
alert('Vamos a calcular tu porcentaje de grasa corporal');
alert('Para eso primero necesitamos calcular tu IMC(índice de masa corporal)');
let menu = Number (prompt(`Ingresa el Nº de una de las siguientes opciones:
1- Mujer
2- Hombre`));
let peso = Number(prompt('Ingresa tu peso en Kg(Kilogramos)'));
let altura = Number(prompt('Ingresa tu altura en m(Metros)'));
let edad = Number (prompt('Ingresa tu edad'));
let IMC = imc(peso,altura);
let pgcH = pgcHomnbres(IMC, edad);
let pgcM = pgcMujeres(IMC,edad);

switch (menu) {
    case 1:
        alert('Ahora con tu imc calcularemos tu pgc(porcentaje de grasa corporal)');
        alert(`Tu porcentaje de grasa corporal es: ${pgcM.toFixed(1)}`);
        break;
    case 2:
        alert('Ahora con tu imc calcularemos tu pgc(porcentaje de grasa corporal)');
        pgcHomnbres(IMC, edad);
        alert(`Tu porcentaje de grasa corporal es: ${pgcH.toFixed(1)}`);
        break;   

    default:
        alert('Esa opcion no exite')
        break;
}








