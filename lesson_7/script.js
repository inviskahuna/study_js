let doc = document;
let size = doc.getElementById('sizeSelect');
let canvas = doc.getElementById('canv');
let ctx = canvas.getContext('2d');
let xCoord = doc.getElementById('xCoord');
let yCoord = doc.getElementById('yCoord');
let timeSpan = document.getElementById('timeSpan');
let tools = ['brush', 'rectangle'];
let activeTool = '';

let newColor = {
    value : "black"
};

let system = {
    width: canvas.getAttribute('width'),
    height: canvas.getAttribute('height'),
    currentColor: newColor.value,
    currentTool: '',
    brushSize : size.value,
    startupTime :new Date().getTime()

};


window.onload = function(){
    (function(){
        let date = new Date();
        timeSpan.innerHTML = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
        window.setTimeout(arguments.callee, 1000);
    })();
};



//рендер Системы
let renderSystem = function (obj, elem, action) {
    obj[elem] = action;
};

//Получение координат
let getCoordinates = function (evt) {
    let mas = {};
    let x = evt.offsetX;
    let y = evt.offsetY;
    mas = {x : x, y : y};
    xCoord.innerText = x;
    yCoord.innerText = y;
    return mas;
};

//Изменение размера кисти
let switchSize = function (list) {
    return list.value;
};

//Изменение размера кисти
let switchColor = function (colorInput) {
    return colorInput.value;
};

//Изменение инструмента
let switchTool = function (button) {
    if (button.id === 'brush') {
        return 'brush'
    } else if (button.id === 'erase') {
        return 'erase'
    } else if (button.id === 'airbrush') {
        return 'airbrush'
    }
};

//Мышинные события (клики)
let mouseActionsClick = function (evt) {
    if (evt.target.classList.contains('toolButton') === true) {
        renderSystem (system, 'currentTool', switchTool (evt.target));
    } else if (evt.target.id === 'sizeSelect') {
        renderSystem (system, 'brushSize', switchSize (evt.target));
    } else if (evt.target.id === 'red') {
        renderSystem (system, 'currentColor', switchColor ({value: evt.target.id}));
    } else if (evt.target.id === 'blue') {
        renderSystem (system, 'currentColor', switchColor ({value: evt.target.id}));
    } else if (evt.target.id === 'green') {
        renderSystem (system, 'currentColor', switchColor ({value: evt.target.id}));
    } else if (evt.target.id === 'yellow') {
        renderSystem (system, 'currentColor', switchColor ({value: evt.target.id}));
    }
};

//НЕПОСРЕДСТВЕННО РИСОВАНИЕ

let startDraw = function (evt) {
    if (system.currentTool === 'brush') {
        drawLines (evt);
    } else if (system.currentTool === 'erase') {
        erase (evt);
    } else if (system.currentTool === 'airbrush') {
        airbrush (evt);
    }
};

let endDraw = function (evt) {
    canvas.onmousemove = null;
};

let drawLines = function (evt) {
    canvas.onmousemove = function (evt) {
        ctx.beginPath ();
        ctx.fillStyle = system.currentColor;
        ctx.fillRect (xCoord.innerText, yCoord.innerText, system.brushSize, system.brushSize);
    }
};

let erase = function (evt) {
    canvas.onmousemove = function (evt) {
        ctx.beginPath ();
        ctx.fillStyle = system.currentColor;
        ctx.clearRect (xCoord.innerText, yCoord.innerText, system.brushSize, system.brushSize);
    }
};

let airbrush = function (evt) {
    canvas.onmousemove = function (evt) {
        ctx.beginPath ();
        ctx.fillStyle = system.currentColor;
        ctx.rect(Number(xCoord.innerText), Number(yCoord.innerText), 1, 1);
        for (let i = 20; i--;) {
            ctx.rect(Number(xCoord.innerText) + Math.random()*system.brushSize,
                Number(yCoord.innerText) + Math.random()*system.brushSize, 1, 1);
            ctx.fill();
        }
    }
};
canvas.addEventListener ('mousemove', getCoordinates); //активация получения координат
doc.addEventListener ('click', mouseActionsClick); //активация кликов
canvas.addEventListener ('mousedown', startDraw);
canvas.addEventListener ('mouseup', endDraw);