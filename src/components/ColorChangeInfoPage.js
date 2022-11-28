import React, {Component} from "react";
import Logo from "../favicon.svg"
import "../App.css"

export default function ColorChangeInfoPage(){
    return(
        <div className ="container-center-horizontal">
            <div className ="desktop-2 screen">
                <GroupMenu />
                <ColorChangeInfo/>
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

const clickInfo = e => {
    e.target.classList.toggle("active");
    var panel = e.target.nextElementSibling;
    if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
    } else {
        panel.style.maxHeight = (parseInt(panel.scrollHeight) + 100).toString(10) + "px";
    } 
}
  
const colorChangePage = e => {
    e.preventDefault();
    window.location = ("/colorChange");
};  

export class ColorChangeInfo extends Component {
    constructor(props){
        super(props);
    }
    render(){   
        return(
            <div>
                <div className="acordionDiv">

                    <button className="accordion spectral-semi-bold-black-24px" onClick={clickInfo}>Загальна інформація</button>
                    <div className="panel">
                        <p className="text spectral-black-19px">Люди бачать предмети тому, що вони випромінюють або відображають світло. Світло можна розглядати двозначно:  як потік частинок різної енергії (тоді колір світла визначає енергія частинок) або як потік електромагнітних хвиль високої частоти (у цьому випадку колір визначається  довжиною  хвилі).  Ми  розглядатимемо  <i>світло</i>  як  потік електромагнітних хвиль, який після взаємодії з оточуючим середовищем попадає в око, де в результаті фізичної і хімічної реакції виробляються електроімпульси,  що  сприймаються  мозком  людини. Різна  довжина  хвилі  сприймається  людьми як  різний колір (<i>колір</i> – це один із факторів світлового випромінювання).Видиме світло з найбільшою довжиною хвилі буде червоним (780 нанометрів), із найменшою – синім (380 нанометрів). При зміні довжини хвилі кольори плавно переходять один в одний (рис.1). Чисті кольори існують лише при певних довжинах хвилі (наприклад, чистий фіолетовий – при довжині 400 нм). Найбільш чутливе око людини до зелених кольорів (520 нм), потім до червоного і синього. У видимому спектрі людське око розрізняє 120 кольорів. За  допомогою хвильової теорії, висунутої Гюйгенсом у 1678 р., було пояснено багато властивостей світла, зокрема закони відбиття та заломлення.</p>
                    </div>

                    <button className="accordion spectral-semi-bold-black-24px" onClick={clickInfo}>Моделі</button>
                    <div className="panel">
                        <p className="text spectral-black-19px">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>

                    <button className="accordion spectral-semi-bold-black-24px" onClick={clickInfo}>Перетворення моделей</button>
                    <div className="panel">
                        <p className="text spectral-black-19px">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>
                <div className="infoButtons">  
                    <button class="btn-back spectral-semi-bold-black-24px" onClick={e => colorChangePage(e)}>Повернутись до фракталів</button>
                </div>
                <div className="emptyrow"/>
            </div>
        )
    }
}