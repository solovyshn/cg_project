import React from "react";
import Logo from "../favicon.svg"
import "../App.css"
import brownMotion from "../components/Brounovskoe-dvizhenie.jpg"

export default function FractalPage(){
    return(
        <div className ="container-center-horizontal">
            <div className ="desktop-2 screen">
                <GroupMenu />
                <ModalWindowHelp/>
                <ModalWindowInfo/>
                <div className ="flex-row">
                    <ChooseFractal/>
                    <Fractal/>
                </div >
            </div > 
        </div >   
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
    const affinePage = e => {
        e.preventDefault();
        window.location = ("/affine");
    };
    return (
        <div className ="group-menu">
            <div className ="group-container">
                <button className="text spectral-extra-bold-black-38px overlap-group3" onClick={e => fractalPage(e)} >Фрактали</button>
                <button className="text spectral-extra-bold-black-38px overlap-group2_1" onClick={e => colorChangePage(e)}>Зміна колірної схеми</button> 
                <button className="text spectral-extra-bold-black-38px overlap-group1_1" onClick={e => affinePage(e)}>Афiннi перетворення</button>   
                <img className ="group" src ={Logo} onClick={e => mainPage(e)} alt ="Group"/>
            </ div >
        </ div >
    );
}
            
function ChooseFractal ( ) {    
    const ShowHelp = e => {
        const modal = document.querySelector(".modalHelp");
        modal.classList.remove("hidden");
    }
    const ShowInfo = e => {
        const modal = document.querySelector(".modalInfo");
        modal.classList.remove("hidden");
    }
    return (
        <div className ="overlap-group6" >
            <div className="choose"><p className="spectral-semi-bold-bon-jour-24px">Виберіть тип фракталу:</p>
                <div className="bla">
                    <input type="radio" id="brownian" name="fractal" value="brownian"/>
                    <label for="brownian" className="overlap-group6-1 spectral-bold-black-20px">Броунівський рух</label><br></br>
                </div>
                <p></p>
                <div className="bla">
                    <input type="radio" id="plasma" name="fractal" value="plasma"/>
                    <label for="plasma" className="overlap-group6-1 spectral-bold-black-20px">Плазма</label><br></br>
                </div>
            </div>
            <div className="iterations">
                <p className="spectral-semi-bold-bon-jour-24px">Кількість ітерацiй:</p>
                <input type="number" id="iterationsNumber" className="overlap-group6-2" min="1" max="10" step="1" placeholder="1" required/>
            </div>
            <div>
                <div className="mainButtons">
                    <button id="build" className="mainButton spectral-bold-black-20px" onClick={BuildFractal}><i class="fa-solid fa-pen-to-square"></i>  Побудувати</button>
                    <button className="mainButton spectral-bold-black-20px" onClick={downloadFractal}><i class="fa-solid fa-download"></i>  Завантажити</button>
                </div>
                <div className="helpButtons">
                    <button className="Button spectral-bold-black-20px" onClick={e => ShowInfo(e)}><i class="fa fa-circle-info"></i>  Інформація</button>
                    <button className="Button spectral-bold-black-20px" onClick={e => ShowHelp(e)}> Допомога</button>  
                </div>
            </div>
        </div>
    );
}


function Fractal(){
    return(
        <div className="FractalImage" >
            <canvas id="myCanvas" width="700" height="700"/>
        </div>
    );
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
                    У тебе є можливість побудувати 2 стохастичних фрактали: плазму і броунівський рух.
                    <br></br>
                    Щоб дізнатись більше про фрактали натисни кнопку <b>"Інформація"</b>.
                    <br></br>                
                    Для того щоб побудувати фрактал тобі потрібно обрати його тип та вибрати кількість ітерацій (від 1 до 10). 
                    
                    Далі натисни кнопку <b>"Побудувати"</b>.
                    <br></br>
                    Якщо тобі сподобався результат і хочеш поділитись ним з друзями, натисни кнопку <b>"Завантажити"</b>.
                    <br></br>
                    <b>Щасти!</b>
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
    const openFractalInfoPage = e => {
        e.preventDefault();
        window.location = ("/fractalInfo");
    };
    return(
        <section class="modalInfo hidden">
            <div class="flex">
                <p className="spectral-semi-bold-black-24px">Що таке плазма і броунівський рух?</p>
                <button class="btn-close" onClick={e => CloseInfo(e)}>⨉</button>
            </div>
            <div className="InfoBlock">
                <div className="Info">
                    <p className="text spectral-semi-bold-black-19px">
                    Броунівський рух — хаотичний рух частинок у рідині чи газі. 
                    Рух викликаний швидкими атомами або молекулами, які вдаряються об частинки. 
                    Броунівський рух відкрив у 1827 році ботанік Роберт Браун. У 1827 році, 
                    дивлячись у мікроскоп на частинки, захоплені в порожнинах у пилкових зернах у воді, 
                    він зауважив, що частинки рухаються крізь воду; але він не зміг з'ясувати, що спричинило цей рух.
                    Одноіменний фрактал - зображення хаотичного руху частинки на певній ділянці.
                    </p>
                    <p className="text spectral-semi-bold-black-19px">
                        Щоб дізнатись більше про фрактали, натискай на кнопку <b>"Дізнатись більше"</b>.
                    </p>
                </div>
                <div>
                    <img src={brownMotion}></img>
                </div>
            </div>            
            <div className="modalButtons">  
                <button class="btn-thanks spectral-semi-bold-black-24px" onClick={e => openFractalInfoPage(e)}>Дізнатись більше</button>
                <button class="btn-thanks spectral-semi-bold-black-24px" onClick={e => CloseInfo(e)}>Дякую!</button>          
            </div>
        </section>
    );
}

function BuildFractal() {
    var radios = document.getElementsByName('fractal');
    var itr = document.getElementById("iterationsNumber").value;
    var canvas = document.getElementById("myCanvas");
    var checked = false;
    for (var i = 0, length = radios.length; i < length; i++) {
        //перевірка чи обрано фрактал плазма
        if (radios[i].checked && radios[i].value==="plasma") 
        {
            //перевірка чи введено кількість ітерацій
            if(itr<1||itr>10){
                alert('Введіть правильну кількість ітерацій. В межах [1; 10].');
                return;
            } 
            var roughness;
            var width, height;
                
            //ініціалізація локальних змінних
            roughness = 11-itr;
            width = canvas.width;
            height = canvas.height;
            let ctx = canvas.getContext("2d");
            ctx.clearRect(0,0, width, height);
        
            //генерування точок
            let points = getPoints(width, height, roughness, itr);
                
            //малювання точок
            drawPlasma(canvas, points, itr);
            checked=true;
            return;
        }
        //перевірка чи обрано фрактал броунівський рух 
        else if(radios[i].checked && radios[i].value==="brownian")
        {  
            //перевірка чи введено кількість ітерацій  
            if(itr<1||itr>10){
                alert("Введіть правильну кількість ітерацій. В межах [1; 10].");
                return;
            } 

            //малювання фракталу
            drawBrownianMotion(canvas, itr);
            checked=true;
            return;
        }
    }
    //перевірка чи вибрано фрактал  
    if(checked === false){
        alert("Виберіть тип фракталу");
        return;
    }
};

function drawBrownianMotion(canvas, itr){
    let ctx = canvas.getContext("2d");
    let leng = 21-itr;
    let x = ~~(canvas.width/2);
    let y = ~~(canvas.height/2);
    var points = [];
    points[0] = [x, y];
    //цикл, що заповнює масив рандомними точками
    for(var i=1; i< 10000 * itr; i++){
        let lengX=(Math.random()*10)%leng;
        let x1 = Math.random();
        ( x>= canvas.width) ? x-=lengX : (x1 > 0.5 || x<=0) ? x+=lengX : x-=lengX;
        let lengY=(Math.random()*10)%leng;
        let y1 = Math.random();
        ( y>= canvas.height) ? y-=lengY : (y1 <= 0.5|| y<=0) ? y+=lengY : y-=lengY;
        points[i] = [x, y];
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = "rgba(0,0,0,0.2)";
    //малювання броунівського руху по рандомних точках
    for(i = 0; i<(10000 * itr)-1; i++)
    {
        ctx.beginPath();
        ctx.moveTo(points[i][0], points[i][1]);
        ctx.lineTo(points[i+1][0], points[i+1][1]);
        ctx.stroke();
    }
}

function downloadFractal(){
    var canvas = document.getElementById("myCanvas");
    let image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
    var link = document.createElement('a');
    link.download = "my-image.png";
    link.href = image;
    link.click();
}

function drawPlasma(canvas, points, itr) {
    let ctx = canvas.getContext("2d");
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	for (var x = 0; x < canvas.width; x+=1)
	{
		for (var y = 0; y < canvas.height; y+=1)
		{
			//отримання кольору для кожного пікселю
			var color = getColor(points[x][y]);
			ctx.fillStyle = "rgb("+color.r+","+color.g+","+color.b+")";
			ctx.fillRect(x, y, 1, 1);
		}
	}
}	
function getPoints(width, height, rough, itr)  {  
	var p1, p2, p3, p4;  
	var points = [];
	for (var x = 0; x < width; x++) {
		points[x] = [];
    }
	//надання кутам рандомних кольорів
	p1 = Math.random();
	p2 = Math.random();
	p3 = Math.random();
	p4 = Math.random();
	let roughness = rough;
	let totalSize = width + height;
	splitRect(points, 0, 0, width, height, p1, p2, p3, p4, totalSize, roughness);
	return points;
}
function splitRect(points, x, y, width, height, p1, p2, p3, p4, totalSize, roughness) {  
	var side1, side2, side3, side4, center;
	var transWidth = ~~(width / 2);
	var transHeight = ~~(height / 2);
	
	//доки квадрат більший за піксель
	if (width > 1 || height > 1) {
    	//центр - середина 4 кутів
		center = ((p1 + p2 + p3 + p4) / 4);
		//довільно зсувається значення центру 
		center += shift(transWidth + transHeight, totalSize, roughness);

		side1 = ((p1 + p2) / 2);
		side2 = ((p2 + p3) / 2);
		side3 = ((p3 + p4) / 2);
		side4 = ((p4 + p1) / 2);
		
		//можливо, середня точка була переміщена за межі, тому це тут виправляється
		center = normalize(center);
		side1 = normalize(side1);
		side2 = normalize(side2);
		side3 = normalize(side3);
		side4 = normalize(side4);
			
		//повторюється функція для 4 квадратів, на які був поділений цей квадрат
		splitRect(points, x, y, transWidth, transHeight, p1, side1, center, side4, totalSize, roughness);
		splitRect(points, x + transWidth, y, width - transWidth, transHeight, side1, p2, side2, center, totalSize, roughness);
		splitRect(points, x + transWidth, y + transHeight, width - transWidth, height - transHeight, center, side2, p3, side3, totalSize, roughness);
		splitRect(points, x, y + transHeight, transWidth, height - transHeight, side4, center, side3, p4, totalSize, roughness);
	}
	else 
	{
		//коли останній квадрат є лише пікселем, то шукаємо середнє його кутів
		points[x][y]= (p1 + p2 + p3 + p4) / 4;
	}
}

function normalize(val)  {  
	return (val < 0) ? 0 : (val > 1) ? 1 : val;
}

function shift(smallSize, totalSize, roughness) { 
    return (Math.random() - 0.5) * smallSize / totalSize * roughness;
}	

function getColor(c) {
	var red = 0, green = 0, blue = 0;
    let colorModif = [255, 255, 255];

	//r
	if (c < 0.5)
		red = c * 2;
	else
		red = (1.0 - c) * 2;
 
	//g
	if (c >= 0.3 && c < 0.8)
		green = (c - 0.3) * 2;
	else if (c < 0.3)
		green = (0.3 - c) * 2;
	else
		green = (1.3 - c) * 2;
 
	//b
	if (c >= 0.5)
		blue = (c - 0.5) * 2;
	else
		blue = (0.5 - c) * 2;
				
	return {
		r: ~~(red * colorModif[0]),
		g: ~~(green * colorModif[1]),
		b: ~~(blue * colorModif[2])
	};
}