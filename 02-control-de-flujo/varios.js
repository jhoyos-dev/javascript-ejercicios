//Importar el modulo readline para capturar datos desde la consola
const readline = require ("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// readline.createInterface: Configura la interacción para capturar datos de entrada.
// rl.question: Muestra una pregunta al usuario y utiliza una función de flecha para proceder
// Dentro de la función de flecha: 
// Se convierte el dato ingresado a número con parseInt 
// Se valida si es un número y se realizan comparaciones
// rl.close: Termina la interacción con el usuario


//1. Comparar dos numeros y decidir cual es mayor 
rl.question('Ingrese el primer numero: ', (num1) => { //Captura el primer numero
    rl.question('Ingrese el segundo numero: ', (num2) => { //Captura el segundo numero

        if (num1 > num2) {
            console.log(`${num1} es mayor que ${num2}`); // Muestra de resultados 
        } else if (num1 < num2) {
            console.log(`${num2} es mayor que ${num1}`);
        } else {
            console.log(`Ambos son iguales`);
        }
        rl.close(); //Cierre de interfaz readline
    });
});

//2. Al ingresar un número decir cual es Par y Impar:
rl.question(`Ingrese un número: `, (num) => { //Captura el número en la consola
    if (num % 2 === 0) { // Utiliza el % para determinar si el número es divisible entre 0
        console.log(`${num} es un número par`);
    } else {
        console.log(`${num} es un número impar`);
    }
    rl.close();
});

//3. Al ingresar la edad decir cual es su clasificación: 
rl.question(`Ingrese su edad: `, (edad) => {
    if (edad < 13) {
        console.log(`Eres un niño`);
        //Operador lógico && para verificar si la edad esta en el rango
    } else if (edad >= 13 && edad <= 19) {
        console.log(`Eres un adolecente`);
    } else {
        console.log(`Eres un adulto`);
    }
    rl.close();
});

//5. Calculadora básica ingresando el operador por consola: 
rl.question(`Ingrese el primer número: `, (num1) => {
    rl.question (`Ingrese el operador (+, -, *, /): `, (operador) => {
        rl.question(`Ingrese el segundo número: `, (num2) => {
            if (operador === `+`) {
                console.log(`Resultado: ${parseFloat(num1) + parseFloat(num2)}`);
            } else if (operador === `-`) {
                console.log(`Resultado: ${parseFloat(num1) - parseFloat(num2)}`);
            } else if (operador === `*`) {
                console.log(`Resultado: ${parseFloat(num1) * parseFloat(num2)}`);
            } else if (operador === `/`) {
                if (num2 == 0) {
                    console.log(`No se puede dividir entre cero`);
                } else {
                    console.log(`Resultado: ${parseFloat(num1) / parseFloat(num2)}`);
                }
            } else {
                console.log(`Operador Inválido`);
            }
            rl.close();
        });
    });
});

//6. Nota de calificaciones y deacuerdo con la nota definir valoración:
rl.question(`Ingrese la nota (0 a 10): `, (nota) => {
    if (nota < 5) {
        console.log(`Bajo`);
    } else if (nota >= 5 && nota < 7) {
        console.log(`Básico`);
    } else if (nota >= 7 && nota < 9) {
        console.log(`Alto`);
    } else if (nota >= 9 && nota < 10) {
        console.log(`Sobresaliente`);
    } else {
        console.log(`Nota Inválida`);
    }
    rl.close();
});

//7. Determinar si un año es bisiesto: 
rl.question(`Ingrese un año: `, (year) => {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        console.log(`${year} es un año bisiesto`)
    } else {
        console.log(`${year} no es un año bisiesto`);
    }
    rl.close();
});

//8. Comparar tres números y decir cual es mayor: 
rl.question(`Ingrese el primer numero: `, (num1) => {
    rl.question(`Ingrese el segundo numero: `, (num2) => {
        rl.question(`Ingrese el tercer numero: `, (num3) => {
            if (num1 > num2 && num1 > num3) {
                console.log(`${num1} es el mayor`);
            } else if (num2 > num1 && num2 > num3) {
                console.log(`${num2} es el mayor`);
            } else {
                console.log(`${num3} es el mayor`);
            }
            rl.close();
        });
    });
});

//9. Descuento porcentaje por categoria 
rl.question(`Ingrese el monto total de la compra: `, (monto) => {
    rl.question(`Ingrese la categoria (A, B, C): `, (categoria) => {
        let descuento = 0; 
        if (categoria === `A`) {
            descuento = 0.2; //Asigna descuento del 20%
        } else if (categoria === `B`) {
            descuento = 0.1; 
        } else if (categoria === `C`) {
            descuento = 0.05;
        } else {
            console.log(`Categoria Inválida`);
            rl.close();
            return;
        }
        const total = monto - monto * descuento; //Calcula el monto con descuento
        console.log(`Total a pagar con descuento: $${total.toFixed(2)}`);
        rl.close();
    });
});

//10. Validación de contraseñas: 
rl.question(`Ingrese su contraseña: `, (password) => {
    rl.question(`Confirme su contraseña: `, (confirm) => {
        if (password === confirm) { //Compara ambas contraseñas
            console.log(`Contraseña valida`);
        } else {
            console.log(`Las contraseñas no coinciden`);
        }
        rl.close();
    });
});