// const fetch = require("node-fetch");

// const promise = new Promise((resolve, reject) => {
//   // throw new Error('this is Error');
//   setTimeout(() => {
//     if ("") {
//       reject("Error");
//     } else {
//       resolve("completed");
//     }
//   });
// });

// promise.then((data) => console.log(data)).catch((error) => console.log(error));

// ---------------работа с сервером----------------
// fetch("https://jsonplaceholder.typicode.com/users") //пример сервера
//   .then((res) => res.json())
//   .then((data) =>
//     Promise.all(
//       [1, 2, 3, 4, 5].map(() =>
//         fetch("https://jsonplaceholder.typicode.com/users")
//       )
//     )
//   )
//   .then((responses) => Promise.all(responses.map((r) => r.json())))
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

//------------------event loop---------------------
//------------------1-----------------------------
// function ERROR() {
//   queueMicrotask(() => {
//     console.log("micro1");
//     setTimeout(() => console.log("settimeaout"));
//     queueMicrotask(() => console.log("micro2"));
//     Promise.resolve().then(() => console.log("Promise"));
//   });
//   ERROR();
// }

//------------------2--------------------
// console.log(1);
// setTimeout(() => console.log(2), 0);
// console.log(3);

// new Promise((resolve) => {
//   console.log(4);
//   resolve();
// })
//   .then(() => console.log(5))
//   .then(() => console.log(5.5));

// console.log(6);

// setTimeout(() => {
//   console.log(7);
//   new Promise((resolve) => {
//     console.log(11);
//     resolve();
//   }).then(() => console.log(12));
// }, 0);

// Promise.resolve()
//   .then(() => {
//     console.log(8);
//   })
//   .then(() => console.log(9));

// console.log(10);

//-----------------3------------------------

// function d() {
//   const f = "1";
//   console.log(f);

//   return new Promise((resolve, reject) => {
//     console.log("2");
//     resolve(
//       setTimeout(() => {
//         console.log("сеттаймаут");
//       }, 0)
//     );
//   });
// }

// console.log("3");

// function a() {
//   b();
//   console.log("4");
// }

// function b() {
//   console.log("5");
// }

// a();

// const c = () => {
//   console.log("6");
// };

// c();
// d();

//-----------------4------------------------

// function doSomethingElse(v) {
//   console.log(v);
// }

// function doSomething() {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       console.log("1");
//       res();
//     }, 1000);
//   });
// }

// doSomething()
//   .then(function () {
//     doSomethingElse("2");
//   })
//   .then(function (v) {
//     return doSomethingElse(v);
//   });

// doSomething()
//   .then(function () {
//     doSomethingElse("3");
//   })
//   .then(function () {
//     return doSomethingElse("4");
//   });

// doSomething().then(doSomethingElse("5"));

// doSomething().then(doSomethingElse);

//-----------------5------------------------

// const outer = document.querySelector(".outer");
// const inner = document.querySelector(".inner");
// const result = document.querySelector(".result");

// function createResult(name) {
//   const el = window.document.createElement("P");
//   el.className = "step " + name;
//   el.innerText = name;
//   result.append(el);
// }

// new MutationObserver(function () {
//   createResult("mutate");
// }).observe(outer, {
//   attributes: true,
// });

// function onClick() {
//   createResult("click");

//   setTimeout(function () {
//     createResult("timeout");
//   }, 0);

//   Promise.resolve().then(function () {
//     createResult("promise");
//   });

//   outer.setAttribute("data-random", Math.random());
// }

// inner.addEventListener("click", onClick);
// outer.addEventListener("click", onClick, true);
//click click promise mutate promise mutate timeout timeout
