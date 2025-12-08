const movieList = document.getElementById("movie-list");

movieList.style['background-color'] = "red";
movieList.style.display = "block";

 const userChosenKeyName = "level";




    let person = {
    'first-name': "Max",
        age: 30,
        hobbies: ["Sports" , "Cooking"],
        [userChosenKeyName]: "...",
        great: function() {
            alert("Hi there");
        },
        1.5 : "hello"
    };


    //...

    // person.age = 31;
    delete person.age;
    // person.age = undefined;

    person.age = null;
    person.isAdmin = true;
    const keyName = "first name";



    console.log(person[keyName]);
    console.log(person[age]);
    console.log(person[0]);
    console.log(person["first-name"]);
    console.log(person.hobbies[1]);
    console.log(person.great());
    console.log(person[1.5]);
