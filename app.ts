const person = {
  name: "Harold",
  age: 29,
  hobbies: ["sports", "photography"],
};

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}
