class Person {
constructor(public name: string, public age: number) {}
greet() {
console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
}
}
class Student extends Person {
constructor(name: string, age: number, public school: string) {
super(name, age);
}
}
abstract class Shape {
abstract area(): number;
}
class Circle extends Shape {
constructor(public radius: number) {
super();
}
area(): number {
return Math.PI * this.radius ** 2;
}
}
class Rectangle extends Shape {
constructor(public width: number, public height: number) {
super();
}
area(): number {
return this.width * this.height;
}
}
interface Drivable {
drive(): void;
}
class Car implements Drivable {
drive(): void {
console.log("The car is driving...");
}
}
// exemple d'utilisation
let person = new Person("Alice", 30);
person.greet();
let student = new Student("Bob", 20, "University");
student.greet();
console.log(`Student's school: ${student.school}`);
let circle = new Circle(5);
console.log(`Circle area: ${circle.area()}`);
let rectangle = new Rectangle(4, 6);
console.log(`Rectangle area: ${rectangle.area()}`);
let car = new Car();
car.drive();
