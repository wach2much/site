// console.log('Hello');
// let age = 21;
// let name = "john";
// console.log(age);
// document.getElementById('p1').innerHTML = age;
// document.getElementById('p2').innerHTML = name;

// let username = window.prompt('Enter your name');
// console.log(username);
// let username;
// document.getElementById('mybutton').onclick = function (){
//     username = document.getElementById('mytext').value;
//     console.log(username); 
//     document.getElementById('mylabel').innerHTML = username;
// }

// let age = window.prompt('Enter your age');
// age = Number(age);
// age += 1;
// console.log(age);
// const PI = 3.141592653589793;

//floor function celing function abs = disctance from zero
// let x = 9.5
// x = Math.round(x);
// console.log(x);

// let a = window.prompt('Enter a');

// let b = window.prompt('Enter b');
// a, b = Number(a), Number(b); 
// let c = Math.pow(a, 2) + Math.pow(b, 2);
// c = Math.sqrt(c);
// window.alert("side c = " + c);

// document.getElementById('submit').onclick = function () {

//     let a = document.getElementById('atextbox').value;
//     let b = document.getElementById('btextbox').value;
//     a = Number(a);
//     b = Number(b);
//     a = Math.pow(a, 2)
//     b = Math.pow(b, 2)
//     let c = a + b;
//     c = Math.sqrt(c);
//     document.getElementById('clabel').innerHTML = "Side C = " + c;

// }
// let count = 0
// document.getElementById('r').onclick = function () {
//     count = 0;
//     document.getElementById('count').innerHTML = count;
// }
// document.getElementById('i').onclick = function () {
//     count += 1;
//     document.getElementById('count').innerHTML = count;
// }
// document.getElementById('d').onclick = function () {
//     count -=1;
//     document.getElementById('count').innerHTML = count;

// }


// let username = "bro";
// let letter = username.charAt(0).toUpperCase.trim();
// console.log(letter);

// let age = 21;
// if(age >= 18){
//     window.alert("You are eligible to vote");
// }
// else{
//     console.log("your a child")
// }

// let online = true;
// if(online){
//     console.log("online");
// }
// document.getElementById("button").onclick = function () {
//     const x = document.getElementById('box');
//     const c = document.getElementById('visa');
//     const v = document.getElementById('ideal');
//     const z = document.getElementById('paypal');
// if(x.checked) { 
//     console.log("checked");
// }
// else{
// console.log("not checked");
// }
// if (v.checked) {
//     console.log("ideal");
// }
// if (z.checked) {
//     console.log("paypal");
// }
// if (c.checked) {
//     console.log("visa");
// }
// else{
//     console.log("no payment options selected");
// }
// }

// let grade = 'F';


// switch(grade) {
//     case "A":
//         console.log("A");
//         break;
//     case "B":  
//         console.log("B");
//         break;
//     case "C":  
//         console.log("C");
//         break;
//     case "D":  
//         console.log("D");
//         break;
//     case "F": 
//         console.log("F");
//         break;
//     default:
//         console.log("put in a valid grade you fucking moron!!!");
//         break;
// }
// && = and. or = ||
// let temp = 15;
// if(temp > 0 && temp < 30) {
//     console.log("It is warm");
// }
// else {
//     console.log("It is cold");
// }
// ! is not operator
// let temp = 15;

// if(!(temp > 0)){

// }
// else{
//     confirm("You are not cool");
// }

// let username = "";

// while(username == "" || username == null){
//     username = window.prompt('Enter your name')
// }
// console.log("Hello", username);

// do{
//     username = window.prompt('Enter your name')
// }while(username == "" || username == null)

// console.log("Hello", username);


// for(let i = 12; i <= 100; i+=1){
//     console.log(i);
// }

//  for(let i = 0; i <= 20; i+=1){
//     if(i == 13){
//         break;
//     }
//     console.log(i);
//  }
// continue skips 1 itteration of the loop
// nested for loops

//  do{
//      username = window.prompt('Enter your name')
//     password = window.prompt('Enter your password: ');
//     email = window.prompt('Enter your email: ');
//  }while(username == "" || username == null)


// if(username == "admin"){
//     document.getElementById("hello").innerHTML = "Decoding...";
//     for(let i = 1; i <= 1000; i+=1){
//     }
// console.log(username);
// console.log(password);
// console.log(email);

// }
// accs = true;
// if(accs && password == "asm4xt" && username == "admin"){
//     console.log("Access granted");
//     document.getElementById("hello").innerHTML = username + " done";
// }

// else{
//     document.getElementById("hello").innerHTML = "Access denied";
// }

// let symbol = window.prompt('Enter a symbol');
// let rows = window.prompt('Enter the number of rows');
// let cols = window.prompt('Enter the number of columns');



// for(let i = 1; i <= rows; i+=1){
//     for(let j = 1; j <= cols; j+=1){
//         document.getElementById('tangel').innerHTML += symbol;
//         console.log(i, j);
//     }
//     document.getElementById('tangel').innerHTML += "<br>";
// }

//function
// function start(){
//     let user = window.prompt('Enter your name');
//     let age = window.prompt('Enter your age');
//     repeat(user, age);
// }

// function repeat(user, age){	
//     console.log("sup" + user + "you are" + age + "years old");
// }

// area = window.prompt('Enter the area');
// width =  window.prompt('Enter the width');

// console.log(result);

// function repeat(width, area){
//     let result = width * area;
//     return result; 
// }

// let check = check(21);

// function check(age){

//     return age >= 18 ? true : false;
// }

// var does not exist outside of function
// var = global variable kinda

// for(var i = 1; i <= 4; i+=1){
//     console.log(i);
// }
// console.log(i);


//template literals

// let user = "bro";
// let items = 76;
// let total = 600

// console.log(`hello
//  ${user}`);


// let number = 10.23;
// number = number.toLocaleString("en-US", {style: "currency", currency: "USD"});
// works with percentages kinda style = percentage
// "unit", unit: celcius
// locale = local browser

// const awnser = Math.floor(Math.random() * 10 + 1);
// let guess = 0;
// document.getElementById("guess").onclick = function (){
//     let guess = document.getElementById("guess").value

//     if(guess == awnser) {
//         alert("You are correct");
//     }
// }



// document.getElementById().onclick = function( ){
//     let temp;
//     if(document.getElementById("fbutton").cheked){
//         temp = document.getElementById("textbox").value;
//         temp = Number(temp)
//         temp =  toAmerican(temp)
//         document.getElementById("laber").innerHTML = temp + "degrees farenheit"
//     }
//     else if(document.getElementById("fbutton").cheked){
//         temp = document.getElementById("textbox").value;
//         temp = Number(temp)
//         temp =  toCelscius(temp)
//         document.getElementById("laber").innerHTML = temp + "degrees celcuis"
//     }
//     else{
//         document.getElementById("laber").innerHTML = "select unit"
//     }
// }

// function toCelscius(temp){
//     return(temp -32 * (5/9))
// }

// function toAmerican(temp){
//     return temp * 9 / 5 + 32;
// }
// let fruits = ["apple", "orange"]
//  fruits[0] = "bannana"
// fruits.push("banana");
// fruits.pop();
// fruits.unshift("mango"); add alement at index 0 
// fruits.shift(); removes element from index 0 
// console.log(fruits[0])

// let prices = [5, 10, 15, 20];

// for(let i = 0; i < prices.length; i += 1){
//     console.log(prices[i])
// }

// for(let price of prices){
//     console.log(price)
// }

// let fruits = ["apple", "orange", "mango"]
// fruits = fruits.sort().reverse()
// for(let fruit of fruits){
//     console.log(fruit);
// }

// let fruit = [];
// let meat = [];

// let list = [fruit, meat];

// list[0][1];
// index = 1
// if(index == 1){
//     console.log(list[0])

// }


// eco = ["kkdka", "hjhdkjah"]
// for(i = 0; i < 5; i += 1){
//     console.log(eco[0])
// }
// ... spread operator
// let numbers = [0, 2, 4, 6, 7,9]

// let max = Math.max(...numbers)
// console.log(max)

// let class1 = [2, 4]
// let class2 = [6, 8]
// class1.push(...class2);
// console.log(...class1)

// rest peramiter

// let a = 2;
// let b = 3;
// let c = 4;

// console.log(sum(a, b, c))

// function sum(...numbers){
//     let total = 0 
//     for(let numer of numbers){
//         total += number
//     }
//     return total
// }
