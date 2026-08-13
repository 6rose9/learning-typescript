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
    age: { required: false, type: 'number', min: 0 }
}
form?.addEventListener("submit", (e) => {
    e.preventDefault(); // prevent submit 
    const data = formData(form);
    // console.log("Form Data:", data);

    const errors = validateForm(data, schema);
    // console.log(Object.keys(errors)); // []
    if (Object.keys(errors).length > 0) {
        console.error("Validatation Error:", errors);
        showErrors(errors);
    } else {
        console.log("Success!", data);
        document.querySelectorAll(".error").forEach(error => error.remove());
        form.reset();
    }
})

function showErrors(errors: Record<string, string>) {
    document.querySelectorAll(".error").forEach(error => error.remove());
    for (const key in errors) {
        const element = document.querySelector<HTMLInputElement>(`#${key}`);
        if (element) {
            const errorDiv = document.createElement("div");
            errorDiv.className = "error";
            errorDiv.textContent = errors[key];
            element.insertAdjacentElement("afterend", errorDiv);
        }
    }
}
