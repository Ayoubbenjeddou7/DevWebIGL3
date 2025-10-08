let name: string = "Ayoub";
let age: number = 22;
let isAdmin: boolean = true;
let scores: number[] = [10, 15, 20];
let student: [string, number] = ["Ali", 21];
enum Role {
  User,
  Admin,
  SuperAdmin,
}
let myRole: Role = Role.Admin;

// exemple d'utilisation
console.log(`Name: ${name}, Age: ${age}, Role: ${Role[myRole]}`);
console.log(`Scores: ${scores.join(", ")}`);
console.log(`Student: ${student[0]}, Age: ${student[1]}`);