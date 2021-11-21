// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: "Harold",
//   age: 29,
//   hobbies: ["sports", "photography"],
//   role: [2, "author"],
// };

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: "Harold",
  age: 29,
  hobbies: ["sports", "photography"],
  role: Role.ADMIN,
};

// person.role[1] = 10;
// person.role = [1, "hello", "bye"];
// person.role.push("admin");

console.log(person.role);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

if (person.role === Role.ADMIN) {
  console.log("is admin");
}
