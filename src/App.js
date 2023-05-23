import React from "react";
import Weather from "./pages/weather"
import Card from "./pages/card"
import { Routes, HashRouter, Route} from 'react-router-dom';
const App = () => {
  return (
    <>
    <HashRouter basename='/'>
      <Routes>
      <Route path="/"></Route>
      <Route path='/weather' element={<Weather />}> </Route>
      <Route path='/card' element={<Card />}> </Route>
      </Routes>
    </HashRouter>
    </>
  );
};

export default App;