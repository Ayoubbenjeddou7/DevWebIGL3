interface User {
id: number;
name: string;
email?: string;
readonly isAdmin: boolean;
}

let user1: User = {
id: 1,  
name: "Ayoub",
isAdmin: true,
};

interface Admin extends User {
permissions: string[];
}

let admin1: Admin = {
id: 2,
name: "Sara",
isAdmin: true,
permissions: ["read", "write", "delete"],
};

// exemple d'utilisation
console.log(`User: ${user1.name}, Admin: ${user1.isAdmin}`);
console.log(`Admin: ${admin1.name}, Permissions: ${admin1.permissions.join(", ")}`);
