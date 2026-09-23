const readline = require(`readline`);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// rl.question(`Elige una opción (1, 2 o 3): `, (opcion) => {

//     switch (opcion) {
//         case `1`:
//             console.log("Has seleccionado la opción 1");
//             //Aqui puedes adjuntar el codigo para ejecutar la opción 1
//             break;
//         case `2`:
//             console.log("Has seleccionado la opción 2");
//             //Aqui puedes adjuntar el codigo para ejecutar la opción 2
//             break;
//         case `3`:
//            console.log("Has seleccionado la opción 3");
//            //Aqui puedes adjuntar el codigo para ejecutar la opción 3
//            break;
//         default: 
//           console.log("Opción inválida")
//     }
//     rl.close();
// });

//EJERCICIO DE ACCIONISTAS: 

const valorHora = 4.0;
const descPrivilegiado = 0.15;
const descAsociado = 0.25;
const descAccionista = 0.35; 

rl.question(`Ingrese la cantidad de horas a pagar: \n`, (hora) => {
    const horaApagar = parseInt(hora, 10);

    rl.question(
        `Ingrese a que tipo de usuario pertenece (Debe ser un número del 1 al 4) \n`+
        `1. Privilegiado \n` +
        `2. Asociado \n` +
        `3. Accionista \n` +
        `4. No asociado \n`,
      (opcion) => {
        const opcionElegida = parseInt(opcion, 10);
        let total = valorHora * horaApagar;
        let totalDescuento; 
        switch (opcionElegida) {
            case 1: 
            totalDescuento = total * (1 - descPrivilegiado);
            console.log(`El total es de ` + totalDescuento + `mil pesos a pagar`);
            break;
            case 2: 
            totalDescuento = total * (1 - descAsociado);
            console.log(`El total es de ` + totalDescuento + `mil pesos a pagar`);
            break;
            case 3: 
            totalDescuento = total * (1 - descAccionista);
            console.log(`El total es de ` + totalDescuento + `mil pesos a pagar`);
            break;
            case 4: 
            console.log(`El total es de ` + total + `mil pesos a pagar`);
            break;
        }
        rl.close();
      }
    );
});