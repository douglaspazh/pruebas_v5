// Douglas Anthony Paz Hernandez

const matriz1 = [
    [17, 9, 36],
    [8, 7, 3],
    [15, 28, 87]
];

const matriz2 = [
    [9, 21, 36],
    [16, 65, 4],
    [12, 28, 31]
];

let mayoresMatriz1 = 0;
let mayoresMatriz2 = 0;
let elementosIguales = 0;

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        if (matriz1[i][j] > matriz2[i][j]) {
            mayoresMatriz1++;
        } else if (matriz1[i][j] < matriz2[i][j]) {
            mayoresMatriz2++;
        } else {
            elementosIguales++;
        }
    }
}

// Resultados
console.log(`El arreglo 1 contiene ${mayoresMatriz1} elementos mayores`);
console.log(`El arreglo 2 contiene ${mayoresMatriz2} elementos mayores`);
console.log(`Existen ${elementosIguales} elementos iguales en ambos arreglos`);
