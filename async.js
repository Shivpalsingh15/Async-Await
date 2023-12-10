/*
The async keyword in JavaScript is used to create asynchronous functions. An asynchronous function returns a promise, allowing you to work with asynchronous code in a more synchronous-like manner. The async keyword is used before the function declaration, and it enables the use of the await keyword within that function. */


async function greet(data){
    throw("error")
    return "hello";
}
greet()
  .then((result) => {
      console.log("done");
      console.log('result:', result)
  })
  .catch((error) => {
      console.log("Not done");
      console.log('error:', error)
  });


  /*
Absolutely, let's break it down in simpler terms:

The await keyword is used in JavaScript with an async function. When you mark a function as async, it means that it will always return a promise.

Now, when you use await inside an async function, it's like saying, "Hey, JavaScript, I'm going to wait for this operation to finish before moving on." It's a way to work with asynchronous code in a more readable and synchronous-like manner. */

function good(){
    console.log("0604")
}
 async function goodwill(){
    good()

 }
 goodwill();