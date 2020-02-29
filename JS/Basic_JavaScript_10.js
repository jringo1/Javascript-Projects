function Call_Loop() {
    var Digit = "";
    var x = 1;
    while(x < 11) {
        Digit += "<br>" + x;
        x++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

function str_length() {
    var str = "Hello!";
    var n = str.length;
    document.getElementById("string").innerHTML = n;
}

var Instruments = ["Guitar", "Drums", "Piano", "Violin", "Trumpet", "Flute"];
var Content = "";
var y;
function for_loop() {
    for (y = 0; y < Instruments.length; y++)  {
        Content += Instruments[y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function cat_pics() {
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("array").innerHTML = "In this picture, the cat is " + 
        Cat_Picture[2] + ".";
}

function constant_function() {
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black"};
    Musical_Instrument.color = "blue;";
    Musical_Instrument.price = "$900";
    document.getElementById("Constant").innerHTML = "The cost of the " + Musical_Instrument.type + " was " + Musical_Instrument.price;
}

var x = 16;
document.write(x);
{
    let x = 3;
}
document.write(x);

let car = {
    make: "Dodge ",
    model: "viper ",
    year: "2021 ",
    color: "red ",
    description: function() {
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
};
document.getElementById("Car_Object").innerHTML = car.description();
// I dont know why this doesnt work 
var text = "";
var i;
for (i = 0; i < 10; i++) {
    if (i === 3) {break; }
    text += "The number is " + i + "<br>";
}
document.getElementById("loop_break").innerHTML = text;