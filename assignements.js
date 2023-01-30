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
console.log(typeof NaN);
console.log(typeof inputYear);

// coding challenge #3

//const random = Math.trunc(Math.random(koalas ))

const koalasArray = [1,2,79];    // ou ds ce cas plus simple const tableau =  (1 + 2 +79 / 3 ) et on a la moyenne du tableau 
const dolphinArray = [1,2,79];

// additions de chaque tableau pr voir le vainqueur 
let resultKoalasArray = koalasArray.reduce((a,b) => {
  return a + b ; 
});
console.log(resultKoalasArray);

let resultDolphinArray = dolphinArray.reduce((a,b) => {
  return a + b ; 
});
console.log(resultDolphinArray);

// condition message apres les resultats
  if (resultDolphinArray > resultKoalasArray ) {
    console.log('U are the Winner of the competition Dolphin !!!');
    //verifie seulement resultDolphinArray + que 100 car Koalas le sera automatiquement si la condition draw est verifier 
} else if (resultDolphinArray == resultKoalasArray && resultDolphinArray >= 100 ) {
    console.log(' wow thats a draw ! ');
} else if(resultDolphinArray && resultKoalasArray < 100) {
  console.log("No Winner , U are below 100 ! (");

} else {
console.log(' u are the winner Koalas super ! ');
}


 
// SWITCH statement -> good to make comparison 

const day = 'monday';

 switch (day) {
  case 'monday':   // day === monday 
    console.log('we are Monday , i plan my course structure');
  break; // tjrs mettre sinon le code va afficher tout les log de la semaine , le bloc va tre executer en entier 
  case 'tuesday':
    console.log('we are tuesday, i plan other stuff');
    break;
    case 'wednesday':
      console.log('bkabkbabkjabak wednesday');
    case 'thursday' :
      console.log('i love to code on thursday');
      break;
    case 'friday' :
      console.log('i love to code on friday');
      break;
    case 'saturday' :
      console.log('i love to code on saturday');
    case 'sunday' :
      console.log('i love to code on sunday');
      break;
      default:
        console.log("its not a valid day ");
 }

// Coding Challenge https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648197?start=555#content
// same than the switch case Up 

 const dayBis = 'monday';
 if (dayBis === 'monday') {
  console.log('we are monday thats such a great day !');
  
 } else if ( dayBis == 'tuesday') {
  console.log('we arent monday , we are tuesday' );
 } else if (dayBis == 'wednesday' || dayBis == 'thursday') {
  console.log('I love the code on wednesday and thursday');
 } else if (dayBis == 'friday') {
  console.log('we are friday');
 } else if ( dayBis == 'saturday' || dayBis == 'sunday') {
  console.log('I love the Week end');
 } else {
  console.log('invalid day name');
 }




 // Ternaire , plus simple qu un if else parfois exemple below : 
 //TERNAIRE
 const ageSimple = 17;
 const drink2 = ageSimple >= 18 ? 'Wine' : 'Water';    // ceci est une expression car il y a un resultat a la fin  , et ca ne fait qu'une seule ligne de code
 console.log(drink2);

// AVEC LE IF/ELSE 

let drink3;
if (ageSimple >= 18) {
  drink3 = 'Wine';
}else {
  drink3 = 'Water';
}
// 4 ligne de codes , avec le ternaire une seule ligne de code 
console.log(drink3);