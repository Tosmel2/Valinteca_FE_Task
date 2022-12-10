import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Home from './components/Home';
import SignUp from './components/SignUp';
import WelcomePage from './components/WelcomePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/signup" element={<SignUp />}/>
            <Route path="/welcome" element={<WelcomePage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
