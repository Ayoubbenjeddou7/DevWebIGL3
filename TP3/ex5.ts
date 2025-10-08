
function add(a: number, b: number): number {
return a + b;
}
function greet(name: string, age?: number): void {
if (age) {
console.log(`Hello ${name}, you are ${age} years old.`);
} else {
console.log(`Hello ${name}`);
}
}
function power(base: number, exp: number = 2): number {
return base ** exp;
}

function combine(a: number, b: number): number;
function combine(a: string, b: string): string;
function combine(a: any, b: any): any {
return a + b;
}

// exemple d'utilisation
console.log(`Add: ${add(2, 3)}`);
greet("Ayoub", 22);
greet("Sara");
console.log(`Power: ${power(3)}`);
console.log(`Combine numbers: ${combine(5, 10)}`);
console.log(`Combine strings: ${combine("Hello, ", "world!")}`);
