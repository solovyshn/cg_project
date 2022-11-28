import React, { useEffect, useState } from "react";
import Logo from "../favicon.svg"
import "../App.css"

export default function ColorChangePage(){
    return(
        <div className ="container-center-horizontal">
            <div className ="desktop-2 screen">
                <GroupMenu />
                <ModalWindowHelp/>
                <ModalWindowInfo/>
                <div className ="flex-row">
                    <EditPhotoParams/>
                    <CanvaOriginal/>
                    <ChangeBrightnessCanva/>
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
    const affinePage = e => {
        e.preventDefault();
        window.location = ("/affine");
    }
    return (
        <div className ="group-menu">
            <div className ="group-container">
                <button className="text spectral-extra-bold-black-38px overlap-group3_1" onClick={e => fractalPage(e)} >Фрактали</button>
                <button className="text spectral-extra-bold-black-38px overlap-group2" onClick={e => colorChangePage(e)}>Зміна колірної схеми</button> 
                <button className="text spectral-extra-bold-black-38px overlap-group1_1" onClick={e => affinePage(e)}>Афiннi перетворення</button>   
                <img className ="group" src ={Logo} onClick={e => mainPage(e)} alt ="Group"/>
            </ div >
        </ div >
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
                    У тебе є можливість побудувати порівняти 2 колірні моделі: HSV та CMYK.
                    <br></br>
                    Щоб дізнатись більше про ці та інші моделі натисни кнопку <b>"Інформація"</b>.
                    <br></br>                
                    Для того щоб почати роботу з колірними моделями, завантаж будь-яке фото з твого пристрою, натиснувши кнопку <b>"Upload"</b> та вибравши відповідне зображення.
                    <br></br>       
                    Тоді твоє зображення завантажиться у двох сусідніх канвах. Ліва канва - твоє зображення, переведене у колірну модель <b>CMYK</b>, а справа - у <b>HSV</b>.
                    <br></br>       
                    Щоб перевірити як відрізняються ці моделі, ти можеш навести курсор на будь-яке місце на зображенні та подачили значення координат вибраного кольору у моделях HSV та CMYK.
                    <br></br>
                    Окрім цього, ти можеш змінювати яскравість блакитного кольору на правому зображенні. Для цього просто рухай бігунок, що розташований під написом <b>"Змінити яскравість по блакитному."</b>
                    <br></br>                           
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
    const openColorChangeInfoPage = e => {
        e.preventDefault();
        window.location = ("/colorChangeInfo");
    };
    return(
        <section class="modalInfo hidden">
            <div class="flex">
                <p className="spectral-semi-bold-black-24px">Що це за моделі кольорів HSV та CMYK?</p>
                <button class="btn-close" onClick={e => CloseInfo(e)}>⨉</button>
            </div>
            <div className="InfoBlock">
                <div className="Info">
                    <p className="text spectral-semi-bold-black-19px">
                    Субтрактивна модель <b>CMY</b> - апаратно-орієнтована модель, яка використовується для формування кольорів на основі принципу віднімання від падаючого світлового потоку частини, яка формується шаром фарби з трьох компонент <i>(блакитний/Cyan, Magenta/пурпурний, Yellow/жовтий)</i>.
                    <br/>Насправді на практиці користуються системою <b>CMYK</b> (а не CMY). Компонента K  <i>(від “Black”)</i> введена додатково, оскільки це не економно змішувати 3 “непрості” фарби для отримання “простого” чорного кольору, тим більше ідеального чорного кольору змішуванням трьох базових не отримується (модель допускає певні неточності).
                    <br/>Перцепція — чуттєве сприйняття зовнішніх предметів людиною. Призначення перцепційних моделей кольорів відобразити зміст сприйняття кольору людиною. Такі моделі використовуються , щоб позбутися обмежень, що накладаються апаратним забезпеченням. Перцепційними моделями є HSV, HSL, HSB, HSI.
                    <br/>Ці моделі застосовуються у задачах коли коректування яскравості, насиченості, перетворення зображення в сіре та ін.
                    <br/>HSV задається трьома атрибутами:
                    <br/><b>Hue</b> – колірний тон,
                    <br/><b>Saturation</b> - насиченість ,
                    <br/><b>Value</b> – інтенсивність.
                    </p>
                    <p className="text spectral-semi-bold-black-19px">
                        Щоб дізнатись більше про фрактали, натискай на кнопку <b>"Дізнатись більше"</b>.
                    </p>
                </div>
            </div>            
            <div className="modalButtons">
                <button class="btn-thanks spectral-semi-bold-black-24px" onClick={e => CloseInfo(e)}>Дякую!</button>                
                <button class="btn-thanks spectral-semi-bold-black-24px" onClick={e => openColorChangeInfoPage(e)}>Дізнатись більше</button>
            </div>

        </section>
    );
}

//функція переводить колір з RGB в HSV
function RGBtoHSV(r, g, b) {
    r /= 255; g /= 255; b /= 255;
  
    var max = Math.max(r, g, b), min = Math.min(r, g, b);
    var h, s, v = max;
  
    var d = max - min;
    s = max === 0 ? 0 : d / max;
  
    if (max === min) {
      h = 0; // achromatic
    } else {
        switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
         }
  
      h /= 6;
    }
    h = Math.floor(h*360);
    s = Math.floor(s*100);
    v = Math.floor(v*100);

    return [ h, s, v ];
}

//функція переводить колір з RGB в CMYK
function RGBtoCMYK(r, g, b){
    var computedC = 0;
    var computedM = 0;
    var computedY = 0;
    var computedK = 0;

    if (r===0 && g===0 && b===0) {
        computedK = 1;
        return [0,0,0,1];
    }

    computedC = 1 - (r/255);
    computedM = 1 - (g/255);
    computedY = 1 - (b/255);

    var minCMY = Math.min(computedC, Math.min(computedM,computedY));
    computedC = (computedC - minCMY) / (1 - minCMY) ;
    computedM = (computedM - minCMY) / (1 - minCMY) ;
    computedY = (computedY - minCMY) / (1 - minCMY) ;
    computedK = minCMY;

    return [computedC, computedM, computedY, computedK];
}

//функція переводить колір з HSV в RGB
function HSVtoRGB(h, s, v){
    var r, g, b, i, f, p, q, t;
    h/=360;
    s/=100;
    v/=100;

    i = Math.floor(h * 6);
    f = h * 6 - i;
    p = v * (1 - s);
    q = v * (1 - f * s);
    t = v * (1 - (1 - f) * s);

    switch (i % 6) {
        case 0: r = v; g = t; b = p; break;
        case 1: r = q; g = v; b = p; break;
        case 2: r = p; g = v; b = t; break;
        case 3: r = p; g = q; b = v; break;
        case 4: r = t; g = p; b = v; break;
        case 5: r = v; g = p; b = q; break;
    }

    r = Math.round(r * 255);
    g = Math.round(g * 255);
    b = Math.round(b * 255);

    return [r, g, b];
}

//функція переводить колір з CMYK в RGB
function CMYKtoRGB(c, m, y, k){
    var r = 255 * (1 - c) * (1 - k);
    var g = 255 * (1 - m) * (1 - k);
    var b = 255 * (1 - y) * (1 - k);
    return [r, g, b];
}

function EditPhotoParams(){
    const [file, setFile] = useState();
    const [brightness, setBrightness] = useState();
    const hiddenFileInput = React.useRef(null);
    function handleChange(e) {
        console.log(e.target.files[0]);
        //первірка чи обраний файл - зображення
        if(e.target.files[0].type.startsWith("image/")){
            setFile(URL.createObjectURL(e.target.files[0]));
        } else {
            alert("Неправильний тип файлу. Ви можете завантажити лише зображення.");
        }
    }    
    const handleClick = () => {
        hiddenFileInput.current.click();
    };
    useEffect(() => {
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.src = file;
        img.onload = () => {
            //заповнення першої канви зображенням
            const canvas1 = document.getElementById("myCanvasCH");
            let ctx1 = canvas1.getContext('2d');   
            canvas1.width=500;
            canvas1.height=500*img.height/img.width;
            ctx1.clearRect(0, 0, canvas1.width, canvas1.height);
            ctx1.drawImage(img, 0, 0, canvas1.width, canvas1.height);
            //отримування масиву значень кольорів пікселів у RGB
            var imgData = ctx1.getImageData(0, 0, canvas1.width, canvas1.height);
            var data = imgData.data;
            for(let i=0; i<data.length; i+=4){
                //перевід пікселів з RGB в HSV та назад, для повторного малювання
                let hsv = RGBtoHSV(data[i], data[i+1], data[i+2]);
                let rgb = HSVtoRGB(hsv[0], hsv[1], hsv[2]);
                imgData.data[i] = rgb[0];
                imgData.data[i+1] = rgb[1];
                imgData.data[i+2] = rgb[2];
            }
            ctx1.clearRect(0, 0, canvas1.width, canvas1.height);
            ctx1.putImageData(imgData,  0, 0);

            //заповнення другої канви зображенням
            const canvas2 = document.getElementById("myCanvasORG");
            let ctx2 = canvas2.getContext('2d')
            canvas2.width=500;
            canvas2.height=500*img.height/img.width;
            ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
            ctx2.drawImage(img, 0, 0, canvas2.width, canvas2.height);
            //отримування масиву значень кольорів пікселів у RGB
            imgData = ctx2.getImageData(0, 0, canvas2.width, canvas2.height);
            data = imgData.data;
            for(let i=0; i<data.length; i+=4){
                //перевід пікселів з RGB в CMYK та назад, для повторного малювання
                let cmyk = RGBtoCMYK(data[i], data[i+1], data[i+2]);
                let rgb = CMYKtoRGB(cmyk[0], cmyk[1], cmyk[2], cmyk[3]);
                imgData.data[i] = rgb[0];
                imgData.data[i+1] = rgb[1];
                imgData.data[i+2] = rgb[2];
            }
            ctx1.clearRect(0, 0, canvas1.width, canvas1.height);
            ctx1.putImageData(imgData,  0, 0);
          };
    },[file])

    //зміна яскравості по блакитному
    useEffect(() => {
        const canvas1 = document.getElementById("myCanvasORG");
        const ctx1 = canvas1.getContext('2d');
        if(ctx1){
            //отримування масиву значень кольорів пікселів у RGB
            const imgData = ctx1.getImageData(0, 0, canvas1.width, canvas1.height);
            const data = imgData.data;
            
            for(let i=0; i<data.length; i+=4) {
                //перевід значення кольору кожного пікселя в HSV та перевірка, чи колір входить в діапазон блакитих
                let hsv = RGBtoHSV(data[i], data[i+1], data[i+2]);
                if(hsv[0]>=151 && hsv[0]<=210){
                    hsv[2]+=parseInt(brightness);
                    if(hsv[2]>100){
                        hsv[2]=100;
                    }else if(hsv[2]<0){
                        hsv[2]=0;
                    }
                }
                //переведення в RGB для майбутнього перемальовування зображення
                let rgb = HSVtoRGB(hsv[0], hsv[1], hsv[2]);
                imgData.data[i] = rgb[0];
                imgData.data[i+1] = rgb[1];
                imgData.data[i+2] = rgb[2];
            }
            const canvas2 = document.getElementById("myCanvasCH");
            const ctx2 = canvas2.getContext('2d');
            ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
            //малювання нового зображення, зі зміненою яскравістю по блакитному
            ctx2.putImageData(imgData,  0, 0);
        }
    }, [brightness]);
    
    const downloadImage = () =>{
        var canvas = document.getElementById("myCanvasCH");
        let image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
        var link = document.createElement('a');
        link.download = "my-image.png";
        link.href = image;
        link.click();
    }
    
    const ShowHelp = () => {
        const modal = document.querySelector(".modalHelp");
        modal.classList.remove("hidden");
    }
    
    const ShowInfo = () => {
        const modal = document.querySelector(".modalInfo");
        modal.classList.remove("hidden");
    }   
    return(
        <div className ="overlap-group6" >
            <div className="mainButtons">
                <button id="build" className="mainButton spectral-bold-black-20px" onClick={handleClick}><i class="fa-solid fa-upload" ></i>  Upload</button>
                <input type="file" onChange={handleChange} ref={hiddenFileInput} style={{display:'none'}}/>
                <button className="mainButton spectral-bold-black-20px" onClick={downloadImage}><i class="fa-solid fa-download"></i>  Download</button>
            </div>
            <p className="spectral-semi-bold-bon-jour-24px">Змінити яскравість <br></br>по блакитному:</p>
            <input type="range" className="brightnessRange" id="brightness" 
                    min="-100" max="100" step="5" 
                    value={brightness} onChange={e => setBrightness(e.target.value)}></input>
            <div>
                <p className="spectral-semi-bold-bon-jour-24px">HSV: <p id="textHSV"></p></p>
                <p className="spectral-semi-bold-bon-jour-24px">CMYK: <p id="textCMYK"></p></p>
            </div>
            <div>
                <div className="helpButtons">
                    <button className="Button spectral-bold-black-20px" onClick={e => ShowInfo()}><i class="fa fa-circle-info"></i>  Інформація</button>
                    <button className="Button spectral-bold-black-20px" onClick={e => ShowHelp()}> Допомога</button>  
                </div>
            </div>
        </div>
    );
}

function handleMouseMove(event){
    var rect = event.target.getBoundingClientRect();
    //знаходження координати точки на канві
    var x = event.clientX - Math.round(rect.left);
    var y = event.clientY - Math.round(rect.top); 
    const canvas = document.getElementById(event.target.id);
    let ctx = canvas.getContext('2d');
    //зчитування значення кольору вибраного пікселя
    let imgData = ctx.getImageData(x, y, 1, 1);
    //перевір RGB в HSV та CMYK
    let hsv = RGBtoHSV(imgData.data[0], imgData.data[1], imgData.data[2]);
    let cmyk = RGBtoCMYK(imgData.data[0], imgData.data[1], imgData.data[2]);
    var hsvTEXT = document.getElementById("textHSV");
    var cmykTEXT = document.getElementById("textCMYK");
    hsvTEXT.textContent = hsv[0] + ", " + hsv[1] + ", " + hsv[2];
    cmykTEXT.textContent = Math.round(cmyk[0]*100) + ", " + Math.round(cmyk[1]*100) + ", " + Math.round(cmyk[2]*100) + ", " + Math.round(cmyk[3]*100);
}

function CanvaOriginal(){
    return(
    <div className="ColorImage" >
        <canvas id="myCanvasORG" width="500" height="500" onMouseMove={handleMouseMove}/>
    </div>
);

}

function ChangeBrightnessCanva(){
    return(
        <div className="ColorImage" >
            <canvas id="myCanvasCH" width="500" height="500" onMouseMove={handleMouseMove}/>
        </div>
    );
}