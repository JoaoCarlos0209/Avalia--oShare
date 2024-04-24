import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Shares from "./Pages/Share";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/Share" element={<Shares/>} />
      </Routes>
    </Router>
  );
};

export default App
