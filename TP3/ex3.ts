let id: number | string = 123;
type A = { a: number };
type B = { b: string };
type C = A & B;
let obj: C = { a: 1, b: "hello" };
type Status = "pending" | "done" | "canceled";
let currentStatus: Status = "pending";
let unknownValue: unknown = "Bonjour";
let strLength: number = (unknownValue as string).length;

//exemple d'utilisation
console.log(`ID: ${id}, Length of unknownValue: ${strLength}`);
console.log(`Object: a=${obj.a}, b=${obj.b}`);
console.log(`Current Status: ${currentStatus}`);
