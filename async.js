/*
The async keyword in JavaScript is used to create asynchronous functions. An asynchronous function returns a promise, allowing you to work with asynchronous code in a more synchronous-like manner. The async keyword is used before the function declaration, and it enables the use of the await keyword within that function. */

const { log } = require("async");



async function greet(){
    
    return "Hii";
}

greet()
  .then((res) =>  {console.log(res)})
  .catch((err) => {console.log(err)});

// function num(){
//     return new Promise((res, rej)=>{

//         setTimeout(()=>{
//             let num = Math.floor(Math.random() *10) +1;
//             console.log('num:', num)
//             res()
        
//         }, 1000)
//     })
// }
// async function demo() {
//     await num()
//     await num()
//     await num()
//     await num()
// }



















// async function greet(data){
//     throw("error")
//     return "hello";
// }
// greet()
//   .then((result) => {
//       console.log("done");
//       console.log('result:', result)
//   })
//   .catch((error) => {
//       console.log("Not done");
//       console.log('error:', error)
//   });


  /*
Absolutely, let's break it down in simpler terms:

The await keyword is used in JavaScript with an async function. When you mark a function as async, it means that it will always return a promise.

Now, when you use await inside an async function, it's like saying, "Hey, JavaScript, I'm going to wait for this operation to finish before moving on." It's a way to work with asynchronous code in a more readable and synchronous-like manner. */

// function good(){
//     console.log("0604")
// }
//  async function goodwill(){
//     good()

//  }
//  goodwill();

 /*what are Api?
 API stands for Application Programming Interface. It is a set of rules and tools that allows different software applications to communicate with each other. APIs define the methods and data formats that applications can use to request and exchange information. */

//  weather: https://api.weather.com/current_conditions/v1/location

// let url = "https://v2.jokeapi.dev/joke/Any?safe-mode";

// async function api(){
//     let res = await fetch(url)
//     let data =await  res.json()
//     console.log('data:', data)
// }

// api()


