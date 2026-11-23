
let form = document.querySelector("form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let data = Object.fromEntries(new FormData(form));

    let students = JSON.parse(localStorage.getItem("students")) || [];

    students.push(data);

    localStorage.setItem("students", JSON.stringify(students));

    alert("Form Submitted Successfully!");
    form.reset();
});
