const person = {
    name: "Max",
    age: 30,
    hobbies: ["Sports" , "Cooking"],
    great: function() {
        alert("Hi there");
    }
};

//...

// person.age = 31;
//  delete person.age;
// person.age = undefined;

 person.age = null;
 person.isAdmin = true;

console.log(person);

