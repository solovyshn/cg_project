import React, {Component} from "react";
import Logo from "../favicon.svg"
import "../App.css"

export default function AffineInfoPage(){
    return(
        <div className ="container-center-horizontal">
            <div className ="desktop-2 screen">
                <GroupMenu />
                <AffineInfo/>
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
  
const affinePage = e => {
    e.preventDefault();
    window.location = ("/affine");
};  

export class AffineInfo extends Component {
    constructor(props){
        super(props);
    }
    render(){   
        return(
            <div>
                <div className="acordionDiv">

                    <button className="accordion spectral-semi-bold-black-24px" onClick={clickInfo}>Загальна інформація</button>
                    <div className="panel">
                        <p className="text spectral-black-19px">Виконання різноманітних дій з геометричними об’єктами є центральною задачею в комп’ютерній графіці. Тому вибір математичних методів і алгоритмів для її реалізації суттєво впливає на ефективність цілої графічної системи. У сучасній комп’ютерній графіці досить широко використовується метод координат, оскільки графічне зображення складається з пікселів, які задаються координатами. Крім цього, координати використовуються для опису розміщення об’єктів та для створення зображень шляхом перетворень з однієї системи координат в іншу.</p>
                    </div>

                    <button className="accordion spectral-semi-bold-black-24px" onClick={clickInfo}>Найпростіші двовимірні афінні перетворення</button>
                    <div className="panel">
                        <p className="text spectral-black-19px">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>

                    <button className="accordion spectral-semi-bold-black-24px" onClick={clickInfo}>Тривимірні перевторення</button>
                    <div className="panel">
                        <p className="text spectral-black-19px">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>

                    <button className="accordion spectral-semi-bold-black-24px" onClick={clickInfo}>Визначення матриць перетворень</button>
                    <div className="panel">
                        <p className="text spectral-black-19px">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>

                    <button className="accordion spectral-semi-bold-black-24px" onClick={clickInfo}>Правила виконання перетворень</button>
                    <div className="panel">
                        <p className="text spectral-black-19px">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>

                    <button className="accordion spectral-semi-bold-black-24px" onClick={clickInfo}>Приклади афінних перетворень</button>
                    <div className="panel">
                        <p className="text spectral-black-19px">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>
                <div className="infoButtons">  
                    <button class="btn-back spectral-semi-bold-black-24px" onClick={e => affinePage(e)}>Повернутись до фракталів</button>
                </div>
                <div className="emptyrow"/>
            </div>
        )
    }
}