

const hello = () => {
    console.log("Witam serdecznie wszystkich developerów zaglądających do konsoli")
}
hello();

const toggleBackground = () => {
    const body = document.querySelector(".js-body");
    const themeName = document.querySelector(".js-themeName");
    body.classList.toggle("dark");
    themeName.innerText = body.classList.contains("dark") ? "jasny" : "ciemny"
};
const init = () => {
    const button = document.querySelector(".js-button");
    button.addEventListener("click", toggleBackground);
}

init();
