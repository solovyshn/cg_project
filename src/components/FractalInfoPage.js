import React, {Component} from "react";
import Logo from "../favicon.svg"
import "../App.css"

export default function FractalInfoPage(){
    return(
      <div className ="container-center-horizontal">
          <div className ="desktop-2 screen">
              <GroupMenu />
              <FractalInfo/>
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
  
const fractalPage = e => {
    e.preventDefault();
    window.location = ("/fractal");
};  

export class FractalInfo extends Component {
    constructor(props){
        super(props);
    }
    render(){   
        return(
            <div>
                <div className="acordionDiv">
                    <button className="accordion spectral-semi-bold-black-24px" onClick={clickInfo}>Що таке фрактал?</button>
                    <div className="panel">
                        <p className="text spectral-black-19px">Поняття <b>фрактал</b> і <b>фрактальна геометрія</b>, що з’явилися в кінці 70-х, із середини 80-х міцно увійшли до ужитку математиків і програмістів. Слово <i>фрактал</i> утворено від латинського “fractus”, що в перекладі означає “той, що складається з фрагментів”. Воно було запропоноване Бенуа Мандельбротом у 1975 році для позначення нерегулярних, але самоподібних структур, якими він займався. Народження фрактальної геометрії прийнято пов’язувати з виходом у 1977 році книги Мандельброта “The Fractal Geometry of Nature”. У його роботах використані наукові результати інших учених, що працювали в період 1875–1925 років у тій же області (Пуанкаре, Фату, Жюліа, Кантор, Хаусдорф). Але тільки у наш час вдалося об’єднати їхні роботи в єдину систему.</p>
                        <p className="text spectral-black-19px">Роль фракталів в комп’ютерній графіці сьогодні велика. Вони приходять на допомогу, наприклад, коли потрібно за допомогою декількох коефіцієнтів задати лінії і поверхні дуже складної форми. З погляду комп’ютерної графіки, фрактальна геометрія незамінна під час генерації штучних хмар, гір, поверхні морів. Фактично знайдено спосіб легкого представлення складних  об’єктів, які схожі на природні.</p>
                        <p className="text spectral-black-19px">Однією з основних властивостей фракталів є самоподібність. У найпростішому випадку невелика частина фрактала містить інформацію про весь фрактал.</p>
                        <p className="text spectral-black-19px">Визначення фрактала, дане Мандельбротом, звучить так: <i>“Фракталом називається структура, що складається з частин, які в якомусь сенсі подібні до цілого”</i>.</p>
                        <h3></h3>
                    </div>

                    <button className="accordion spectral-semi-bold-black-24px" onClick={clickInfo}>Геометричні фрактали</button>
                    <div className="panel">
                        <p className="text spectral-black-19px">Фрактали цього класу найнаочніші. Цей тип фракталів утворюється шляхом простих геометричних побудов. Наприклад, у двомірному випадку їх отримують за допомогою деякої ламаної (або поверхні в тривимірному випадку), званої генератором. За один крок алгоритму кожен з відрізків (складових ламаної) замінюється на ламану-генератор, у відповідному масштабі. У результаті нескінченного повторення цієї процедури, виходить геометричний фрактал.</p>
                        <p className="text spectral-black-19px">Перші ідеї фрактальної геометрії виникли в ХІХ ст. Кантор за допомогою простої рекурсивної процедури перетворив лінію на набір незв’язаних крапок (так званий <b><i>Пил Кантора</i></b>). Він брав лінію і видаляв центральну третину, після цього повторював те ж саме з відрізками.</p>
                        <p className="text spectral-black-19px">Пеано ж намалював особливий вид <b><i><a href="https://www.cut-the-knot.org/Curriculum/Geometry/PeanoComplete.shtml">лінії Пеано</a></i></b>. Для її малювання італійський математик взяв квадрат і видалив у ньому нижню сторону. Утворилась крива Пеано 1-го порядку. Далі вчений зменшив квадрат рівно вдвічі, і зробив його 4 копії. Дві з них поставив паралельно одна одній, а інші дві ще повернув на чверть обороту в протилежні сторони та з’єднав кінці ліній квадратів трьома однаковими відрізками, довжиною, що дорівнює стороні нового зменшеного квадрата. Утворилась крива Пеано 2-го порядку. Процедура повторюється знову: зменшується крива 2-го порядку вдвічі, робиться чотири її копії, дві з яких повертаються, і знову з’єднуються відрізками, які теж зменшені вдвічі. Повторювати даний алгоритм можна до нескінченності.</p>
                    </div>

                    <button className="accordion spectral-semi-bold-black-24px" onClick={clickInfo}>Алгебрачні фрактали</button>
                    <div className="panel">
                        <p className="text spectral-black-19px">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>

                    <button className="accordion spectral-semi-bold-black-24px" onClick={clickInfo}>Стохастичні фрактали</button>
                    <div className="panel">
                        <p className="text spectral-black-19px">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>

                    <button className="accordion spectral-semi-bold-black-24px" onClick={clickInfo}>IFS-фрактали</button>
                    <div className="panel">
                        <p className="text spectral-black-19px">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>
                <div className="infoButtons">  
                    <button class="btn-back spectral-semi-bold-black-24px" onClick={e => fractalPage(e)}>Повернутись до фракталів</button>
                </div>
            </div>
        )
    }
}  