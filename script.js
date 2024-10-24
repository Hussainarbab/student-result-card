function add() {
    let naam = document.getElementById("name").value;
    let father = document.getElementById("fname").value;
    let clas = document.getElementById("clas").value;
    let rollnb = document.getElementById("rollno").value;
    let tmarks = document.getElementById("tmarks").value;
    let omarks = document.getElementById("omarks").value;

    document.getElementById("heading1").innerHTML = naam;
    document.getElementById("heading2").innerHTML = father;
    document.getElementById("heading3").innerHTML = clas;
    document.getElementById("heading4").innerHTML = rollnb;
    document.getElementById("heading5").innerHTML = tmarks;
    document.getElementById("heading6").innerHTML = omarks;
}
