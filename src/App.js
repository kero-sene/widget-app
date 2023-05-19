import React from "react";
import Weather from "./pages/weather"
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
const App = () => {
  return (
    <>
    <Router>
    <Routes>
      <Route path='/weather' element={<Weather />}> </Route>
    </Routes>
    </Router>
    </>
  );
};

export default App;
