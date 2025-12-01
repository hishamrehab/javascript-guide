// const numbers = [1 , 2 , 3];

// console.log(numbers);

// const moreNumbers = new Array(1 , 2 , 3); //[]
// console.log(moreNumbers);


// const Numbers =  Array(1 , 2 , 3); // []
// console.log(moreNumbers);


// const yetMoreNumbers = Array.of(1 , 2);
// console.log(yetMoreNumbers);

// const listItems =  document.querySelectorAll("li");
// console.log(listItems);

// const arrayListItems = Array.from(listItems);
// console.log(moreNumbers);




// const hobbies = ["Cookies" , "Sports"];
// const personalData = [30 , "Max" , {moreDetail : []}]
// const analytics = [[ 1,1.6 ] , [-5.4 , 2.1]  , [2.3 , 3.4]];



// for(const data of analytics) {
//     for(const dataPoinsts of data) {
//         console.log(dataPoinsts);
//     }
// }


// console.log(personalData[2]);


// const hobbies = ["Sports" , "Cooking"];
// hobbies.push("Reading");
// hobbies.unshift("Coding");

// // Reomving
// hobbies.pop();
// const popedValue = hobbies.pop();
// hobbies.shift();
// console.log(hobbies);


// hobbies[1] = "Coding";
// // hobbies[5] = "Reading";
// console.log(hobbies);


// hobbies.splice(1 , 0, "Codings");

// hobbies.splice(0, 1);

// const removedElements = hobbies.splice(-1 , 1);


// console.log(hobbies); 

// const testResults = [ 1 , 5 , 1.5 , 10.99 , 1.5, -5 , 10];
// const storedRes = testResults.slice(0, 2);
// const storedResults = testResults.slice(2);
// const storedResults = testResults.concat([1 , 2 , 3 ]);

// testResults.push(5.61);
// console.log(storedResults , testResults);

//  console.log(testResults.indexOf(1.5));
//  console.log(testResults.lastIndexOf(1.5));

//  console.log(testResults.includes(10.99));
//  console.log(testResults.includes(10.99) !== -1);


// const personData = [
//     {name : "Max"},
//     {name : "Manuael"},
// ]

// console.log(personData.indexOf({ name: "Manual"}));


// const manuel = personData.find((person , idx , persons) => {
//     return person.name === "Manuael";
// });

// manuel.name = "Maximilian";
// console.log(manuel , personData);


// const prices = [10.99 , 5.99 ,3.99 , 6.59  ];
// const tax = 0.19;
// const taxAdjustedPrices = [];

// for(const price of prices) {
//     taxAdjustedPrices.push(price * (1+tax));
// }
 
// prices.forEach((price , idx) => {
//     const priceObj = {index: idx , textAdjectPrice : price *(1+ tax)};
//     taxAdjustedPrices.push(priceObj);
// });

// console.log(taxAdjustedPrices);



const prices = [10.99 , 5.99 ,3.99 , 6.59  ];
const tax = 0.19;


const textAdjectPrices = prices.map((price , idx) => {
    const priceObj = {index: idx , textAdjectPrice : price *(1+ tax)};
 return priceObj;
});

console.log(prices , textAdjectPrices);


const sotedPrices = prices.sort((a , b) => {
    if(a > b) {
       return -1;
    }else if(a === b) {
        return 0;
      }else {
        return 1;
      }
} );

 console.log(sotedPrices);


 const filterdArray = prices.filter((price) => price > 6);

 console.log(filterdArray);


    // let sum = 0;
    // prices.forEach((price) => {
    //     sum += price
    // })

    // console.log("sum" , sum);


    const sum = prices.reduce((prevValue , curValue) => prevValue + curValue, 0);