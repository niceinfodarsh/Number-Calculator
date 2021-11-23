let add = document.getElementById ("A-btn");
let subtract = document.getElementById ("S-btn");
let multiply = document.getElementById ("M-btn");
let divide = document.getElementById ("D-btn");
add.addEventListener ("click", function (){
    var numOa = prompt("Type first number here");
    var numTa = prompt("Type second number here");
    var answer = parseFloat(numOa)+parseFloat(numTa);
    alert("The Answer Is "+answer);
})
subtract.addEventListener ("click", function (){
    var numOs = prompt("Type first number here");
    var numTs = prompt("Type second number here");
    var answer = parseFloat(numOs)-parseFloat(numTs);
    alert("The Answer Is "+answer);
})
multiply.addEventListener ("click", function (){
    var numOm = prompt("Type first number here");
    var numTm = prompt("Type second number here");
    var answer = parseFloat(numOm)*parseFloat(numTm);
    alert("The Answer Is "+answer);
})
divide.addEventListener ("click", function (){
    var numOd = prompt("Type first number here");
    var numTd = prompt("Type second number here");
    var answer = parseFloat(numOd)/parseFloat(numTd);
    alert("The Answer Is "+answer);
})