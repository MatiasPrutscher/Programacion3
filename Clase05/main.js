//Ejercicio 1
function encontrarPrimos(n) {
	let auxPrimos = [];
	for (let i = 2; i <= n; i++) {
		let esPrimo = true;
		for (let j = 2; j < i; j++) {
			if (i % j == 0) {
				esPrimo = false;
				break;
			}
		}
		if (esPrimo) {
			auxPrimos.push(i);
		}
	}
	return auxPrimos;
}
//Ejercicio 1 con 2 funciones
function esPrimo(num) {
	let aux = true;
	if (num < 2) {
		aux = false;
	}
	for (let i = 2; i < num; i++) {
		if (num % i === 0) {
			aux = false;
			break;
		}
	}
	return aux; 
}

function encontrarPrimos2(n) {
	let auxPrimos = [];

	for (let i = 2; i <= n; i++) {
		if (esPrimo(i)) {
			auxPrimos.push(i);
		}
	}
	return auxPrimos;
}
  
console.log(encontrarPrimos2(10)); 


//Ejercicio 2
function palindrimo(s) {
	let aux = s.split("").reverse().join("");
	return s == aux;
}
//Ejercicio 2 con lambda
const palindrimo2 = s => s == s.split("").reverse().join("");

console.log(palindrimo2("neuquen"));

//Ejercicio 3
function removerDuplicados(a) {
	let auxArray = [];

	for (let i = 0; i < a.length; i++) {
		if (!auxArray.includes(a[i])) {
			auxArray.push(a[i]);
		}
	}
	return auxArray;
}
console.log(removerDuplicados([1, 2, 2, 3, 4, 4, 5]));

//Ejercicio 4
function sumarDigitos(s) {
	let suma = 0;

	for (let i = 0; i < s.length; i++) {
		suma += parseInt(s[i], 10);
	}
	return suma; 
}
console.log(sumarDigitos("12345"));

//Ejercicio 5
function arrayPlano(a) {
	let auxArray = [];

	for (let i = 0; i < a.length; i++) {
		if (Array.isArray(a[i])) {
			auxArray = auxArray.concat(arrayPlano(a[i]));
		} else {
			auxArray.push(a[i]);
		}
	}
	return auxArray;
}
console.log(arrayPlano([1, [2, 3], [4, [5]]]));

//Ejercicio 6
function esBalanceado(s) {
	let aux = [];

	for (let i = 0; i < s.length; i++) {
		let c = s[i];

		if (c == '(' || c == '[' || c == '{') {
			aux.push(c);
		} else if (c == ')' || c == ']' || c == '}') {
			if (aux.length == 0) {
				return false;
			}

			let ultimo = aux.pop();

			if ((c == ')' && ultimo !== '(') ||
				(c == ']' && ultimo !== '[') ||
				(c == '}' && ultimo !== '{')) {
				return false;
			}
		}
	}
	return aux.length == 0;
}

console.log(esBalanceado("({[]})")); // true
console.log(esBalanceado("([)]"));   // false
console.log(esBalanceado("{[()]}")); // true
console.log(esBalanceado("({[})]")); // false
