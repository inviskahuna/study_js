
/*
если a и b положительные, вывести их разность;
если а и b отрицательные, вывести их произведение;
если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом.
 */

function varLogic() {
    let varA = document.getElementById("inputVarA").value;
    let varB = document.getElementById("inputVarB").value;
    let verboseA = document.getElementById("varA");
    let verboseB = document.getElementById("varB");
    verboseA.innerHTML = varA;
    verboseB.innerHTML = varB;
    let output = document.getElementById("output");
    let out = "None";
    if (varA > 0 && varB > 0) {
        out = varA - varB
    } else if (varA < 0 && varB <0) {
        out = varA * varB
    } else {
        out = Number(varA) + Number(varB)
    }
    output.innerHTML = out;
}