import React from "react";
import Logo from "../favicon.svg"
import "../App.css"

export default function AffinePage(){
    return(
        <div className ="container-center-horizontal" onLoad={DrawBackground}>
            <div className ="desktop-2 screen">
                <GroupMenu />
                <ModalWindowHelp/>
                <ModalWindowInfo/>
                <div className ="flex-row">
                    <ChooseAffine/>
                    <Affine/>
                </ div >
            </ div > 
        </ div >   
    );
}

function GroupMenu ( ) {
    const mainPage = e => {
        e.preventDefault();
        window.location = ("/");
    };
    const fractalPage = e => {
        e.preventDefault();
        window.location = ("/fractal");
    };
    const colorChangePage = e => {
        e.preventDefault();
        window.location = ("/colorChange");
      };
    return (
        <div className ="group-menu">
            <div className ="group-container">
                <button className="text spectral-extra-bold-black-38px overlap-group3_1" onClick={e => fractalPage(e)} >Фрактали</button>
                <button className="text spectral-extra-bold-black-38px overlap-group2_1" onClick={e => colorChangePage(e)}>Зміна колірної схеми</button> 
                <button className="text spectral-extra-bold-black-38px overlap-group1">Афiннi перетворення</button>   
                <img className ="group" src ={Logo} onClick={e => mainPage(e)} alt ="Group"/>
            </ div >
        </ div >
    );
}
            
function ChooseAffine ( ) {    
    const ShowHelp = e => {
        const modal = document.querySelector(".modalHelp");
        modal.classList.remove("hidden");
    }
    const ShowInfo = e => {
        const modal = document.querySelector(".modalInfo");
        modal.classList.remove("hidden");
    }
    const draw = e => {
        e.preventDefault();
        DrawBackground();
    }
    return (
        <div className ="overlap-group6">
            <div className="vertices">
                <p className="spectral-semi-bold-bon-jour-24px">Введіть координати <br/>вершин трикутника:<br/></p>
                <div className="coordinate">
                    <p className="spectral-semi-bold-bon-jour-24px">X1: </p>
                    <input type="number" id="verticeX1" className="overlap-group6-2" min="-15" max="15" step="1" placeholder="1"/>
                    <p className="spectral-semi-bold-bon-jour-24px">Y1: </p>
                    <input type="number" id="verticeY1" className="overlap-group6-2" min="-15" max="15" step="1" placeholder="1"/>
                </div>
                <div className="coordinate">
                    <p className="spectral-semi-bold-bon-jour-24px">X2: </p>
                    <input type="number" id="verticeX2" className="overlap-group6-2" min="-15" max="15" step="1" placeholder="1"/>
                    <p className="spectral-semi-bold-bon-jour-24px">Y2: </p>
                    <input type="number" id="verticeY2" className="overlap-group6-2" min="-15" max="15" step="1" placeholder="1"/>
                </div>
                <div className="coordinate">
                    <p className="spectral-semi-bold-bon-jour-24px">X3: </p>
                    <input type="number" id="verticeX3" className="overlap-group6-2" min="-15" max="15" step="1" placeholder="1"/>
                    <p className="spectral-semi-bold-bon-jour-24px">Y3: </p>
                    <input type="number" id="verticeY3" className="overlap-group6-2" min="-15" max="15" step="1" placeholder="1"/>
                </div>
                <div className="coordinate">
                    <p className="spectral-semi-bold-bon-jour-24px">Введіть коефіцієнт<br/> масштабування:</p>
                    <input type="number" id="scale" className="overlap-group6-2" min="1" max="3" step="1" placeholder="1"/>
                </div>
            </div>
            <div>
                <div className="mainButtons">
                    <button id="build" className="mainButton spectral-bold-black-20px" onClick={DoAffine}><i class="fa-solid fa-pen-to-square"></i>  Побудувати</button>
                    <button className="mainButton spectral-bold-black-20px" onClick={downloadAffine}><i class="fa-solid fa-download"></i>  Завантажити</button>
                </div>
                <div className="helpButtons">
                    <button className="Button spectral-bold-black-20px" onClick={e => ShowInfo(e)}><i class="fa fa-circle-info"></i>  Інформація</button>
                    <button className="Button spectral-bold-black-20px" onClick={e => ShowHelp(e)}> Допомога</button>  
                </div>
            </div>
        </div>
    );
}

function Affine(){
    return(
        <div className="AffineImage" >
            <canvas id="myCanvas" width="660" height="660" onLoad={DrawBackground}/>
        </div>
    );
}

//функція для малювання системи координат
function DrawBackground(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var [width, height] = [canvas.width, canvas.height];
    var center = width/2; 

    ctx.strokeStyle = '#808080';
    ctx.lineWidth = 0.5;
    let x = -30;
    let y = 30;
    var count = Math.round(width/(11));
    for(let i=0; i<count; i++){
        let step = i*11;        
        ctx.beginPath();
        ctx.moveTo(step, 0);
        ctx.lineTo(step, height);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(0, step);
        ctx.lineTo(width, step);
        ctx.stroke(); 
        if(x===0){
            ctx.fillText(x, center+5, center+10);
        } else if(x>-30 && x%3 === 0){
            ctx.font = '10px serif';
            ctx.fillText(x, step-5, center+10);
            ctx.fillText(y, center+5, step+3);
        }
        x++; y--;
    }
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#000000';
    ctx.beginPath();
    ctx.moveTo(0, center);
    ctx.lineTo(width, center);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(center, 0);
    ctx.lineTo(center, height);
    ctx.stroke();
}

//перевірка чи введені координати вершин утворюють трикутник
const checkTriangle = (x1, y1, x2, y2, x3, y3) => {
    //обчислення площі трикутника
    let a = x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2);
    //Перевірка чи площа рівна 0
    if (a === 0)
        return false;
    else
        return true;
}

const DoAffine = async() => {
    const delay = ms => new Promise(res => setTimeout(res, ms));
    DrawBackground();
    //перевірка чи користувач ввів вершини трикутника
    if(document.getElementById("verticeX1").value === "" || 
            document.getElementById("verticeX2").value === "" ||
            document.getElementById("verticeX3").value === "" ||
            document.getElementById("verticeY1").value === "" ||
            document.getElementById("verticeY2").value === "" ||
            document.getElementById("verticeY3").value === "")
    {
        alert("Введіть, будь ласка, координати вершин.");
        return;
    }
    let 
        x1 = parseInt(document.getElementById("verticeX1").value.toString()), 
        x2 = parseInt(document.getElementById("verticeX2").value.toString()), 
        x3 = parseInt(document.getElementById("verticeX3").value.toString()), 
        y1 = parseInt(document.getElementById("verticeY1").value.toString()), 
        y2 = parseInt(document.getElementById("verticeY2").value.toString()), 
        y3 = parseInt(document.getElementById("verticeY3").value.toString());
    //перевірка чи введені вершини трикутника входять в потрібний діапазон
    if(x1>15||x1<-15||y1>15||y1<-15||x2>15||x2<-15||y2>15||y2<-15||x3>15||x3<-15||y3>15||y3<-15){
        alert("Є ймовірність що трикутник вийде за межі поля. Введіть координати більші за -15 та менші за 15. ");
        return;
    }
    //перевірка чи введені вершини утворюють трикутник
    if(!checkTriangle(x1, y1, x2, y2, x3, y3)){
        alert("Координати введені непраильно. Це не трикутник");
        return;
    }

    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    let center = Math.round(canvas.width / 2);
    let coords = [[x1, y1, 1],
                  [x2, y2, 1],
                  [x3, y3, 1]];
    //обчислення центру трикутника
    var cx = (coords[0][0]+coords[1][0]+coords[2][0])/3;
    var cy = (coords[0][1]+coords[1][1]+coords[2][1])/3;

    //перевірка чи введеного коефіцієнт масштабування
    if(document.getElementById("scale").value !== ""){
        let scale = parseFloat(document.getElementById("scale").value.toString());
        //перевірка чи коефіцієнт менший 0
        if(scale<=0){
            alert("ВВедений коефіцієнт повинен бути більшим за 0 та меншим за 3. Спробуйте ще раз.");
            return;
        }
        coords = MultiblyMatrix(coords, [[scale, 0, 0], [0, scale, 0], [0, 0, 1]]);
        //обчислення центру масштабованого трикутника        
        var cx1 = (coords[0][0]+coords[1][0]+coords[2][0])/3;
        var cy1 = (coords[0][1]+coords[1][1]+coords[2][1])/3;
        //обчислення зсуву від масштабування
        var n = cx - cx1;
        var m = cy - cy1;
        //зсув масштабованого трикутника на початкове місце
        coords = MultiblyMatrix(coords, [[1, 0, 0], [0, 1, 0], [n, m, 1]]);        

        cx = (coords[0][0]+coords[1][0]+coords[2][0])/3;
        cy = (coords[0][1]+coords[1][1]+coords[2][1])/3;
        [x1, y1, x2, y2, x3, y3] = [coords[0][0], coords[0][1], coords[1][0], coords[1][1], coords[2][0], coords[2][1]];    
    }
    
    x1 = center + x1*11; x2 = center + x2*11; x3 = center + x3*11;
    y1 = center - y1*11; y2 = center - y2*11; y3 = center - y3*11;

    ctx.lineWidth = 2;
    ctx.strokeStyle = '#000000';
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.lineTo(x3, y3);
    ctx.closePath();
    ctx.stroke();
    await delay(200);

    const turn = Math.PI / 6;
    const sin30 = Math.sin(turn);
    const cos30 = Math.cos(turn);
    var param = 
        [[cos30, sin30, 0],
        [sin30*(-1), cos30, 0],
        [0, 0, 1]];
    

    while(true){
        //поворот трикутника на 30 градусів відносно центру системи координат
        coords = MultiblyMatrix(coords, param);
        //обчислення центру повернутого трикутника
        var cx1 = (coords[0][0]+coords[1][0]+coords[2][0])/3;
        var cy1 = (coords[0][1]+coords[1][1]+coords[2][1])/3;
        //обчислення зсув від повертання
        var n = cx - cx1;
        var m = cy - cy1;
        //зсув повернутого трикутника на початкове місце
        coords = MultiblyMatrix(coords, [[1, 0, 0], [0, 1, 0], [n+1, m+1, 1]]);        
        
        cx = (coords[0][0]+coords[1][0]+coords[2][0])/3;
        cy = (coords[0][1]+coords[1][1]+coords[2][1])/3;
        [x1, y1, x2, y2, x3, y3] = [coords[0][0], coords[0][1], coords[1][0], coords[1][1], coords[2][0], coords[2][1]];    

        x1 = center + x1*11; x2 = center + x2*11; x3 = center + x3*11;
        y1 = center - y1*11; y2 = center - y2*11; y3 = center - y3*11;
        //перевірка чи трикутник не виходить за межі канви
        const outCoord = (e) => e > 30 || e < -30;
        if(coords[0].some(outCoord) || coords[1].some(outCoord) || coords[2].some(outCoord)){
            return;
        }

        DrawBackground();
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.lineTo(x3, y3);
        ctx.closePath();
        ctx.stroke();   

        await delay(200);
    }
}

function MultiblyMatrix(a, b){
    var aRows = a.length, aCols = a[0].length,
        bRows = b.length, bCols = b[0].length,
        res = new Array(aRows);  // initialize array of rows
    for (var r = 0; r < aRows; ++r) {
        res[r] = new Array(bCols); // initialize the current row
        for (var c = 0; c < bCols; ++c) {
            res[r][c] = 0;            
            for (var i = 0; i < aCols; ++i) {
                res[r][c] += a[r][i] * b[i][c];
            }
        }
    }
    return res;
}

function downloadAffine(){
    var canvas = document.getElementById("myCanvas");
    let image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
    var link = document.createElement('a');
    link.download = "my-image.png";
    link.href = image;
    link.click();
  }

function ModalWindowHelp(){    
    const CloseHelp = e => {
        const modal = document.querySelector(".modalHelp");
        modal.classList.add("hidden");
    };
    return(
        <section class="modalHelp hidden">
            <div class="flex">
                <p className="spectral-semi-bold-black-24px">Як користуватись сайтом?</p>
                <button class="btn-close" onClick={e => CloseHelp(e)}>⨉</button>
            </div>
            <div className="Info">
                <p className="text spectral-semi-bold-black-19px">
                    У тебе є можливість побачити приклад афінного перетворення. А точніше - рух трикутника, по траєкторії Y=Х з одночасним поворотом на 30 градусів відносно початку координат.
                    <br></br>
                    Щоб дізнатись більше про афінні перетворення натисни кнопку <b>"Інформація"</b>.
                    <br></br>                
                    Для того щоб побудувати перетворення тобі потрібно ввести координати вершин трикутника у відповідних полях (в межах [-15; 15]). 
                    <br></br>
                    За бажання, можеш масштабувати свій трикутник. Для цього введи в поле "Введіть коефіцієнт масштабування" будь-яке число у межах (0; 3].
                    <br></br>
                    Далі натисни кнопку <b>"Побудувати"</b>.
                    <br></br>
                    Якщо тобі сподобався результат і хочеш поділитись ним з друзями, натисни кнопку <b>"Завантажити"</b>.
                    <br></br>
                    <b>Удачі!</b>
                    </p>
            </div>
            <button class="btn-thanks spectral-semi-bold-black-24px" onClick={e => CloseHelp(e)}>Дякую!</button>
        </section>
    );
}

function ModalWindowInfo(){
    const CloseInfo = e => {
        const modal = document.querySelector(".modalInfo");
        modal.classList.add("hidden");
    };
    const openAffineInfoPage = e => {
        e.preventDefault();
        window.location = ("/affineInfo");
    };
    return(
        <section class="modalInfo hidden">
            <div class="flex">
                <p className="spectral-semi-bold-black-24px">Що таке плазма і броунівський рух?</p>
                <button class="btn-close" onClick={e => CloseInfo(e)}>⨉</button>
            </div>
            <div className="InfoBlock">
                <div className="Info">
                    <p className="text spectral-black-19px">Виконання різноманітних дій з геометричними об’єктами є центральною задачею в комп’ютерній графіці. Тому вибір математичних методів і алгоритмів для її реалізації суттєво впливає на ефективність цілої графічної системи. У сучасній комп’ютерній графіці досить широко використовується метод координат, оскільки графічне зображення складається з пікселів, які задаються координатами. Крім цього, координати використовуються для опису розміщення об’єктів та для створення зображень шляхом перетворень з однієї системи координат в іншу.</p>
                </div>
            </div>                                  
            <div className="modalButtons">  
                <button class="btn-thanks spectral-semi-bold-black-24px" onClick={e => openAffineInfoPage(e)}>Дізнатись більше</button>
                <button class="btn-thanks spectral-semi-bold-black-24px" onClick={e => CloseInfo(e)}>Дякую!</button>
            </div>
        </section>
    );
}