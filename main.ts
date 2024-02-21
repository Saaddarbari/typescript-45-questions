// 2.PERSONAL MESSAGE.
// let firstName :string ='';
// firstName = prompt('What is your name?') || '';
// if (firstName !== null && firstName !== '') {
//     alert(`Hello ${firstName},would you like some Python today?`)
// }else{
//     alert('You have to fill your name !')
// }

// console.log("==== x ====".repeat(6))  

// // 3.NAME CASES.
// let personName : string = '';
// personName = prompt('What Is Your Name ?') || '';
// let lowerCase :string = personName.toLowerCase();
// let UpperCase :string = personName.toUpperCase();
// let titleCase :string = personName.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).
// toLowerCase()).join('')
// if (personName !== null && personName !== '') {
//     alert(`Hello ${personName},Here are your name in :
//  LowerCase:${lowerCase}
//  UpperCase:${UpperCase}    
//  titleCase:${titleCase}`)
// } else {
//     alert('Please fill your name !')
// }

// console.log("==== x ====".repeat(6))   

// 4.FAMOUS_QUOTES.
console.log('Imran Khan once said, “Absolutely Not.”');
console.log("==== x ====".repeat(6))  
// 
// 5.FAMOUS_QUOTES 2.
let famous_person :string = 'Albert Einstein';
let message :string = '“A person who never made a mistake never tried anything new.”';
console.log(`${famous_person} once said,${message}`);
console.log("==== x ====".repeat(6))  
// 
// 6.stripping_Names:
const personname:string = '\n\tSaad Darbari\t\n';
console.log(personname);
const without_whitespaces = personname.trim();
console.log(without_whitespaces);
console.log("==== x ====".repeat(6))  
// 
// 7.Number Eight:
let a = 10;
let b = 2;
console.log(a + b); // Addition
console.log(a - b);//Subtraction
console.log(a * b); //multiplication
console.log(a / b);// division
console.log("==== x ====".repeat(6))  
//
// 8.create four lines:
console.log(6  + 2); // Addition
console.log(10 - 2); //Subtraction
console.log(4  * 2); // multiplication
console.log(16 / 2); // division

console.log("==== x ====".repeat(6))  
//
// 9.Favorite Number:
let fav_num :number = 7;
let message2:string ='Here is your favourite number'+ fav_num;
console.log(message2);
console.log("==== x ====".repeat(6))  
// 
// 10.Adding Comments:
// Program 1:
//
// program wirtten by :SAAD
// current Date: 17-2-24

// This program will write Hello World:

console.log('Hello World');
//
// Program 2:
// program wirtten by :SAAD
// current Date: 17-2-24

// This program will Add Two digits:
console.log(2+2);
// 
console.log("==== x ====".repeat(6))  
//11.Names:
let names:string[] =['saad','saleem','ahmed','haider','raza'];

for(let i=0; i<names.length; i++){
   console.log(names[i]);
}
console.log("==== x ====".repeat(6))  
//
// 12.Greeting:
let NAMES:string[] =['saad','saleem','ahmed','haider','raza'];
const Message:string ='Welcome to Typescript class:'

for(let i=0; i<NAMES.length; i++){
    console.log(message + NAMES[i]);
}

console.log("==== x ====".repeat(6))  
// 13.Your own Array:
let transportation:string[] =['motocycle','Car','car Prado','Train'];
for(let i=0; i<transportation.length; i++){
    console.log('i would like to own a ' +transportation[i])
}

console.log("==== x ====".repeat(6))  
//14.Guests list:
let guests_list:string[] =['Ali','Salman','Hamza'];

for (let i = 0; i < guests_list.length; i++) {
    console.log('Dear Mr. ' + guests_list[i] + ',\n\n It is our pleasure to invite you in our party.\n\nThank you!')
} 
console.log("==== x ====".repeat(6))  
// 
// 15.Changing Guest List:
let absent_guests :string ='Ali';
let new_guests :string ='Junaid';
guests_list[0] = new_guests;

for (let i = 0; i < guests_list.length; i++) {
    console.log('Dear Mr. ' + guests_list[i] + ',\n\n It is our pleasure to invite you in our party.\n\nThank you!')
} 
console.log(`Mr.${absent_guests} is not coming to the party.`);

console.log("==== x ====".repeat(6))  
//
//16.More Guests:
console.log('Goods News! we find a big table so we are inviting 3 more guests.')
guests_list.unshift('Ahmed');
guests_list.splice(2, 0,'Haider');
guests_list.push('Osama');

for (let i = 0; i < guests_list.length; i++) {
    console.log('Dear Mr. ' + guests_list[i] + ',\n\n It is our pleasure to invite you in our party.\n\nThank you!')
} 

console.log("==== x ====".repeat(6))  
//
//17.Shrinking Guest List:
// sorry guest for not inviting
console.log('\nSorry we cant arrange big table ,only two people will be invited.');
// remove guest 
while(guests_list.length >2){
    let remove_guests = guests_list.pop();
    console.log(`Soory Mr.${remove_guests}, You are not invited for dinner`);
}
// remaining two guests invited
for (let i = 0; i < guests_list.length; i++) {
    console.log('Dear Mr. ' + guests_list[i] + ',\n\n You are still invited.\n\nThank you!')
} 
// remove guests from array
guests_list.splice(0 ,2);
console.log(guests_list);

console.log("==== x ====".repeat(6))  
//
// 18.seeing world:
//Store the locations in a array. Make sure the array is not in alphabetical order.
let places:string[] =['Italy','Canada','America','Dubai','Germany'];
// Print your array in its original order.
console.log('original ' + places);
// Print your array in alphabetical order without modifying the actual list.
console.log('copy ' + [...places].sort());
// Show that your array is still in its original order by printing it.
console.log('original ' + places);
// Print your array in reverse alphabetical order without changing the order of the original list.
console.log('copy ' + [...places].sort().reverse());
// Show that your array is still in its original order by printing it again
console.log('original ' + places);
// Reverse the order of your list. Print the array to show that its order has changed.
console.log('original ' + places.reverse());
//Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log('original ' + places.reverse());
//Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log('original ' + places.sort());
//Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log('original ' + places.sort().reverse());
//
console.log("==== x ====".repeat(6))  
//
//19.Dinner Guests:
// plz removed commentout for run this program line.109.
console.log(`${guests_list},peoples are invited to the dinner`); 

console.log("==== x ====".repeat(6))  
//
//20.own choice array:
let proglanguage:string[] = ['Python','Javacript','C++','Typecript','SQL'];
console.log(proglanguage);
console.log("==== x ====".repeat(6))   
//
//21.Typescript object:
let cities: {fullname:string, country:string, population:number} = {
        fullname: 'Pakistan',
        country: 'Karachi',
        population: 12345
};
console.log(cities);
console.log("==== x ====".repeat(6))  
//
//22.Intentional Error:
console.log(proglanguage[6]);
console.log(proglanguage[2]);
console.log("==== x ====".repeat(6))  
//
//23.Conditional Tests:
let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');

let mobile:string ='Iphone';
console.log("Is mobile == 'sumsung'? I predict False.");
console.log(car == 'sumsung');

let speaker:string = 'Audionic';
console.log("Is speaker !== 'Apple'? I predict True.");
console.log(car !== 'Apple');

let watch:string = 'Apple';
console.log("Is watch === 'Android'? I predict False.");
console.log(car === 'Android');

let bike:string = 'Honda';
console.log("Is Bike != 'Honda'? I predict True.");
console.log(car != 'Honda');

let lcd:string = 'sumsung';
console.log("Is lcd == 'Haier'? I predict False.");
console.log(lcd == 'Haier');

let country:string = 'Pakistan';
console.log("Is country !== 'Pakistan'? I predict True.");
console.log(car !== 'Pakistan');

let proglanguages:string = 'Typescript';
console.log("Is proglanguages == 'Javacsript'? I predict False.");
console.log(proglanguages == 'Javascript');

let shoes:string = 'Nike';
console.log("Is shoes === 'Nike'? I predict True.");
console.log(shoes === 'Nike');

let city:string = 'Karachi';
console.log("Is city == lahore? I predict false.");
console.log(city == 'lahore');

console.log("==== x ====".repeat(6))  
//
//24.More Conditional Tests:
let car1:string ='corolla';
let car2:string ='civic';
// Tests for equality and inequality with strings:
console.log('Is car1 equal to car2?')
console.log(car1 == car2);
console.log(car1 != car2);
// Tests using the lower case function:
let myname:string = 'SAAD';
let LowerCase:string = myname.toLowerCase();
console.log("Is myname in lower case equal to 'SAAD'?");
console.log(LowerCase == myname);
console.log(LowerCase != myname);
// Numerical tests:
let num1:number = 2;
let num2:number = 5;
console.log('Numerical test');
console.log(num1 < num2);
console.log(num1 > num2);
console.log(num1 === num2);
console.log(num1 !== num2);
console.log(num1 >= num2);
console.log(num1 <= num2);
// Tests using "and" and "or" operators:
let A:boolean = true;
let B:boolean = false;
console.log('Tests using "and" and "or" operators');
console.log(A && B);
console.log(A || B);
// Test whether an item is in an array:
let arr:string[] = ['1','2','3','4','5'];
console.log('Test whether an item is in an array');
console.log(arr.includes('3'));
console.log('Test whether an item is not in an array');
console.log(arr.includes('7'));
console.log("==== x ====".repeat(6))  
//
// //25. Alien colors #1:
let alien_Color:string = 'green';
if (alien_Color === 'green') {
    console.log("Player just earned 5 points!");
}

alien_Color = 'red';
if (alien_Color === 'green') {
    console.log("Player just earned 5 points!");
}
console.log("==== x ====".repeat(6))  
// // 26. Alien colors #2:
console.log('Alien color #2');
let alien_color = 'green';

if (alien_color === 'green') {
    console.log("Player just earned 5 points for shooting the alien!");
} else {
    console.log("Player just earned 10 points!");
}

alien_color = 'red';

if (alien_color === 'green') {
    console.log("Player just earned 5 points for shooting the alien!");
} else {
    console.log("Player just earned 10 points!");
}
console.log("==== x ====".repeat(6))  
//
// //27.Alien Colors #3: 
let Alien_color = 'green';

if (Alien_color === 'green') {
    console.log("Player earned 5 points.");
} else if (Alien_color === 'yellow') {
    console.log("Player earned 10 points.");
} else if (Alien_color === 'red') {
    console.log("Player earned 15 points.");
}
 Alien_color = 'red';

if (Alien_color === 'green') {
    console.log("Player earned 5 points.");
} else if (Alien_color === 'yellow') {
    console.log("Player earned 10 points.");
} else if (Alien_color === 'red') {
    console.log("Player earned 15 points.");
}

 Alien_color = 'yellow';

if (Alien_color === 'green') {
    console.log("Player earned 5 points.");
} else if (Alien_color === 'yellow') {
    console.log("Player earned 10 points.");
} else if (Alien_color === 'red') {
    console.log("Player earned 15 points.");
}

console.log("==== x ====".repeat(6))  
// //28.Stages of Life: 
let age:number = 5;

if (age < 2) {
    console.log("The person is a baby.");
} else if (age >= 2 && age < 4) {
    console.log("The person is a toddler.");
} else if (age >= 4 && age < 13) {
    console.log("The person is a kid.");
} else if (age >= 13 && age < 20) {
    console.log("The person is a teenager.");
} else if (age >= 20 && age < 65) {
    console.log("The person is an adult.");
} else {
    console.log("The person is an elder.");
}

console.log("==== x ====".repeat(6))  
//
// // 29.Favorite Fruit: 
let favourite_fruits:string[]= ['Apple','Mango','Banana'];

if (favourite_fruits.includes('Mango')) {
    console.log("You really like Mango!");
} 
if (favourite_fruits.includes('Apple')) {
    console.log("You really like apples!")
}
if (favourite_fruits.includes('Banana')) {
    console.log("You really like Banana!")
}
if (favourite_fruits.includes('Orange')) {
    console.log("You really like Orange!")
}
if (favourite_fruits.includes('strawberry')) {
    console.log("You really like strawberries!");
};
console.log("==== x ====".repeat(6))  
//
//30.Hello Admin:
let username:string[] = ['admin','Saad','Saleem','Ali','Raza'];
for(let i=0; i<username.length; i++){
  if (username[i]==='admin'){
    console.log("Hello admin, would you like to see a status report?")
} else {
    console.log(`Hello  ${username[i]} , thank you for logging in again.`)
}};
console.log("==== x ====".repeat(6))  

//
// // 31.No Users:
let userNames:string[] = [];

if (userNames.length === 0) {
    console.log("We need to find some users!");
} else {
    for (let i = 0; i < userNames.length; i++) {
        if (userNames[i] === 'admin') {
            console.log("Hello admin, would you like to see a status report?");
        } else {
            console.log(`Hello  ${userNames[i]} , thank you for logging in again.`);
        }
}}
console.log("==== x ====".repeat(6))  
//
// // 32.Checking Usernames:
let current_users:string[] = ['Saad','Saleem','Ali','Raza','Haider'];
let new_users:string[] = ['Saad','Ayan','Zain','Daniyal','Ali'];

for (let i = 0; i < new_users.length; i++) {
    let available = false;
    for (let j = 0; j < current_users.length; j++) {
        if (new_users[i].toLowerCase() === current_users[j].toLowerCase()) {
            available = true;
            break;
        }
    }
    if (available) {
        console.log(`Sorry, the username  '${new_users[i]} ' is not available. Please enter a new username.`);
    } else {
        console.log(`Congratulations, the username '  ${new_users[i]}  "' is available!`);
    }
}
console.log("==== x ====".repeat(6))  
//
// // 33.Ordinal Numbers:
let Numbers:number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < Numbers.length; i++) {
    let number = Numbers[i];
    let ending = '';
    if (number === 1) {
        ending = 'st';
    } else if (number === 2) {
        ending = 'nd';
    } else if (number === 3) {
        ending = 'rd';
    } else if (number === 4){
        ending = 'th';
    }else if (number === 5){
        ending = 'th';
    }else if (number === 6){
        ending = 'th';
    }else if (number === 7){
        ending = 'th';
    }else if (number === 8){
        ending = 'th';
    }else if (number === 9){
        ending = 'th';
    }else if (number === 10){
        ending = 'th';
    }
    console.log(number + ending);
}
console.log("==== x ====".repeat(6))  
//
// // 34.Pizzas:
let pizzas = ['ChickenFagita', 'cheese', 'BBQ Chicken'];

for (let i = 0; i < pizzas.length; i++) {
    console.log(`I like ${pizzas[i]} " pizza.`);
}
console.log("I really love pizza!");

console.log("==== x ====".repeat(6))  
// // 35.Animals:
let animal:string[] = ['Dog','Cat','Rabbit'];
for(let i=0; i < animal.length; i++){
  console.log(`A ${animal[i]} is a Good pet.`)
}
console.log("Any of these animals would make a great pet!"); 
console.log("==== x ====".repeat(6))  
// 
// //36.T-Shirt:
function make_shirt(size:string , message:string) {
    console.log(`"The shirt is size " ${size} " and it says: "${message}"`);
}

make_shirt('Medium', 'Nothing is Impossible!');
console.log("==== x ====".repeat(6))  
//
// //37.Large Shirts:
function make_shirt2(size = 'Large', message = 'I love TypeScript') {
    console.log(`Size of the shirt is:   "${size} " and it says:  "${message}"`);
}

// Large shirt with default message
make_shirt2();

// Medium shirt with default message
make_shirt2('Medium');

// Custom size shirt with custom message
make_shirt2('Small', 'I love Programming!');

console.log("==== x ====".repeat(6))  
// //38.Cities:
function describe_city(city:string, country = 'Pakistan') {
    console.log(`"${city} " is in  "${country}."`);
}
describe_city('Karachi');
describe_city('Lahore');
describe_city('Los Angeles','California');

console.log("==== x ====".repeat(6))  
// // 39.City Names:
function city_country(city:string, country:string) {
    console.log(`"${city} ","${country}."`);
}
city_country('Karachi','Pakistan');
city_country('Turkey','Istanbul');
city_country('Tokyo','Japan');

console.log("==== x ====".repeat(6))  
// //40.Album:
function makeAlbum(artist: string, title: string, tracks?: number): void {
    let Album: any = {artist: artist, title: title,};
    if (tracks) {
        Album.tracks = tracks;
    }
    return Album;
}

let album1 = makeAlbum("The Beatles", "Abbey Road",4);
let album2 = makeAlbum("Queen", "A Night at the Opera");
let album3 = makeAlbum("Nirvana", "Nevermind", 12);

console.log(album1);
console.log(album2);
console.log(album3);

console.log("==== x ====".repeat(6))  
//41.Magicians: 
let magicians: string[] = ["Merlin", "Houdini", "David Copperfield", "Penn & Teller"];

function showMagicians(magicians: string[]): void {
    for (let i of magicians) {
        console.log(i);
    }
}
showMagicians(magicians);
console.log("==== x ====".repeat(6))  
//
// //42.Great Magicians:
function GreatMagicians(magicians: string[]): void {
    for (let i of magicians) {
        console.log(`The great ${i}`);
    }
}
GreatMagicians(magicians);
console.log("==== x ====".repeat(6))  
//
// 43.Unchanged Magicians:
let greatMagicians: any = [];
function makeGreat2(magicians: string[]): any {
    
    for (let magician of magicians) {
        greatMagicians.push(`${magician} the Great`);
    }
    console.log(greatMagicians);
}

function showMagicians2(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}
// magicians = ["Harry Houdini", "David Blaine", "Criss Angel"];

greatMagicians = makeGreat2([...magicians]);

console.log (magicians);
console.log(greatMagicians);
console.log("==== x ====".repeat(6))  
// 44.sandwichs:
function Sandwich(...items: string[]): void {
    console.log("Making a sandwich with the following items:");
    for (let item of items) {
        console.log(`${item}`);
    }
    console.log("Enjoy your delicious sandwich!");
}

Sandwich("turkey", "cheddar", "lettuce", "tomato");
Sandwich("peanut butter", "jelly");
Sandwich("grilled cheese", "bacon");
console.log("==== x ====".repeat(6))  

// 45.Cars:
interface CarOptions {
    [key: string]: string | number;
}

function createCar(manufacturer: string, model: string, ...options: string[]): CarOptions {
    let car: CarOptions = {
        manufacturer: manufacturer,
        model: model
    };

    for (let i = 0; i < options.length; i += 2) {
        let key = options[i];
        let value = options[i + 1];
        car[key] = value;
    }

    return car;
}

let Car = createCar("Toyota", "Camry", "color", "blue", "year", '2022');
console.log(Car);
console.log("==== x ====".repeat(6))  
