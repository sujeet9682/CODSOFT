
const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialchars = ["%", "*", "/", "-", "+", "="];
let output= "";

const calculate = (btnval) =>{
    display.focus();
    if(btnval === "=" && output !== ""){
        output = eval(output.replace("%", "/100"));
    }
    else if(btnval === "AC"){
        output = "";
    }
    else if(btnval === "DEL"){
        output = output.toString().slice(0,-1);
    }
    else{
        if(output === "" && specialchars.includes(btnval)) return;
        output+=btnval;
    }
    display.value = output;
};

buttons.forEach((button) =>{
    button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});
