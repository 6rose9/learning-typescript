import { greeting } from "./components/app";

console.log(greeting);

document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");
  if (app) {
    app.textContent = greeting;
  }
});
