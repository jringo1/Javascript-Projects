function my_Function() {
    document.getElementById("Test").innerHTML = 0/0;
    document.getElementById("New").innerHTML = isNaN('64');
    document.getElementById("Old").innerHTML = isNaN('string');
}

document.write(2E310);
document.write(-3E310);

document.write(10 > 2);

document.write(10 < 2);

console.log(2 + 2);

document.write("10" + 5);

console.log(10 > 11);

document.write(10 == 10);

document.write(18 == 10);

x = 4;
y = 4;
a = 5;
b = 78;
f = "4";
document.write(x === y);
document.write(a === b);
document.write(x === f);

document.write(5 > 2 && 10 > 4);

document.write(5 > 2 || 10 > 4);

document.write(5 > 2 || 10 > 20);

function not_Function() {
    document.getElementById("Not").innerHTML = !(5 > 10);
}