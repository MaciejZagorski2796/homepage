
{
    const hello = () => {
        console.log("Witam serdecznie zaglądających do konsoli")
    }
    hello();

    const toggleBackground = () => {
        const body = document.querySelector(".body");
        let nextColorName = document.querySelector(".article__nextColorName-js");
        body.classList.toggle("pink");
        nextColorName.innerText = body.classList.contains("pink") ? "biały" : "różowy"
    };
    const init = () => {
        const button = document.querySelector(".article__button");
        button.addEventListener("click", toggleBackground);
    }
    init();
};