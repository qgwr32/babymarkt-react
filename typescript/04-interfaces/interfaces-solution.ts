// 1
interface Person {
  firstName: string;
  lastName: string;
}

function greetPerson(person: Person) {
  console.log(`Hello ${person.firstName} ${person.lastName}!`);
}

// 2
interface Product {
  name: string;
  price: number;
  isAvailable: boolean;
  colors: Array<string>;
  // Alternative
  // colors: string[];
}

const product: Product = {
  name: "Kinderwagen XYZ",
  price: 42.42,
  isAvailable: true,
  colors: ["rot", "grün", "blau"],
};

// 3

interface Address {
  street: string;
  zip: number;
  city: string;
}

interface User {
  name: string;
  age: number;
  isAdmin: boolean;
  address: Address;
}

const user = {
  name: "Peter Parker",
  age: 24,
  isAdmin: false,
  address: {
    street: "Suttner-Nobel-Allee 4",
    zip: 44803,
    city: "Bochum",
  },
};

function printUser(user: User) {
  console.log("Name:", user.name);
  console.log("Age:", user.age);
  console.log("Admin:", user.isAdmin ? "Yes" : "No");
  console.log(
    "Address:",
    `${user.address.street}, ${user.address.zip} ${user.address.city}`
  );
}

printUser(user);

export {};
