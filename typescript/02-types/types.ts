// String
let message: string = "Hello World!";
const wontChange: string = "Hello World!";

// Number
let count: number = 42;
let price: number = 42.42;

// Boolean
let isActive: boolean = false;

// Array
const numbers: Array<number> = [1, 2, 3];
const numbers2: number[] = [1, 2, 3];

// any
let product: any = {
  id: "A12345",
  name: "Kinderwagen",
};

// Object
const person = {
  firstName: "Peter",
  lastName: "Parker",
};

// Functions
function multiply(x: number, y: number) {
  return x * y;
}

function printPerson(person: { firstName: string; lastName: string }) {
  console.log(person.firstName + " " + person.lastName);
}

export {};
