/*
1. What state will this promise be in after 0 seconds?

const examplePromise = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout( () => resolve('success'), 3000);
    } else {
      setTimeout( () => resolve('failed'), 5000);
    }
  });
};

answer: Pending

2. What will be printed to the console after running the code provided?

let link = state => {
  return new Promise(function(resolve, reject) {
    if (state) { 
      resolve('success'); 
    } else { 
      reject('error');
    }
  });
}

let promiseChain = link(true);

promiseChain
.then( data => {  
   console.log(data + " 1");
   return link(true);
})
.then( data => {
   console.log(data+ " 2");
   return link(true);
});

answer: success 1
        success 2

3.  What is value of the argument that is passed to the onReject()?

let onFulfill = value => {console.log(value)};
let onReject = reason => {console.log(reason)};

const promise =  new Promise( (resolve, reject) => {
  if (false) {
    resolve('success value');
  } else {
    reject();
  }
});

promise.then(onFulfill, onReject);

a. 'success value' -wrong. onRect(0 excepts a reason value that is passed as an arguement when reject() is called
b. reason- wrong name of parameter for onReject()
c.  undefined

4. True or False: promise1 and promise2 both produce the same output.

const examplePromise1 = new Promise((resolve, reject) => { reject('Uh-oh!') });
const examplePromise2 = new Promise((resolve, reject) => { reject('Uh-oh!') });

const onFulfill = value => {console.log(value)};
const onReject = reason => {console.log(reason)};

const promise1 = examplePromise1.then(onFulfill, onReject);

const promise2 = examplePromise2.then(onFulfill).catch(onReject);

answer: True

5. Which one of the following is NOT a state that a Promise resolves to?

a. Pending
b. fulfilled
c. undefined
d. rejected

answer: c

6. How many parameters does a Promise constructor take?

answer: 1, A Promises's constructor has a single parameter, called the "executor function". The executor function has 2 parameters- resolved and reject. 

7. Which of the executor function’s parameter is called if the asynchronous task completes successfully?

const example = new Promise( (function1, function2) => { . . . } );

answer: function1/resolved

8. True or False: The .then() method returns a Promise.

answer: True

9.  What value is printed to the console?

const asyncHello = new Promise((resolve, reject) => { 
 	setTimeout(resolve, 1000, 'Hello!'); 
}); 

console.log(typeof asyncHello);

answer: object
not Promise not a defined data type of JS

10. What is the fulfilled value of Promise.all()?

answer: An array
