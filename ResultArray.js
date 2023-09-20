// Ejercicio 1: Crear un array
const frutas = ["manzana", "banana", "naranja", "uva", "pera"];

// Ejercicio 2: Acceder a elementos del array
console.log(frutas[1]);

// Ejercicio 3: Modificar un elemento del array
frutas[2] = "sandía";

// Ejercicio 4: Agregar elementos al array
frutas.push("kiwi", "fresa");

// Ejercicio 5: Eliminar elementos del array
frutas.shift();

// Ejercicio 6: Longitud del array
const longitud = frutas.length;
console.log("Longitud del array frutas:", longitud);

// Ejercicio 7: Búsqueda en el array
const frutaBuscada = "manzana";
if (frutas.includes(frutaBuscada)) {
  console.log(frutaBuscada + " existe en el array frutas.");
} else {
  console.log(frutaBuscada + " no existe en el array frutas.");
}

// Ejercicio 8: Ordenar el array
frutas.sort();

// Ejercicio 9: Sumar elementos numéricos
const numeros = [5, 10, 15, 20, 25];
const suma = numeros.reduce((total, numero) => total + numero, 0);
console.log("Suma de elementos en el array numeros:", suma);

// Ejercicio 10: Filtrar elementos
const numerosPares = numeros.filter((numero) => numero % 2 === 0);

// Ejercicio 11: Encontrar el elemento máximo
const maximo = Math.max(...numeros);

// Ejercicio 12: Duplicar el array
const numerosDuplicados = [...numeros];

// Ejercicio 13: Concatenar dos arrays
const otraFrutas = ["cereza", "mango", "papaya"];
const frutasConcatenadas = frutas.concat(otraFrutas);

// Ejercicio 14: Contar elementos repetidos
const elementoRepetido = "banana";
const conteo = frutas.reduce((contador, fruta) => (fruta === elementoRepetido ? contador + 1 : contador), 0);

// Ejercicio 15: Invertir el array
frutas.reverse();
