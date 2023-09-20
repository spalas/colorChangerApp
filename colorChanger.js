// generate a random color
const randomColor = function () {
    const hexColor = "01234569ABCDEF"
    let color = "#"
    for (let i = 0; i < 6; i++){
        color+= hexColor[Math.floor(Math.random()*16)]

    }
    return color
}
// console.log(randomColor())

let intervalId;
const startChangerColor = function () { 
    if (!intervalId) { 
        intervalId=setInterval(changeBbColor, 1000);
    }


    function changeBbColor() {
        document.body.style.backgroundColor = randomColor();

    }
}
const stopChangerColor = function () {
    clearInterval(intervalId);
    intervalId = null;
};
    document.querySelector("#start").addEventListener
        ("click", startChangerColor)
    document.querySelector("#stop").addEventListener
        ("click", stopChangerColor)
 
