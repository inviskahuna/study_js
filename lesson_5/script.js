let cycle = true;
function helloText() {
    if(cycle) {
        let helloText = document.getElementById("textOut");
        helloText.innerHTML = "Привет";
        cycle = false
    } else {
        let helloText = document.getElementById("textOut");
        helloText.innerHTML = "Hello";
        cycle = true
    }
}

function fillList() {
    let textUl = document.getElementById("textUl");
    let li = textUl.getElementsByTagName("li");
    for (let i = 0; i < li.length; i++) {
        let input = li[i];
        input.innerHTML = `${i} - List`;
    }
}
function calc(action) {
    let varA = Number(document.getElementById("varA").value);
    let varB = Number(document.getElementById("varB").value);
    let output = document.getElementById("result");
    let result = 0;
    if (action === "sum") {
        result = varA + varB;
    } else if (action === "sub"){
        result = varA - varB;
    } else if (action === "div"){
        result = varA / varB;
    } else if (action === "mul"){
        result = varA * varB;
    }
    output.innerHTML = result.toString();
}
function insBef() {
    let list = document.getElementById("list");
    let newLi = document.createElement('li');
    newLi.innerHTML = 'Магически появившийся элемент';
    list.insertBefore(newLi, list.firstChild)
}

function simpleChess() {
    for (let i=0; i< 64; i++){
        document.getElementById("mainChessBoard").appendChild(document.createElement("div")).style.backgroundColor =
            parseInt((i / 8) + i) % 2 == 0 ? '#ababab' : 'white';
    }
}