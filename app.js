var person = {
    name: "Harold",
    age: 29,
    hobbies: ["sports", "photography"],
    role: [2, "author"]
};
// person.role[1] = 10;
// person.role = [1, "hello", "bye"];
// person.role.push("admin");
console.log(person.role);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
