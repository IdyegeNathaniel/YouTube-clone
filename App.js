import './App.css';
import Header from './Header';
import Sidebar from "./Sidebar";
import Video from './Video';

function App() {
  return (
    <div className="App">
        <Header />
        <div className="main__display" style={{"display":"flex"}}>
            <Sidebar />
             <Video />
        </div>
    </div>
  );
}

export default App;
