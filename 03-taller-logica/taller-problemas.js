const readline = require ("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// // Problema 1: Determinar si una persona puede votar.
// // Solicitar la edad de una persona y verificar si tiene la edad legal para votar en colombia.
// rl.question(`Ingrese su edad actual: `, (edad) => {
//     if (edad < 18) {
//         console.log(`Eres un menor de edad`);
//     } else if (edad >= 18) {
//         console.log(`Eres un adulto mayor de edad`);
//     }
//     rl.close();
// });

// Problema 2: Evaluar si un número es divisible por 3 y 5.
// Solicitar un número y verificar si es divisible entre ambos números.

// function evaluarDivisibilidad() {
//     const rl = readline.createInterface({
//         input: process.stdin,
//         output: process.stdout
//     });

//     rl.question("Introduce un número para verificar si es divisible entre 3 y 5: ", (numeroInput) => {
//         const numero = parseInt(numeroInput.trim(),);

//         if (isNaN(numero)) {
//             console.log("Por favor, introduce un número válido.");
//         } else {
//             if (numero % 3 === 0 && numero % 5 === 0) {
//                 console.log(`El número ${numero} es divisible entre 3 y 5.`);
//             } else {
//                 console.log(`El número ${numero} no es divisible entre 3 y 5.`);
//             }
//         }
//         rl.close();
//     });
// }

// evaluarDivisibilidad();


// Problema 3: Calcular el IMC. (Indice de Masa Corporal investiga como aplicar la formula
// Solicitar el peso y altura de una persona y calcular su índice de masa corporal.
// Aplicando las condiciones defina en que categoría esta la persona
// Problema 3: Calcular el IMC (Índice de Masa Corporal)
// function calcularIMC() {
//     const rl = readline.createInterface({
//         input: process.stdin,
//         output: process.stdout
//     });
// }
// rl.question("Introduce tu peso en kilogramos (kg): ", (pesoInput) => {
//     rl.pause(); // Evitar que el peso se duplique en la salida
//     rl.question("Introduce tu altura en metros (m): ", (alturaInput) => {
//         const peso = parseFloat(pesoInput.trim());
//         const altura = parseFloat(alturaInput.trim());

//         if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
//             console.log("Por favor, introduce valores numéricos válidos para peso y altura.");
//             rl.close();
//             return;
//         }

//         const imc = peso / (altura * altura);
//         let categoria;

//         if (imc < 18.5) {
//             categoria = "Bajo peso";
//         } else if (imc >= 18.5 && imc < 24.9) {
//             categoria = "Peso normal";
//         } else if (imc >= 25 && imc < 29.9) {
//             categoria = "Sobrepeso";
//         } else {
//             categoria = "Obesidad";
//         }

//         console.log(`Tu IMC es ${imc.toFixed(2)}. Categoría: ${categoria}.`);
//         rl.close();
//     });
// });

// calcularIMC();


// // Problema 4: Identificar el día de la semana.
// // Solicitar un número del 1 al 7 y mostrar el día correspondiente.
// function identificarDiaSemana() {
//     const diasSemana = {
//         1: "Lunes",
//         2: "Martes",
//         3: "Miércoles",
//         4: "Jueves",
//         5: "Viernes",
//         6: "Sábado",
//         7: "Domingo"
//     };

//     rl.question("Introduce un número del 1 al 7: ", (input) => {
//         const numero = parseInt(input.trim(), 10);

//         if (!isNaN(numero)) {
//             if (numero >= 1 && numero <= 7) {
//                 console.log(`El día correspondiente es: ${diasSemana[numero]}`);
//             } else {
//                 console.log("El número debe estar entre 1 y 7");
//             }
//         } else {
//             console.log("Por favor, introduce un número válido");
//         }

//         rl.close();
//     });
// }

// identificarDiaSemana();

// Problema 5: Determinar el rango de un número.
// Solicitar un número y verificar si está en el rango [10, 50].
// rl.question('Por favor, ingrese un número: ', (input) => {

//     const numero = parseInt(input);
  
//     if (numero >= 10 && numero <= 50) {
//       console.log('El número está en el rango [10, 50].');
//     } else {
//       console.log('El número NO está en el rango [10, 50].');
//     }
//     rl.close();
//   });

  // Problema 6: Clasificar un triángulo.
// Solicitar tres lados de un triángulo y determinar su tipo. Investiga sobre las leyes de los triangulos
// Función para verificar si los lados forman un triángulo válido
// function esTriangulo(a, b, c) {
//     return a + b > c && a + c > b && b + c > a;
//   }
  
  // Solicitar los tres lados al usuario
//   rl.question('Por favor, ingrese el primer lado del triángulo: ', (lado1) => {
//     rl.question('Por favor, ingrese el segundo lado del triángulo: ', (lado2) => {
//       rl.question('Por favor, ingrese el tercer lado del triángulo: ', (lado3) => {
        
//         // Convertir las entradas a números
//         const l1 = parseFloat(lado1);
//         const l2 = parseFloat(lado2);
//         const l3 = parseFloat(lado3);
  
//         // Verificar si los lados forman un triángulo válido
//         if (esTriangulo(l1, l2, l3)) {
//           // Clasificación del triángulo
//           if (l1 === l2 && l2 === l3) {
//             console.log('El triángulo es Equilátero.');
//           } else if (l1 === l2 || l2 === l3 || l1 === l3) {
//             console.log('El triángulo es Isósceles.');
//           } else {
//             console.log('El triángulo es Escaleno.');
//           }
//         } else {
//           console.log('Los valores ingresados NO forman un triángulo válido.');
//         }
  
//         // Cerrar la interfaz readline
//         rl.close();
//       });
//     });
//   });

//7. Desarrolla un algoritmo donde se ingresen tres números y debe mostrar 
// un mensaje que diga cual es mayor, cual es el que le sigue y cuál es el menor.
// Importamos el módulo readline para recibir entradas del usuario

// console.log("Ingresa tres números separados por espacios:");

// // Leer la entrada del usuario
// rl.question('> ', (input) => {
//   // Convertir la entrada en un array de números
//   const numeros = input.split(' ').map(Number);

//   // Validar que el usuario haya ingresado exactamente 3 números
//   if (numeros.length !== 3 || numeros.some(isNaN)) {
//     console.log("Por favor, ingresa exactamente tres números válidos.");
//     rl.close();
//     return;
//   }

//   // Ordenar los números de mayor a menor
//   numeros.sort((a, b) => b - a);

//   // Mostrar los resultados
//   console.log(`El número mayor es: ${numeros[0]}`);
//   console.log(`El número intermedio es: ${numeros[1]}`);
//   console.log(`El número menor es: ${numeros[2]}`);

//   // Cerrar la interfaz readline
//   rl.close();
// });
