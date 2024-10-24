let sno = 1;

function add() {
    let naam = document.getElementById("name").value;
    let father = document.getElementById("fname").value;
    let clas = document.getElementById("clas").value;
    let rollnb = document.getElementById("rollno").value;
    let tmarks = document.getElementById("tmarks").value;
    let omarks = document.getElementById("omarks").value;

    if (naam === "" || father === "" || clas === "" || rollnb === "" || tmarks === "" || omarks === "") {
        alert("Please fill all fields");
        return;
    }

    let table = document.getElementById("student-table");
    let newRow = table.insertRow();

    newRow.innerHTML = `
        <td>${sno}</td>
        <td>${naam}</td>
        <td>${father}</td>
        <td>${clas}</td>
        <td>${rollnb}</td>
        <td>${tmarks}</td>
        <td>${omarks}</td>
    `;

    sno++;

    document.getElementById("name").value = "";
    document.getElementById("fname").value = "";
    document.getElementById("clas").value = "";
    document.getElementById("rollno").value = "";
    document.getElementById("tmarks").value = "";
    document.getElementById("omarks").value = "";
}

function filterTable() {
    let searchValue = document.getElementById("search").value.toLowerCase();
    let table = document.getElementById("student-table");
    let rows = table.getElementsByTagName("tr");

    for (let i = 0; i < rows.length; i++) {
        let nameCell = rows[i].getElementsByTagName("td")[1];
        let classCell = rows[i].getElementsByTagName("td")[3];
        if (nameCell || classCell) {
            let nameText = nameCell.textContent.toLowerCase();
            let classText = classCell.textContent.toLowerCase();

            if (nameText.includes(searchValue) || classText.includes(searchValue)) {
                rows[i].style.display = "";
            } else {
                rows[i].style.display = "none";
            }
        }
    }
}
