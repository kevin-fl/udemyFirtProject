const country = 'Belgium';
const continent = 'Europe';
let population = '12 millions';
//console.log(population);


const isIsland = false;

const language = 'french';
console.log(isIsland);
console.log(population);
console.log(language);


let split = 12000000;
let split2 = 6000000;

let result = (split - split2 ) +1 ;

console.log(result);


let description = 'portugal is in Eud its 11 millions people speak portuguese';





let country1= 122000000;
let country2 =30000001;


if(country1 <= 30000000){
    console.log("Belgium population is below finland");
} else if (country2 >= 30000000) {
    console.log('finland population is above belgium');
}


console.log(5+6+'4'+9-4-2);


/*
// Coding Challenge #1

let markweight = 78 ;
let markHeight = 1.69 ;

let markweightBis = 95 ;
let markHeightBis = 1.88 ;
// let Mark = {
   // weight : 78 ;
  //  tall: 1.69 ; 
//}
let johnWeight = 92;
let johnHeight = 1.95 ; 
let johnWeightBis = 85;
let johnHeightBis = 1.76 ; 


//calculare the BMI 
const bmiMark = markweight / markHeight ** 2 ;
//or
const bmiJohn = johnWeight / (johnHeight * johnHeight) ;  
console.log(bmiMark , bmiJohn);
//(27,24)


// calculate with data the second data test 

const bmiMarkBis = markweightBis / markHeightBis ** 2 ;
const bmiJohnBis = johnWeightBis / (johnHeightBis * johnHeightBis);

console.log(bmiMarkBis , bmiJohnBis);

let johnHigherBmi = bmiJohnBis > bmiMarkBis ; 
console.log(johnHigherBmi , ' trop cool john has the biggest BMI !');


let markHigherBMI = bmiMark > bmiJohn;
console.log(markHigherBMI);
//coding challenge #2
if (johnHigherBmi > markHigherBMI) {
  console.log('cool tu gagnes contre mark');
} else {
  console.log(' mark gagnes quand meme ');
};

*/

// driver license exercices 

const age = 16;
const isOldEnough = age >= 18;
if (isOldEnough) {
   console.log('cool ta + de 18 ans'); 
    
}else{
    const yearsLeft = 18-age;
  console.log(`u are too young , wait another ${yearsLeft} year`);
}

const birthYear = 1988 ;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);






//coding challenge #2

let markweight = 78 ;
let markHeight = 1.69 ;

let markweightBis = 95 ;
let markHeightBis = 1.88 ;
// let Mark = {
   // weight : 78 ;
  //  tall: 1.69 ; 
//}
let johnWeight = 92;
let johnHeight = 1.95 ; 
let johnWeightBis = 85;
let johnHeightBis = 1.76 ; 


//calculare the BMI 
const bmiMark = markweight / markHeight ** 2 ;
//or
const bmiJohn = johnWeight / (johnHeight * johnHeight) ;  
console.log(bmiMark , bmiJohn);
//(27,24)


// calculate with data the second data test 

const bmiMarkBis = markweightBis / markHeightBis ** 2 ;
const bmiJohnBis = johnWeightBis / (johnHeightBis * johnHeightBis);

console.log(bmiMarkBis , bmiJohnBis);

//coding challenge #2
if (bmiMark > bmiJohn) {
  console.log(`Marks BMI (${bmiMark})is higher than Johns(${bmiJohn})`);
} else {
  console.log(` John BMI (${bmiJohn})is higher than Marks(${bmiMark})`);
};



// test des string , numbers 
const inputYear = '1988';
console.log(inputYear);
console.log(Number(inputYear), inputYear);
console.log(inputYear + 18);
console.log(Number(inputYear)+18);
