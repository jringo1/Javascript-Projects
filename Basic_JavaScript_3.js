

function myFunction() {
    document.getElementById("Math").innerHTML = 25 % 6;
}

function modulus_Operator() {
    var simple_Math = 25 % 6;
    document.getElementById("Math").innerHTML ="25 devided by 6 has a remainder of = " + simple_Math;
}

function subtraction_Function() {
    var Subtraction = 5 - 2;
    document.getElementById("Math").innerHTML ="5 - 2 = " + Subtraction;
}

function multiplication() {
    var simple_Math = 6 * 8;
    document.getElementById("Math").innerHTML ="6 x 8 = " + simple_Math;
}

function division() {
    var simple_Math = 48 / 6;
    document.getElementById("Math").innerHTML ="48 / 6 = " + simple_Math;
}

function more_Math() {
    var simple_Math = (1 + 2) * 10 / 2 -5;
    document.getElementById("Math").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + simple_Math;
}

function negation_Operator() {
    var x = 10;
    document.getElementById("Math").innerHTML = -x;
}

var x = 5;
x++;
document.write(x)

var z = 5.25
z--;
document.write(z);

window.alert(Math.pow(8, 2));

