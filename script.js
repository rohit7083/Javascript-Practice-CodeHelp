// let sentence = "Hello world my world";
// const newsent = sentence.split(" ")
// console.log(newsent);

// let newsent2 = newsent.join(",")
// console.log(newsent2)


// // functions and arrow functions

// function myfunc() {
//   for (let i = 0; i < 10; i++) {
//     console.log(i)
//   }
// }
// myfunc()

// function getSum(a, b, c) {
//   let sum = a + b + c;
//   // return sum;
//   console.log(sum)
// }

// // let ans = getSum(1, 2, 3)
// // console.log(ans)
// getSum(1, 3, 3)


// function getmultiplication(a,b){
//   return a*b;
// }
// let ans=getmultiplication(2,15)
// console.log(ans )


// arrow function --------------------------

// const myarro = () => {
//   console.log("hellow ")
// }


// myarro()


// Object ----------------------
// const obj={
//   name:"rahul",
//   age:25,
//   city:"pune",
//   greet:function (){
//     let name2="mayur";
//   console.log("this is the function in object ", name2);
//   }

// }

// console.log(obj)
// obj.greet();



// ========== Aarray ==============

// let arr=[1,2,3,4,5,6,7,8,9,10]
// console.log(arr)


// -=========== array constructor ================


// let brr = new Array("love", 5, true)
// console.log(brr)

// brr.push("rohit");
// console.log(brr)

// brr.pop("rohit");
// console.log(brr)

// =============== delete the left item
// brr.shift()
// console.log(brr)

//============= insert the right item
// brr.unshift("myunshift")
// brr.push(200)
// brr.push(500)
// console.log(brr.slice(1,2))

// brr.splice(1,0,"Bhai bhai")
// // add-remove-text
// console.log(brr)

// =========== map function ==============

// const myMaparr=brr.map((Number) =>{
//   return Number*Number;
// })

// console.log(myMaparr);


//index for the position
// brr.map((Number, index) => {
//   console.log(Number)
//   console.log(index)
// })


// =========== filter in javascript ===============

// ========== find odd using filter =====

// let arr3=[1,2,3,4,5,6,7,8,9,10]
// let evenArr=arr3.filter((Number)=>{
//   if(Number % 2 == 0){
//     return true;
//     // console.log(Number)
//   }
//   else{
//     return false;
//   }
// })

// console.log(evenArr);

// ========== even using filter ========

// const oddnumb=arr3.filter((Number)=>{
//   if(Number %2!=0){
//     return true;
//   }
//   else {
//     return false;
//   }
// })

// console.log(oddnumb)


// ============ find the string from arraay

// let arr4 = [5, 10, "rohit", "mahur", true, "name"]

// const findstr = arr4.filter((value) => {
//   if (typeof (value) == "string") {
//     return true;
//   }
//   else {
//     return false;
//   }
// })
// console.log(findstr)

// ========= find the number from string ======

// const findNum = arr4.filter((num) => {
//   if (typeof (num) == "number") {
//     return true;

//   }
//   else {
//     return false;
//   }
// })

// console.log(findNum)


// ======== introduction of reduce in javascript =======

// let arr5 = [10,50,60,70,80,40,20,5,1,0]

// const ans = arr5.reduce((acc, curr) => {
//   return acc * +curr;
//this will give me the sum of the array
//  acc start from 0 and curr start from 1 index and addition will be added in acc
// })

// console.log(ans);

// ============ sorted data ==========
let arr5 = [9, 1, 7, 4, 2, 8]

// const ans = arr5.sort();

// console.log(ans)

// console.log(ans.reverse())

// ==== index of===

// console.log(arr5.indexOf(7))

// ======= find method =======
// const found = arr5.find(num => num > 3)

// console.log(found)


// ====== for each method ======


// the base  of for each method (old method)
// const temp=(arr)=>{
//   for(let index=0 ;i<arr.length;i++ ){
//  console.log(arr[i],index)
//   }
// }

// === new method
// let mrr = [10, 30, 50, 20, 40]
// mrr.forEach((value, index) => {
//   console.log("number:", value + "index:", index);
// })


// const obj={
//   name:"rohan",
//   age:52,
//   city:"pune ",
//   " my state":"maharstra"
// }

// for(key in obj){
//   console.log(key)
// }

// let obj2 = [10, 20, 30, 50, 5]
// for (value of obj2) {
//   console.log(value)
// }

// let str = "bababr"
// for (val of str) {
//   console.log(val)
// }

// ========== for each loop ======== 11/11/2024

// let arr = [10, 20, 30, 40, 50]

// let getSum=(arr)=>{
//   let sum=0;
//   arr.forEach((value)=>{
//     sum=sum+value;
//   })

//     return sum;

// }

// const totallsum=getSum(arr)
// console.log(totallsum)



// ======== Variable/Function Hoisting && Function Calls in JS ===

// function greetMe(greet,fname){
//   console.log("hello", fname);
//   greet();
// }

// function greet(){
//   console.log("greeting for the day")
// }

// greetMe(greet,"Roihit")

// function solve(num){
//   return function (num){
//     return num*num;
//   }
// }

// let ans=solve(5);
// let finalans=ans(10);
// console.log(finalans)


// ==== temporal dead zhone ===========

// console.log(marks);
// console.log("marks");
// console.log("lvie");
// const marks = 10;
// console.log(marks);

// ======== classes in javascript ===========

// class Human {
//   //properties
//   // age=13; // public
//   age;   // declear again for the constructor
//   #wg = 56; // private
//   ht = 5;

//   //constructor
//   constructor(newAge, newHt) {
//     this.age = newAge;
//     this.ht = newHt;

//   }

//   // behivour
//   walking() {
//     console.log("i am walking", this.#wg)
//   }

//   running() {
//     console.log("i am running");
//   }


//   // getter and setter
//   getFetchWeight() {
//     return this.#wg
//   }

//   setModifyWeight() {
//     this.#wg = val;
//   }
// }

// let obj = new Human(55, 100);
// console.log(obj.ht);
// console.log(obj.getFetchWeight())
// obj.walking();


// ========== default parameter =============

// function myfunc(name='defualt name like john'){
//   return name;
// }

// console.log(myfunc("prem"))


// ====== inbuilt function =========

let curr = new Date();

let date = new Date('June 20 1998 07:15');

let newDate = new Date(1998, 5, 20, 7);

// console.log( newDate );


// console.log(newDate.setFullYear(2001));

// console.log(curr)

// console.log("babbar");

// console.log(Math.PI);

// console.log(Math.max(60,30,24,600,712,89));

// console.log(Math.min(60,30,24,600,712,89));

// console.log(Math.round(1.4));


// console.log(Math.ceil(1.1));

// console.log(Math.abs(-5));

// console.log(Math.random());

// console.log(Math.sqrt(5));

// console.log(Math.pow(2,10));


// ===== Object Cloning && Garbage Collector in JS   12/11 === ========
// object cloning => 
// 1. spread operator
// 2.asigne method
// 3.iterations 


let src = {
  age: 54,
  name: "nana",
  city: "goa",
  lang: "marthi"
}
// let src2 = {
//   value: 504,
//   name: "mama",
// }

// method 2

// let dest=Object.assign({},src)

// src.age=909;
// console.log(src)
// console.log(dest)

// method 1
// let dest = { ...src } //object cloning
// src.age=99;
// console.log(src)
// console.log(dest)


// method 3
// let dest = {}
// //cloning using iteration
// for (let key in src) {
//   let newKey = key;
//   let newvalue = src[key];
//   //insert new key and value in dest and create a clone 
//   dest[newKey] = newvalue;
// }

// src.age = 2;
// console.log(src)
// console.log(dest)

// ===============  Error Handling in JS ===== 13/11/2024 =======

// try{
//   console.log(x);
// }
// catch(err){
//   console.log(err)
//   throw new Error("hi bhau this is the error");
// }



// ========DOM manipulation==============

// let myDiv=document.querySelector('.demo');

// let myelement=document.createElement('h1');

// myelement.textContent='Love Babber';

// myDiv.insertAdjacentElement('beforebegin',myelement);

// === remove In Dom ========

// let parent=document.querySelector('.demo');


// let chaild= document.querySelector('.para');
// parent.removeChild(chaild);

// =========== add css In Dom manipulations ==========

// let fetch = document.querySelector('.para');
// console.log(fetch)

// console.log(fetch.style)

// // fetch.style.backgroundColor="blue" ;
// fetch.style.cssText="color:red ; background-color:gray" ;

// =========== IN Build methods for  objects



// const obj = {
//   name: "Mahesh",
//   city: "pune",
//   age: 20,
// }

// console.log(obj)
// delete obj.city;
// let info=Object.entries(obj);

// Object.values(obj).forEach(value=>{ // display  values of object in normal form
//   console.log(value)

// })

// console.log(Object.values(obj)) //display the value of the object in array format


// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }


// let sum=0;
// let tot=Object.values(salaries);
// tot.forEach(value=>{
//   sum=sum+value;
// })
// console.log(sum)


let obj = {
  width: 200,
  height: 300,
  title: "My menu"
};

// function multiplyNumeric(obj) {
//   for (let key in obj) {
//     if (typeof obj[key] == 'number') {
//       obj[key] *= 2;
//     }
//   }
// }

// multiplyNumeric(obj);

// console.log(obj);

// function myfunc() {
//   for (let key in obj) {
//     if (typeof (obj[key]) === "number") {
//       obj[key] = obj[key] * 2;
//     }
//   }
//   console.log(obj)

// }
// myfunc();


// for (let key in obj) {
//   console.log(key, ":", obj[key])
// }





// ==============================================
// // Initialize an object with properties and methods
// const job = {
//     position: 'cashier',
//     type: 'hourly',
//     isAvailable: true,
//     showDetails() {
//         const accepting = this.isAvailable ? 'is accepting applications' : "is not currently accepting applications";

//         console.log(`The ${this.position} position is ${this.type} and ${accepting}.`);
//     }
// };

// // Use Object.create to pass properties
// const barista = Object.create(job);

// barista.position = "barista";
// barista.showDetails();


// ====== practice Object.Create

// const obj={
//   name:"Rohi",
//   city:"pune",
//   state:"mh",
//   greet(){
//     console.log(`name is ${this.name} and the he is from ${this.city}`);
//   }
// }

// console.log(obj)

// let newobj=Object.create(obj);
// newobj.city="nashik";
// console.log(obj);
// newobj.greet();

// =====  values and key  are the also object ========

// =====  Entries object ========

// Initialize an object
// const operatingSystem = {
//     name: 'Ubuntu',
//     version: 18.04,
//     license: 'Open Source'
// };

// // Get the object key/value pairs
// const entries = Object.entries(operatingSystem);

// console.log(entries);


// ===== Pratcice Object.entries =====

// const obj={
//   name:"Rohi",
//   city:"pune",
//   state:"mh"
// }
// // console.log(Object.entries(obj))


// // ===
// let duplicate = Object.entries(obj);
// duplicate.forEach(data =>{
//   console.log(data)
// })


// ============ object .asigne ========
// Initialize an object
// const name = {
//     firstName: 'Philip',
//     lastName: 'Fry'
// };

// // Initialize another object
// const details = {
//     job: 'Delivery Boy',
//     employer: 'Planet Express'
// };

// // Merge the objects
// const character = Object.assign(name, details);

// console.log(character);


// // ====== you can also do this using spread operator==

// // Initialize an object
// const name = {
//     firstName: 'Philip',
//     lastName: 'Fry'
// };

// // Initialize another object
// const details = {
//     job: 'Delivery Boy',
//     employer: 'Planet Express'
// };

// // Merge the object with the spread operator
// const character = {...name, ...details}

// console.log(character);

// ============ Object.freez ========

// // Initialize an object
// const user = {
//   username: 'AzureDiamond',
//   password: 'hunter2'
// };

// // Freeze the object
// const newUser = Object.freeze(user);

// newUser.password = 'this is my new password';
// newUser.active = true;

// console.log(newUser);


// ======= Object.seal =========

// Initialize an object
// const user = {
//   username: 'AzureDiamond',
//   password: 'hunter2'
// };

// // Seal the object
// const newUser = Object.seal(user);

// newUser.password = '*******';
// newUser.active = true;

// console.log(newUser);


// ============  getPrototypeOf ===========

// const employees = ['Ron', 'April', 'Andy', 'Leslie'];

// console.log(
//  Object.getPrototypeOf(employees));

// ========= All about Events & Listeners in JS ==============

// function changeText() {
//   let myhead = document.getElementById('myid');
//   myhead.textContent = " hello doremon";
// }

// let myhead = document.getElementById("myid");
// myhead.addEventListener('click', changeText);

function chnagemytext()
{
let func=document.getElementById("myid")
func.textContent="hello sujixa";
}

let func=document.getElementById("myid")
func.addEventListener('click',chnagemytext)


// remove event listner

// myhead.removeEventListener('click',changeText);

// ==============================================
// let achorelement=document.getElementById('myid')
// achorelement.addEventListener('click', function(event){
//   event.preventDefault();
//   achorelement.textContent="this is gaibo ka anchertag";
// })


// ================ Performance: Reflow && Repaint in JS ==============================


// const t1 = performance.now();

// for (let i = 1; i <= 100; i++) {
//   // Create a new <p> element
//   let newp = document.createElement('p');

//   // Set the text content of the new <p> element
//   newp.textContent = "This is para " + i;

//   // Append the new <p> element to the body
//   document.body.appendChild(newp);
// }

// const t2 = performance.now();
// // console.log(t2)
// console.log("Total Time by code 1 :", (t2 - t1))


// //==== code 2 
// const t3 = performance.now();

// let mydiv = document.createElement('div')
// for (let i = 1; i <= 100; i++) {
//   // Create a new <p> element
//   let newp = document.createElement('p');

//   // Set the text content of the new <p> element
//   newp.textContent = "This is para " + i;

//   // Append the new <p> element to the body
//   document.body.appendChild(newp);
// }
// document.body.appendChild(mydiv)

// const t4 = performance.now();
// console.log("Total Time by code 2 :", (t4 - t3))


// ====

// let fragment = document.createDocumentFragment();
// for (let i = 1; i < 100; i++) {
//   let newp = document.createElement('h6')
//   newp.textContent = "i am" + i * 100;
//   // no reflow and repaint for the below line 
//   fragment.appendChild(newp);
// }

// //below line will takes 1 reflow  and 1 repaint
// document.body.appendChild(fragment);

// ============= Promises ==========
 

// let firstPromise=new Promise((resolve, reject)=>{
//   console.log("Babber");
//   reject(new Error("interna server error"))
// });
// =======
// let firstPromise=new Promise((resolve, reject)=>{
// setTimeout(function sayname(){
//   console.log("My name is shiv")
// },10000);
// resolve(1);
// })

// ======

// let promise1= new Promise((resolve,reject)=>{
//   let success=true;
//   if(success){
//     resolve("Promises Fulfilled");

//   }
//   else{
//     reject("proomise rejected");
//   }
// })

// promise1.then((message)=>{
//   console.log("first msz:=" +message);
//   return "promises fullfilled second message";
// }).then((message)=>{
//   console.log("second msz:=="+message);
//   return "promises fullfilled third message";
  
// }).then((message)=>{
//   console.log("third message:=" +message);
  
// }).catch((error)=>{
//   console.log(error);
  
// }).finally((message)=>{
//   console.log("i am finally block");
  
// })

// ========

// let promise1=new Promise((resolve,reject)=>{
//   setTimeout(resolve,1000,"first");
// })
// let promise2=new Promise((resolve,reject)=>{
//   setTimeout(resolve,2000,"second");
// })
// let promise3=new Promise((resolve,reject)=>{
//   setTimeout(reject,4000,"Third");
// })

// Promise.all([promise1,promise2,promise3])
// .then((values)=>{
//   console.log(values);
  
// }).catch((error)=>{
//   console.log("error"+error);
  
// })

// ===================


// async function getData() {
//   setTimeout(() => {
//     console.log("im inside the set timeout block")
//   }, 3000);
// }
// getData();

// ========  

// async function getdata() {
//   let response=await fetch('https://jsonplaceholder.typicode.com/todos/1');
//   let data= await response.json();
//   console.log(data);
// }
// getdata();
 

// ============ insert data

// const myHeaders=new Headers();
// myHeaders.append("Content-Type","application/json");

// const url="https://jsonplaceholder.typicode.com/posts";

// const options ={
//   method:"POST",
//   body:JSON.stringify({username:"Mauresh vanjale"}),
//   headers:myHeaders,
// };

// async function postData(){
//   const response=await fetch(url,options);
//   let data=await response.json();
//   console.log("Post data response :" , data)
// }


// async function processData(){
//   await postData();
// // await getData();
// }

// processData();

// ============= clouser in  javascript ===============

// let name="manish";
// function outerFunction(){
//   let name="mahersh"; //let -> block scoped

//   function innerFunction(){
//     let name="ROhit"
//     console.log(name);
    
//   }

//   innerFunction();
// }

// outerFunction();



// ============================== Excersice practice ==============================

// let a = prompt("First number?", 1);
// let b = prompt("Second number?", 2);


// a=Number(a);
// b=Number(b);

// console.log(a + b); // 12

// alert(+a+ +b) //method 2

// ===== method 3 

// let a = +prompt("First number?", 1);
// let b = +prompt("Second number?", 2);

// alert(a + b); // 3
// ====
// let age = prompt('age?', 18);

// let message = 
//   (age < 3) ? 'Hi, baby!' :
//   (age < 18) ? 'Hello!' :
//   (age < 100) ? 'Greetings!' :
//   'What an unusual age!';


// console.log( message );
// ======
// let a=5;b=1;
// let result = (a+b<4) ? "below" : "over" ;
// console.log(result);

// ======
// let login="director";
// let message=(login=="employee")? "hello":
//            (login=='director')?"greeting":
//            (login=='')?'no login':"error";

//            console.log(message);
           
// ========
// let man=prompt(("who is there ?"));

//  if(man=="admin"){
//   let pass=prompt("enter Your pass:");
//   if (pass=="themaster") {
//     console.log("Wellcome bro wellcomme");
//   }
//   else {
//     console.log("get out from here nallla")
//   }
 
// }
// else {
//   console.log("i dont know you");
  
// }

// =======
// function checkAge(age){
//  return (age>18) ? true: confirm("below age not aloowed");
// }

// checkAge(5);
// ===========


// function myfunc(num){
//   return num**num;
// }

// console.log( myfunc(2));
