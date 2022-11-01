import React from 'react';
import logo from './logo.svg';
import './App.css';
import TruckContainer from './containers/TruckContainer';
import TruckDatagridComponent from './components/TruckDatagridComponent';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import { TruckDetail } from './components/TruckDetail';

function App() {
  return (
    <Routes>
      <Route path="/" element={<TruckContainer/>}>
        <Route path="/truck" element={<TruckDatagridComponent/>} />
        <Route path="/truck/:truckId" element={<TruckDetail/>} />
      </Route>
    </Routes>
  
  );
}

export default App;
