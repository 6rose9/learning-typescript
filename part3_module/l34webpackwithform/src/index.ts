import "./style.css";

// ts need to check
//  method 1
// const form = document.querySelector('form');
// if (form) {
//     form.addEventListener("submit", (e) => {
//         e.preventDefault(); // to avoid reload
//         console.log("Hello");
//     })
// }

// method 2
// const form = document.querySelector('form')!; // truth me. I'm sure this won't be null at runtime
// form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     console.log("Hello");
// })


// method 3
const form = document.querySelector('form');
// ts => ? mean truth me it's not null
form?.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Hello");
})
