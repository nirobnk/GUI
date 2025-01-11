// function addNumber(a, b, callback) {
//   let sum;
//   sum = a + b;
//   console.log(sum);
//   callback(sum);
// }

// import { get } from "lodash";

// // function result(p1) {
// //   document.getElementById("dim").textContent = p1;
// // }
// const one = document.getElementById("one");
// one.addEventListener("click", cd);

// function cd() {
//   console.log("hello");
// }
// addNumber(111, 28, (p1)=>{
//     document.getElementById("dim").textContent = p1
// });
// function getrproduct() {
//   fetch("https://fakestoreapi.com/products/1")
//     .then((res) => res.json())
//     .then((json) => console.log(json));
// }

// async function getProduct() {
//   try {
//     const res = await fetch("https://fakestoreapi.com/products/1");
//     const data = await res.json();
//     console.log(data);
//   } catch {
//     console.log("error");
//   }
// }

// getProduct();

// let fulllist = "";
// let list = document.getElementById("list");

// const getTitle = async () => {
//   try {
//     const res = await fetch("https://fakestoreapi.com/products");
//     const data = await res.json();
//     console.log(data);
//     data.map((item) => {
//       fulllist += `<li>${item.title}</li>`;
//     });
//     list.innerHTML = fulllist
//   } catch {
//     console.log("error");
//   }
// };

// getTitle();

// let fulllist = "";
// let list = document.getElementById("list");

// fetch("https://fakestoreapi.com/products")
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//     data.map((item) => {
//       fulllist += `<li>${item.title}</li>`;
//     });
//     list.innerHTML = fulllist;
//   });

//console.log(fetch("https://fakestoreapi.com/products"));
// fetch("https://fakestoreapi.com/products")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

// let list = document.getElementById("list");

// const getTitle = async () => {
//   try {
//     list.innerHTML = "Loading..."; // Show loading message
//     let fulllist = ""; // Ensure reset on each call
//     const res = await fetch("https://fakestoreapi.com/products");
//     const data = await res.json();
//     console.log(data);
//     data.map((item) => {
//       fulllist += `<li>${item.title}</li>`;
//     });
//     list.innerHTML = `<ul>${fulllist}</ul>`; // Wrap in <ul> for better structure
//   } catch (error) {
//     console.log("Error:", error);
//     list.innerHTML = "Failed to load data.";
//   }
// };

// getTitle(); // Call the function

const numbers = [12, 34, 65, -56, 89, 43, 27];

const newnumbers = numbers.filter((num) => {
  return num > 0;
});

let x="";
console.log(numbers);
console.log(newnumbers);
newnumbers.map((item) => {
  x += `<li>${item}</li>`;
});

let list = document.getElementById("list");
list.innerHTML = x;
