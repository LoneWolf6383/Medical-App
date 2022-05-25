import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { LungCancer } from './pages/lungCancer';
import { Diabetes } from './pages/diabetes';
import { HeartDisease } from './pages/heartDisease';
import { HypoThyroid } from './pages/hypoThyroid';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <App/>} />
        <Route path='/lung_cancer' element={<LungCancer disease='lung_cancer' />} />
        <Route path='/heart_disease' element={ <HeartDisease disease='heart_disease'/>} />
        <Route path='/hypo_thyroid' element={ <HypoThyroid disease='hypothyroid'/>} />
        <Route path='/diabetes' element={ <Diabetes disease='diabetes'/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);