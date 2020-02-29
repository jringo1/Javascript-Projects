function full_sentence() {
    var part_1 ="I have ";
    var part_2 ="made this ";
    var part_3 ="into a complete ";
    var part_4 ="sentance.";
    var whole_sentance = part_1.concat(part_2, part_3, part_4);
    document.getElementById("concatinate").innerHTML = whole_sentance;
}

function slice_Method() {
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = Section;
}

function upper_Method() {
    var str = "huge letters!";
    var res = str.toUpperCase();
    document.getElementById("upper").innerHTML = res;
}

function search_string() {
    var str1 = "Im searching for the sea";
    var n = str1.search("sea");
    document.getElementById("search").innerHTML = n;
}

function string_Method() {
    var x =182;
    document.getElementById("numbers_to_strings").innerHTML = x.toString();
}

function valueOf_Method() {
    var str2 = "Value of Method here";
    var res = str2.valueOf();
    document.getElementById("valueOf").innerHTML = res;
}

function precision_Method() {
    var z = 129.386729;
    document.getElementById("Precision").innerHTML = z.toPrecision(10);
}

function fixed_Method() {
    var num = 5.56789;
    var n = num.toFixed(2);
    document.getElementById("fixed").innerHTML = n;
}