import "../App.css"
import React from 'react';
import Logo from "../favicon.svg"
import Fractal from "../imagesMainPage/fractalMainPage.jpg"
import Color from "../imagesMainPage/colorMainPage.jpg"
import Affine from "../imagesMainPage/affineMainPage.png"

 export default function MainPage(){
    return(
        <div className ="container-center-horizontal">
            <div className ="desktop-2 screen">
                <GroupMenu />
            <div className="flex-row">
                <ChoosePage/>
                <GeneralInfo/>
            </div>
            </ div > 
        </ div >
    );
}

function GroupMenu ( ) {
    return (
      <div className ="group-menu">
          <div className ="group-container">
              <img className ="group-main"src ={Logo} alt ="Group"/>
          </ div >
      </ div >
   );
}

function ChoosePage(){    
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
        <div className="chooseMainPage">          
            <button className="text spectral-extra-bold-black-38px overlap-group4_1" onClick={e => fractalPage(e)}>Фрактали</button>
            <img className="imagesMain" src={Fractal} alt="Example of fractal..." onClick={e => fractalPage(e)}/>
            <button className="text spectral-extra-bold-black-38px overlap-group4_1" onClick={e => colorChangePage(e)}>Зміна колірної схеми</button> 
            <img className="imagesMain" src={Color} alt="Example of color..." onClick={e => colorChangePage(e)}/>
            <button className="text spectral-extra-bold-black-38px overlap-group4_1" onClick={e => affinePage(e)}>Афiннi перетворення</button> 
            <img className="imagesMain" src={Affine} alt="Example of affine..." onClick={e => affinePage(e)}/>
        </div>
    )
}

function GeneralInfo() {
    return(
        <div className="infoMainPage">
            <p className="text spectral-extra-bold-black-48px title">
                Що таке<br/>комп'ютерна графіка?
            </p>
            <p className="text spectral-semi-bold-bon-jour-24px info">
            Комп'ютерна графіка - це спеціальна галузь комп’ютерних дисциплін, що вивчає методи і засоби створення та 
                обробки зображень за допомогою програмно-апаратних обчислювальних комплексів.
            </p>
            <p className="text spectral-semi-bold-bon-jour-24px info">
                Структура та методи комп’ютерної графіки засновані на досягненнях фундаментальних та прикладних наук: математики, 
                фізики, хімії, біології, статистики, програмування тощо. Це стосується, як програмних, так і апаратних засобів 
                створення та обробки зображень. Тому комп’ютерна графіка є однією з найважливіших ділянок інформатики та стимулює 
                розвиток комп’ютерної індустрії.
            </p>
        </div>
    )
}