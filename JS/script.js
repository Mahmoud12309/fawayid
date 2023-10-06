let nav = document.querySelector("header nav"),
bars = document.querySelector(".bars"),
x = document.querySelector(".X");

bars.addEventListener('click',() => {
    nav.classList.add("active");
})
x.addEventListener('click',() => {
    nav.classList.remove("active");
})
