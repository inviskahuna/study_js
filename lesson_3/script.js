function isNatural(num) {
    for (let i = 2; i <= num/2; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
function numWhile(count) {
    let out = document.getElementById("output1");
    let numArray = [];
    let curNum = 2;
    while(count !== 0) {
        if (isNatural(curNum)) {
            numArray.push(curNum);
            count--;
        }
        curNum++;
    }
    out.innerHTML = numArray.join(", ");
}
function doBasket() {
    return new Map([
        ['Spam', 200],
        ['Eggs', 300],
        ['Tea', 25],
        ['Bread', 666]
    ])
}

function countBasketPrice(basket) {
    let out = document.getElementById("output2");
    let sum = 0;
    let productsList = [];
    for (let pair of basket.entries()) {
        // pair - это массив [key, values]
        sum += pair[1];
        productsList.push(`Товар = ${pair[0]}, Цена = ${pair[1]}`);
    }
    out.innerHTML = productsList.join(",<br>") + `<br>Итого ${sum} рублей`;
}

function forMagic() {
    let i = 0;
    for (i; i < 10; i++, alert(i)){}
}

function doPyramid() {
    let rows = prompt("Сколько рядов строить?");
    let nRows = Number(rows);
    let i = 1;
    while (i <= nRows) {
        console.log("x".repeat(i));
        i++;
    }
}