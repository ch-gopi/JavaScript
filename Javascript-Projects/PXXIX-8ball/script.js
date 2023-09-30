const answerArray = ["It will work","Maybe maybe not","Probably Not","Highly Likely","I don't know"];
const message = document.querySelector(".message");
const question = document.querySelector("input");
const button = document.querySelector("button");
button.addEventListener("click",function(){
    let res = Math.floor(Math.random()*answerArray.length);
    message.innerText = question.value + " " + answerArray[res];
    question.value = "";
}) 