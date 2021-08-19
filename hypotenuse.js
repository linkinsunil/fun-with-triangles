const sides = document.querySelectorAll(".side-input")
const btnHypotenuse = document.querySelector("#btn-hypotenuse")
const message = document.querySelector("#message")

function calculateHypotenuse(){
    const sumOfSquares = calculateSumOfSquares(Number(sides[0].value), Number(sides[1].value));
    const lengthOfHypotenuse = (Math.sqrt(sumOfSquares))
    message.innerText = `Length of Hypotenuse is ${lengthOfHypotenuse.toFixed(2)}`;
}

function calculateSumOfSquares(a,b){
    const sumOfSquares = a*a + b*b;
    return sumOfSquares;
}

btnHypotenuse.addEventListener("click", calculateHypotenuse);
