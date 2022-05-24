import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { LungCancer } from './pages/lungCancer';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <App/>} />
        <Route path='/lung_cancer' element={<LungCancer disease='lung_cancer' />} />
        <Route path='/heart_disease' element={ <LungCancer disease='heart_disease'/>} />
        <Route path='/hypothyroid' element={ <LungCancer disease='hypothyroid'/>} />
        <Route path='/diabetes' element={ <LungCancer disease='diabetes'/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);