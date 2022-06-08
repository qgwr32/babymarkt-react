// Type Checking
let helloWorld = "Hello World!";

// Durch das Wissen welche Typen Variablen haben kann Typescript Fehler finden.

// Aufrufe von Funktionen die es nicht gibt.
helloWorld.fakeFunction();

// Übergeben von falschen Parametern an Funktionen
helloWorld.charAt();
helloWorld.charAt("0");

const person = {
  firstName: "Peter",
  lastName: "Parker",
};

console.log(person.frstName);

// Logikfehler

const value = Math.random() < 0.5 ? "a" : "b";
if (value !== "a") {
  // Kann erreicht werden.
} else if (value === "b") {
  // Kann nie erreicht werden.
}

// Besseres Tooling
const product = {
  id: "A123456",
  name: "Kinderwagen XYZ",
  price: 42,
};

const products = [
  {
    id: "A123456",
    name: "Kinderwagen YZ",
    price: 42,
  },
  {
    id: "A56565",
    name: "Kinderwagen XZ",
    price: 55,
  },
  {
    id: "A1865765",
    name: "Kinderwagen XY",
    price: 34,
  },
];

export {};
