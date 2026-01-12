const currentDate = new Date();

const fullDate = currentDate.toLocaleDateString();

let span = document.querySelector("#date");

span.textContent = fullDate;
