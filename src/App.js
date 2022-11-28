import "./App.css"
import React from 'react';
import { BrowserRouter, Route, Routes} from "react-router-dom";
 import FractalPage from './components/FractalPage.js';
import MainPage from './components/MainPage.js';
import ColorChangePage from './components/ColorChangePage.js';
import AffinePage from './components/AffinePage.js';
import FractalInfoPage from './components/FractalInfoPage.js'
import ColorChangeInfoPage from "./components/ColorChangeInfoPage";
import AffineInfoPage from "./components/AffineInfoPage";

function App() {
 return (
    <BrowserRouter>
      <div className="App" >
            <Routes>
               <Route  path="/" element={<MainPage/>} />
               <Route path="/fractal" element={<FractalPage/>}/>
               <Route path="/colorChange" element={<ColorChangePage/>}/>
               <Route path="/affine" element={<AffinePage/>}/>
               <Route path="/fractalInfo" element={<FractalInfoPage/>}/>
               <Route path="/colorChangeInfo" element={<ColorChangeInfoPage/>}/>
               <Route path="/affineInfo" element={<AffineInfoPage/>}/>
            </Routes>
          </div>
    </BrowserRouter>    
   );
 }

export default App;
