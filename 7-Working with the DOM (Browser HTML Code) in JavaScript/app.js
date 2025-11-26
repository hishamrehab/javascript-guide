// // Attributes vs Properties

// const input = document.querySelector("input");

// console.dir(input);


// // input.value = "new value";
// // input.value = "new value";


// const allLis = document.querySelectorAll("li");

// console.dir( "allLis", allLis);

// const listItemElements =  document.querySelectorAll("li");


// const h1 = document.getElementById("main-title");

// h1.textContent = "Some new title!";
// h1.style.color = "white";
// h1.style.backgroundColor ="balck";


//  const li = document.querySelector("li:last-of-type");
//   li.textContent = li.textContent + "(Changed!)";
 
//   const body = document.body;
//   body.querySelector


//  const listItemElements = document.getElementsByTagName("li");
 

// for(const listItemEl of listItemElements) {
//     console.dir(listItemEl)
// } 


// Traversing Child Nodes

// document.querySelector(".list-item");
// const ul = document.querySelector("ul");

// ul.querySelector

// Usimng parentNode & ParentElement

// const liFirst = document.querySelector("li");
// liFirst.closest("body")



// Selecting Sibling Elements
//  const ul = li.parentElement;
 
//  ul.previousElementSibling 
//  ul.nextSibling


 

// const ul = document.body.firstElementChild.nextElementSibling
// const firstLi = ul.firstElementChild;

// console.log(firstLi);



// Styling DOM Element
const section = document.querySelector("section");
const button = document.querySelector("button");

// section.style.backgroundColor = "blue"
section.className = "red-bg";

button.addEventListener("click" , () => {
  // if(section.className === "red-bg visible") {
  //   section.className = "red-bg invisible"
  // }else {
  //   section.className = "red-bg visible"
  // }

  section.classList.toggle("visible");
  section.classList.toggle("invisible");
});

