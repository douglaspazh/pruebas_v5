// Douglas Anthony Paz Hernandez

const matriz = [
    [17, 9, 36],
    [8, 7, 3],
    [15, 28, 57]
];

const elementos = matriz.flat();

const suma = elementos.reduce((acc, val) => acc + val);
const promedio = suma / elementos.length;

const rango = promedio * 0.6;
const limiteInferior = promedio - rango;
const limiteSuperior = promedio + rango;

const siAplican = elementos.filter(elemento => elemento >= limiteInferior && elemento <= limiteSuperior);
const noAplican = elementos.filter(elemento => elemento < limiteInferior || elemento > limiteSuperior);

const sumaAplican = siAplican.reduce((acc, val) => acc + val);

// Resultados
console.log(`La suma es: ${sumaAplican}`);
console.log(`Promedio: ${promedio}`);
console.log(`No aplican para sumar: ${noAplican}`);
console.log(`Si aplican para sumar: ${siAplican}`);