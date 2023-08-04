import { getColors } from "./utils.js";
const form = document.getElementById("colorSchemeForm");

form.addEventListener("submit", (e) => {
  const color = document.getElementById("colorInput").value.substring(1);
  const option = document.getElementById("colorSelect").value;

  getColors(color, option);

  console.log(color);
  console.log(option);
  e.preventDefault();
});
