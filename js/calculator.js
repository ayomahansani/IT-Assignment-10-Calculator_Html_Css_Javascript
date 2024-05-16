
const inputScreen = document.querySelector(".screen");

const buttons = document.querySelectorAll("button");
console.log(buttons);

buttons.forEach((item) => {

    item.onclick = () => {

        if (item.id === "clear") {
            inputScreen.innerText = "";
        }

        else if (item.id === "backspace") {
            let string = inputScreen.innerText.toString();
            inputScreen.innerText = string.substr(0, string.length - 1);
        }

        else if (inputScreen.innerText !== "" && item.id === "equal") {
            inputScreen.innerText = eval(inputScreen.innerText);
        }

        else if (inputScreen.innerText === "" && item.id === "equal") {
            inputScreen.innerText = "Empty!";
            setTimeout(() => (inputScreen.innerText = ""), 2000);
        }

        else {
            inputScreen.innerText += item.id;
        }

    };

});
