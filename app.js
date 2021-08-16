const inputs = document.querySelectorAll(".angle-input");
const btnIsTriangle = document.querySelector("#btn-isTriangle")
const message = document.querySelector("#message")

function calculateSumOfAngles(angle1, angle2, angle3) {
    const sumOfAngles = angle1 + angle2 + angle3;
    return sumOfAngles;

}

function isTriangle(){
    const sumOfAngles = calculateSumOfAngles(Number(inputs[0].value), Number(inputs[1].value), Number(inputs[2].value))
    if (sumOfAngles === 180){
        message.innerText = "Its a triangle"
    }else {
        message.innerText = "Its not triangle"
    }
}

btnIsTriangle.addEventListener("click", isTriangle);