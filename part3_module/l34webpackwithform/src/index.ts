import { ValidationSchema, validateForm } from "./components/validator";
import { formData } from "./components/formhandler";
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
// const form = document.querySelector('form');
// // ts => ? mean truth me it's not null
// form?.addEventListener("submit", (e) => {
//     e.preventDefault();
//     console.log("Hello");
// })

const form = document.querySelector<HTMLFormElement>('form');
const schema: ValidationSchema = {
    name: { required: true, minLength: 3, maxLength: 6 },
    email: { required: true, type: 'email' },
    age: { required: false, type: 'number' }
}
form?.addEventListener("submit", (e) => {
    e.preventDefault(); // prevent submit 
    const data = formData(form);
    // console.log("Form Data:", data);

    const errors = validateForm(data, schema);
    console.log('error', errors);
})
