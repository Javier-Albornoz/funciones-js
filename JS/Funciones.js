


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
let peso, altura, edad, IMC, pgcH, pgcM;

switch (menu) {
    case 1:
        peso = Number(prompt('Ingresa tu peso en Kg(Kilogramos)'));
        altura = Number(prompt('Ingresa tu altura en m(Metros)'));
        edad = Number (prompt('Ingresa tu edad'));
        IMC = imc(peso,altura);
        pgcM = pgcMujeres(IMC,edad);
        alert('Ahora con tu imc calcularemos tu pgc(porcentaje de grasa corporal)');
        pgcMujeres(IMC,edad);
        alert(`Tu porcentaje de grasa corporal es: ${pgcM.toFixed(1)}`);
        break;
    case 2:
        peso = Number(prompt('Ingresa tu peso en Kg(Kilogramos)'));
        altura = Number(prompt('Ingresa tu altura en m(Metros)'));
        edad = Number (prompt('Ingresa tu edad'));
        IMC = imc(peso,altura);
        alert('Ahora con tu imc calcularemos tu pgc(porcentaje de grasa corporal)');
        pgcHomnbres(IMC, edad);
        pgcH = pgcHomnbres(IMC, edad);
        alert(`Tu porcentaje de grasa corporal es: ${pgcH.toFixed(1)}`);
        break;   

    default:
        alert('Esa opcion no existe')
        break;
}
alert('Programa Finalizado :D')