const inputs = document.querySelectorAll(".triangle-input");
const btnArea = document.querySelector("#btn-area");
const message = document.querySelector(".message");

btnArea.addEventListener("click", calculateAreaOfTriangle);

function productOfBaseAndHeight(a,b){
    const productOfBaseAndHeight = a*b;
    return productOfBaseAndHeight;
}

function calculateAreaOfTriangle() {
    const product = productOfBaseAndHeight(Number(inputs[0].value), Number(inputs[1].value));
    const areaOfTriangle = product / 2;
    message.innerText = `Area of Triangle is ${areaOfTriangle.toFixed(2)} cm²`;
}