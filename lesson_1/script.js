
function convertTemp() {
    var tempC = document.getElementById("inputC").value;

    tempF = (9 / 5) * tempC + 32;
    alert(tempC + ' градуса Цельсия = ' + tempF + ' градусов Фаренгейта');
  }

function doAdmin() {
    var name = document.getElementById("inputName").value;
    var admin = document.getElementById("admin");
    admin.innerHTML = name;
}

function concatination() {
    var varA = document.getElementById("inputVarA").value;
    var varB = document.getElementById("inputVarB").value;
    var conc = varA + varB
    alert("VarA = " + varA + " " + "VarB = " + varB + " " + "Conc = " + conc)
}
function strongConc() {
    var varA = 1000 //document.getElementById("inputVarA").value;
    var varB = "108" //document.getElementById("inputVarB").value;
    var conc = varA + varB
    alert(conc)
}