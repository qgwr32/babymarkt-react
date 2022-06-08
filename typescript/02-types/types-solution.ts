/// 1
const pi = 3.14159;
const radius = 2;

const volume = pi * radius ** 2;

/// 2
let isAdmin: boolean = true;

if (isAdmin) {
  console.log("You are Admin!");
} else {
  console.log("You are not Admin!");
}

/// 3
const animals = ["dog", "cat", "bird"];

for (let i = 0; i < animals.length; i++) {
  const animal = animals[i];
  console.log(animal.toUpperCase());
}

/// 4

function multiply(x: number, y: number) {
  return x * y;
}

multiply(4, 2);

/// 5

const vector = {
  x: 5,
  y: 2,
};

function vectorLength(vector: { x: number; y: number }) {
  const length = Math.sqrt(vector.x ** 2 + vector.y ** 2);
  return length;
}

vectorLength(vector);

export default {};
