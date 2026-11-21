
let form = document.querySelector("form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    alert("Your Admission Form Submitted Successfully!");
    form.reset();
});
