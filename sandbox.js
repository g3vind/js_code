// const para = document.querySelector("p");
// console.log(para); // <p>helllo, world!</p>

// const para2 = document.querySelector(".error");
// console.log(para2);

// const paras = document.querySelectorAll(".error");
// console.log(paras);

// const txt = document.getElementById("title");
// console.log(txt);

// const plu = document.getElementsByClassName("c1");
// console.log(plu);

// const para = document.querySelector("p"); // return the first p in html body
// console.log(para);
// // returns the inner text of the html document
// console.log(para.innerText);
// para.innerText = "ninzas are awesome";
// console.log(para.innerText);

// changing inner text of many elements at once
// let many = document.querySelectorAll("p");

// many.forEach((many) => {
//   console.log(many.innerText);
//   many.innerText += " new text";
// });
// many.innerText = "kuch bhi";

// changing inner HTML
// const content = document.querySelector(".content");
// // console.log(content);

// // content.innerHTML = "<h2> this is an h2 now </h2>";
// // console.log(content);
// const people = ["mohit", "kishan", "abhi"];
// people.forEach((person) => {
//   content.innerHTML += `<p> ${person}</p>`;
// });
// const link = document.querySelector("a");
// console.log(link.getAttribute("href"));

// link.setAttribute("href", "https://www.facebook.com");
// console.log(link.getAttribute("href"));

const link = document.querySelector("h1");
// link.setAttribute("style", "color:red ");
// link.setAttribute("style", "margin: 50px");

console.log(link.style.color); // red
// link.style.color = "blue";
// link.style.margin = "50px";
console.log(link.style.color);
link.style.fomtSize = "60px";
