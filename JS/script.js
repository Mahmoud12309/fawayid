let nav = document.querySelector("header nav"),
bars = document.querySelector(".bars"),
x = document.querySelector(".X");

bars.addEventListener('click',() => {
    nav.classList.add("active");
})
x.addEventListener('click',() => {
    nav.classList.remove("active");
});

let heartm = "light",
d = document.querySelector(".d i"),
body = document.querySelector("body");
d.addEventListener("click", () => {
    if (heartm === "light") {
        heartm = "dark";
        d.className = "fa-solid fa-moon";
        body.classList.add("dark");
    } else {
        d.className = "fa-regular fa-sun";
        heartm = "light";
        body.classList.remove("dark");
    }
});
