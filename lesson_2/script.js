
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

function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    rand = Math.round(rand);
    return rand;
}

function fifteens_numbers() {
    let output = document.getElementById("output");
    let sample = randomInteger(0, 15);
    switch (sample) {
        case 0:
            output.innerHTML = "Ноль";
            break;
        case 1:
            output.innerHTML = "Один";
            break;
        case 2:
            output.innerHTML = "Два";
            break;
        case 3:
            output.innerHTML = "Три";
            break;
        case 4:
            output.innerHTML = "Четыре";
            break;
        case 5:
            output.innerHTML = "Пять";
            break;
        case 6:
            output.innerHTML = "Шесть";
            break;
        case 7:
            output.innerHTML = "Семь";
            break;
        case 8:
            output.innerHTML = "Восемь";
            break;
        case 9:
            output.innerHTML = "Девять";
            break;
        case 10:
            output.innerHTML = "Десять";
            break;
        case 11:
            output.innerHTML = "Одиннадцать";
            break;
        case 12:
            output.innerHTML = "Двенадцать";
            break;
        case 13:
            output.innerHTML = "Тринадцать";
            break;
        case 14:
            output.innerHTML = "Четырнадцать";
            break;
        case 15:
            output.innerHTML = "Пятнадцать";
            break;
        default:
            output.innerHTML = "Что то пошло не так";
            break;

    }
}

function add(a, b) {
    return Number(a) + Number(b)
}
function sub(a, b) {
    return Number(a) - Number(b)
}
function mul(a, b) {
    return Number(a) * Number(b)
}
function div(a, b) {
    return Number(a) / Number(b)
}
function fifth_grade() {
    let varA = document.getElementById("inputVarA").value;
    let varB = document.getElementById("inputVarB").value;
    let verboseA = document.getElementById("varA");
    let verboseB = document.getElementById("varB");
    verboseA.innerHTML = varA;
    verboseB.innerHTML = varB;
    let output = document.getElementById("output");

    let a = add(varA, varB);
    let b = sub(varA, varB);
    let c = mul(varA, varB);
    let d = div(varA, varB);

    output.innerHTML = a + "<-ADD" + b + "<-SUB" + c + "<-MUL" + d + "<-DIV";
}

function mathOperation(arg1, arg2, operation) {
    let output = document.getElementById("output");
    switch (operation) {
        case "ADD":
            output.innerHTML = add(arg1, arg2);
            break;
        case "SUB":
            output.innerHTML = sub(arg1, arg2);
            break;
        case "MUL":
            output.innerHTML = mul(arg1, arg2);
            break;
        case "DIV":
            output.innerHTML = div(arg1, arg2);
            break;
        default:
            output.innerHTML = "Неправильная операция, введите MUL or SUB or DIV or ADD";
            break;

    }
}

function check_func_with_args() {
    let varA = document.getElementById("inputVarA").value;
    let varB = document.getElementById("inputVarB").value;
    let verboseA = document.getElementById("varA");
    let verboseB = document.getElementById("varB");
    verboseA.innerHTML = varA;
    verboseB.innerHTML = varB;
    let op = prompt("Какую операцию провести с числами A и B");
    mathOperation(varA, varB, op)
}

function zero_and_null() {
    let text = "Данный оператор работает именно так для того, чтобы оптимизировать вычисления. " +
                "Зачем сначала проверять, больше ли x чем y, и, если это не так, проверять, " +
                "равняется ли значение x значению y, если можно выполнить всего одно сравнение, " +
                "проверить, меньше ли x чем y, а затем использовать результат этого сравнения " +
                "для того, чтобы вывести результат исходного выражения."
}