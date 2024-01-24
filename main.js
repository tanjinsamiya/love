const wrapper = document.querySelector("body");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

let click = 1;

yesBtn.addEventListener("click", () => {
    if(click == 1){
        question.innerHTML = " yay, See you soon!";
        gif.src = "heart-love.gif";
        click++;
    }else{
        question.innerHTML = "Thank you!"
        gif.src = "cute-love.gif";
    }
});

noBtn.addEventListener("mouseover", () => {
    const i = Math.floor(Math.random() * (wrapper.clientWidth - noBtn.clientWidth)) + 1;
    const j = Math.floor(Math.random() * (wrapper.clientHeight - noBtn.clientHeight)) + 1;

    noBtn.style.left = i + "px";
    noBtn.style.top = j + "px";

    console.log(i, j);
});