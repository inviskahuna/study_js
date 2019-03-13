let mas = ["src/0.png","src/1.png","src/2.png","src/3.png"];
let products_img = ["src/0.png","src/1.png","src/2.png","src/3.png"];
let to = 0;

let product_0 = { 'name': 'таблетка для ума', 'price': 50, 'description': 'Подойдет для начинающих разработчиков' };
let product_1 = { 'name': 'книга по JS', 'price': 200, 'description': 'Подойдет для продолжающих разработчиков' };
let product_2 = { 'name': 'сборник StackOverflow', 'price': 500, 'description': 'Подойдет для опытных разработчиков' };
let product_3 = { 'name': 'курс GB по JS', 'price': 999, 'description': 'Подойдет для крутых разработчиков' };
let products = [product_0, product_1, product_2, product_3];
let product_count = [0, 0, 0, 0];
let majorPrice = 0;
function right_arrow(id, m)
{
    let obj = document.getElementById(id);
    if (to < m.length-1)  to++
    else
        to = 0;
    obj.src = m[to];
    if (id == "product_img") {
        document.getElementById("pName").innerHTML = products[to].name;
        document.getElementById("pPrice").innerHTML = products[to].price.toString();
        document.getElementById("pDescr").innerHTML = products[to].description;
    }
}

function left_arrow(id, m)
{
    let obj = document.getElementById(id);
    if (to > 0) to--;
    else
        to = m.length-1;
    obj.src = m[to];
    if (id == "product_img") {
        document.getElementById("pName").innerHTML = products[to].name;
        document.getElementById("pPrice").innerHTML = products[to].price.toString();
        document.getElementById("pDescr").innerHTML = products[to].description;
    }
}

function onFileSelected(event) {
    let selectedFile = event.target.files[0];
    let reader = new FileReader();
    reader.onload = function(event) {
        index = prompt("Какую картинку заменить [0-3]");
        if (index < 0  || index > 3) {
            alert("Неправильный ввод, надо [0-3]")
        }
        else {
            mas[index] = (event.target.result);
        }
    };
    reader.readAsDataURL(selectedFile);
}

function createNewElement(name, price, descr, img) { //
    let bag = document.getElementById('bag');
    bag.appendChild(document.createElement("div")).id = `item${to}`;
    let item = document.getElementById(`item${to}`);
    a = item.appendChild(document.createElement("img"));
    a.id = `element${0}`;
    a.src = img;
    b = item.appendChild(document.createElement("div"));
    b.id = `element${1}`;
    b.innerHTML = `Название: ${name}`;
    c = item.appendChild(document.createElement("div"));
    c.id = `element${2}`;
    c.innerHTML = `Описание: ${descr}`;
    d = item.appendChild(document.createElement("div"));
    d.id = `element${3}`;
    d.innerHTML = `Цена: ${price}`;
    e = item.appendChild(document.createElement("div"));
    e.id = `element${4}`;
    e.innerHTML = `Количество: ${product_count[to]}`;

}
function add2Bag() {
    ++product_count[to];
    calcMajorPrice();
    console.log(product_count);
    if (product_count[to] == 1) {
        createNewElement(products[to].name, products[to].price, products[to].description, products_img[to])
    }
    else {
        for (let i = 0; i < 4; i++) {
            let j = document.getElementById(`item${i}`);
            let content = j.lastChild;
            content.innerHTML = `Количество: ${product_count[i]}`;
        }
    }
}

function calcMajorPrice() {
    let priceTarget = document.getElementById("price");
    let T = 0;
    for (let i = 0; i<4; i++) {
       T += Number(Number(product_count[i]) * Number(products[i].price));
    }
    priceTarget.innerHTML = T.toString()
}


