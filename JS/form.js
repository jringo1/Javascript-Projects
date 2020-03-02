function validateForm() {
    var x = document.forms["form1"]["fname"].value;
    if(x == "") {
        alert("Name must be filled out");
        return false;
    }
}

function openForm() {
    document.getElementById("form").style.display = "block";
}

function closeForm() {
    document.getElementById("form").style.display = "none";
}



