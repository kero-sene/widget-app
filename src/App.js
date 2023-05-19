import React from "react";
import Weather from "./pages/weather"
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
const App = () => {
  return (
    <>
    <HashRouter>
    <Routes>
      <Route path='/weather' element={<Weather />}> </Route>
    </Routes>
    </HashRouter>
    </>
  );
};

export default App;
