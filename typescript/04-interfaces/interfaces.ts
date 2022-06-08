interface Person {}

function greetPerson(person: { firstName: string; lastName: string }) {
  console.log(`Hello ${person.firstName} ${person.lastName}`);
}

///
interface User {
  firstName: string;
  lastName: string;
  age?: number;
  role: "admin" | "editor" | "default";
}

function printUser(user: User) {
  console.log(user.age);
}

///

// Interface Unions
interface Circle {
  radius: number;
}

interface Square {
  sideLength: number;
}

type Shape = Circle | Square;

///
interface Animal {
  name: string;
}

interface Bird extends Animal {
  wingspan: number;
}

interface Dog extends Animal {
  isGoodBoy: boolean;
}

///

interface APIResponse {
  statusCode: 200 | 500;
  data?: string;
  error?: string;
}

function handleAPIResponse(response: APIResponse) {}

export {};
