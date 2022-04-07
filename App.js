import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Video from "./Video";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Watch from "./Watch";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
           <Route path="/" element= {<><Header /><div className="main__display" style={{ display: "flex" }}><Sidebar /><Video /></div></> } /> 
           <Route path="/watch/:id" element= {<><Header /><Watch /></>} /> 
        </Routes>
        </Router>
    </div>
  );
}

export default App;
