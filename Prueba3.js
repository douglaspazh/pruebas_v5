// Douglas Anthony Paz Hernandez

const matriz = [
    [17, 9, 36],
    [8, 7, 3],
    [15, 28, 57]
];

const elementos = matriz.flat();
const elementosOrdenados = elementos.sort((a, b) => a - b);

let mediana;
const longitud = elementosOrdenados.length;

if (longitud % 2 === 0) {
    const mitad = longitud / 2;
    mediana = (elementosOrdenados[mitad - 1] + elementosOrdenados[mitad]) / 2;
} else {
    const mitad = Math.floor(longitud / 2);
    mediana = elementosOrdenados[mitad];
}

// Resultados
console.log(`Elementos ordenados: ${elementosOrdenados}`);
console.log(`Mediana: ${mediana}`);
