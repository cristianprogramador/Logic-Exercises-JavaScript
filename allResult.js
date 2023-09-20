// Ejercicio 1: Crear un array
const numeros = Array.from({ length: 10 }, (_, i) => i + 1);

// Ejercicio 2: Sumar elementos de un array
const sumaNumeros = numeros.reduce((total, numero) => total + numero, 0);

// Ejercicio 3: Calcular el promedio
const promedio = sumaNumeros / numeros.length;

// Ejercicio 4: Encontrar el número más pequeño
const numeroMasPequeno = Math.min(...numeros);

// Ejercicio 5: Crear un array de números pares
const pares = Array.from({ length: 20 }, (_, i) => (i + 1) * 2);

// Ejercicio 6: Función para detectar paridad
function esPar(num) {
  return num % 2 === 0 ? "Par" : "Impar";
}

// Ejercicio 7: Filtrar números impares
const impares = numeros.filter((numero) => !esPar(numero));

// Ejercicio 8: Array de colores
const colores = ["rojo", "verde", "azul", "amarillo", "rosado"];

// Ejercicio 9: Mostrar colores
for (const color of colores) {
  console.log(color);
}

// Ejercicio 10: Función para colores bonitos
function esColorBonito(color) {
  return color === "rosado" || color === "azul"
    ? "¡El color es bonito!"
    : "No es un color bonito";
}

// Ejercicio 11: Filtrar edades mayores de 18
const edades = [25, 30, 15, 40, 20];
const mayoresDe18 = edades.filter((edad) => edad > 18);

// Ejercicio 12: Array de objetos de personas
const personas = [
  { nombre: "Juan", edad: 25, genero: "Masculino" },
  { nombre: "Ana", edad: 35, genero: "Femenino" },
  { nombre: "Luis", edad: 19, genero: "Masculino" },
];

// Ejercicio 13: Filtrar personas menores de 30
const menoresDe30 = personas.filter((persona) => persona.edad < 30);

// Ejercicio 14: Mostrar propiedades
const personaEjemplo = personas[0];
for (const propiedad in personaEjemplo) {
  console.log(propiedad);
}

// Ejercicio 15: Array de números aleatorios
const numerosAleatorios = Array.from({ length: 10 }, () =>
  Math.floor(Math.random() * 100) + 1
);

// Ejercicio 16: Encontrar el número más grande
const numeroMasGrande = Math.max(...numerosAleatorios);

// Ejercicio 17: Bucle while para número divisible por 7
let numeroAleatorio;
do {
  numeroAleatorio = Math.floor(Math.random() * 100) + 1;
} while (numeroAleatorio % 7 !== 0);

// Ejercicio 18: Array de palabras y concatenación
const palabras = ["Hola", "mundo", "JavaScript"];
const frase = palabras.join(" ");

// Ejercicio 19: Invertir una frase
const fraseInvertida = frase.split(" ").reverse().join(" ");

// Ejercicio 20: Función para calcular el factorial
function factorial(numero) {
  if (numero === 0 || numero === 1) {
    return 1;
  } else {
    return numero * factorial(numero - 1);
  }
}

// Ejercicio 21: Elevar elementos al cuadrado con map
const numerosCuadrados = numeros.map((numero) => numero ** 2);

// Ejercicio 22: Sumar elementos pares con reduce
const sumaPares = numeros.reduce((total, numero) => {
  if (esPar(numero)) {
    return total + numero;
  } else {
    return total;
  }
}, 0);

// Ejercicio 23: Filtrar nombres con la letra "a"
const nombresConA = ["Maria", "Juan", "Ana", "Luis", "Elena"].filter((nombre) =>
  nombre.includes("a")
);

// Ejercicio 24: Multiplicación de elementos con bucle for
const numerosMultiplicados = [1, 2, 3, 4, 5].reduce((total, numero) => total * numero, 1);

// Ejercicio 25: Array de objetos de productos
const producto = { nombre: "Producto1", precio: 10, stock: 50 };
const productos = [producto];

// Ejercicio 26: Calcular valor total del inventario
const valorTotalInventario = productos.reduce(
  (total, producto) => total + producto.precio * producto.stock,
  0
);

// Ejercicio 27: Función para Fizz, Buzz y FizzBuzz
function fizzBuzz(numero) {
  if (numero % 3 === 0 && numero % 5 === 0) {
    return "FizzBuzz";
  } else if (numero % 3 === 0) {
    return "Fizz";
  } else if (numero % 5 === 0) {
    return "Buzz";
  } else {
    return numero;
  }
}
