// outputting data
// alert("hello world")
// document.write("welcome to javascript class")
// window.confirm("are you sure you want to delete this")

// syntax used to set variables
// let
// const
// var

// let myNamE = 40;
// let myName = 10;
// console.log(++myNamE);
// variable is like a container to store data
// avoid keywords
// you cant start with numbers and some characters except underscore
// use  camel casing

// let x = 10;
// let _name= "john";
// let lastName = "doe";

// creation of pprogram using prompt, parseint, parsefloat
// let myName = prompt("Enter your name")
// console.log(myName);
// alert(myName)

// let num1 = 10;
// console.log(num1)
// let x = parseint(prompt("Enter your first number"));
// console.log(x)

// let _myName = prompt("Brian");
// console.log(ourName)

// let  myfood = prompt("rice & chicken");
// alert(myfood);
// document.write(myfood);

// let tunde = prompt("Enter your name");
// window.confirm("Are you sure you   want to delete '+tunde");

// concartination is the process of joining two variables together

// let firstName = 'john';
// let lastName  = 'Doe';

// console.log('my naame is'+ '' +firstName+ '' + lastName+ ''+ 'and   i currently live iin USA');
// console.log(firstName, lastName);

// contination with template litrals

// console.log(' my name is ${firstName} ${lastName} and i currently live in USA');

// let firstNumber = parseint(prompt('Enter your first number'));
// let secondNumber = parseint(prompt('Enter your second number'));
// let lastNumber = parseint(prompt('Enter your third number'));
// console.log('${firstNumber} + ${secondNumber} +{thirdNumber} = ${firstNumber+secondNumber+thirdNumber}');

// data types

// Number
// let num1 = 10;
// console.log(num1.toPrecision(4))
// console.log(num1.tofixed(4))
// --num1
// console.log(num1)
// console.log(typesof(num1));

// tenary operator
// console.log(num1 > 10 ? )





// strings daatatypes these are alpha numeric Data;
// let yourName = 'John Doe lives in'
// let address= "47, Herberty macauly road, Off 'university' Road, Akoka Yaba, Lagos State";
// console.log(address.slice(0,12));
// console.log(address.length);
// console.log(address.lastIndexOf('e'));
// console.log(address.replace('Lagos', 'Ogun'));
// console.log(address.toLowerCase());
// console.log(address.toUpperCase());
// console.log(yourName.concat(address));
// console.log(address.includes('Road'));
// console.log(address.endsWith('e'));
// console.log(address.startswith('4'));
// console.log(address.trim());
// console.log(address.substring('10'));
// let x = address.split('')
// console.log(x,reverse('').join(''));
// x.pop();
// x.shift();
// x.reverse();
// x.splice(2, 0, 'welcome');
// x[2]='yellow'
// console.log(x);
// console.log(typeof(address));

// array datatypes this is listing out various of item in  a square bracket;

// let colors = ['blue', 'orange', 'purple', 'gold']


// object datatypesis a key and value pair datatype

// let  person = {
//   name:'Emeka Obinna'
//   state:'Abia'      
//   occupation:'Devops Developer'
// };
// console.log(person['name']);

// booolean datatype a true or false datatype
// let tunde= false;
// console.log(tunde ? 'yrs':'no');
// console.log(typeof(tunde));

// comparison operator;
// console.log(num1 > num2);
// console.log(num1 < num2);
// console.log(num1 >= num2);
// console.log(num1 <= num2);
// console.log(num1 != num2);
// console.log(num1 !== num2);
// console.log(num1 == num2);
// console.log(num1 === num2);

// arithmetic operator
// console.log(num1 + num2);
// console.log(num1 - num2);
// console.log(num1 += num2);
// console.log(num1 -= num2);
// console.log(num1 * num2);
// console.log(num1 / num2);
// console.log(num1 % num2);
// console.log(num1 ** num2);
// console.log(++num1);
// console.log(--num1);

// logicall  operator &&|| ;
// let age = 10
// let country = 'Nigeria';

// if( age >= 18&&   country == 'Nigeria'){
//   console.log('you can vote')
// }else{
//   console.log('you cannot vote')
// };

// let score = prompt('Enter your score').toUpperCase();

// if (score =='A'){
//   console.log('Excellent')
// }else if(score == 'B'){
//   console.log('second grade')
// }else if (score == 'c'){
//   console.log('Grade')
// }else{
//   console.log('Unknown Result')
// }

// switch (true){
//   case score == 'A':
//     console.log('Excellent')
//     break;
//     case score =='B'
//     console.log('second grade')
//     break;
//     case score == 'c'
//     console.log('third grade')
//     break
//     default:
//     console.log('Invalid Entry')
// }
// function tunde () {
//   console.log('Good morning');
// }
// tunde();

// function myclass(x, y){
// return `${x} good morning`
// return x ** y
// }

// let myplus = (a, b) => {
//   return a * b
// }
// console.log(myplus(10, 20))

// let mypower = (x) => {
//   return x** 2
// }
// console.log(mypower(10));
// // higher order functions
// let score = [10, 26, 30, 32, 39, 52, 21, 90];
// console.log(score.filter((x) => x % 2 == 0));
// console.log(score.reduce((x,y) => x + y));
let myname = document.getElementById
const getApi = async() => {
  let response = await fetch('https://jsonplaceholder.typicode.com/users')
  let data = await response.json();
  console.log(data);

  myname.innerHTML = data.map((x) => {
    return(
      `
      <h1>${x.title}</h1>
      <p>${x.body}</p>
      `
    )
  }).join(' ')
}
getApi();


