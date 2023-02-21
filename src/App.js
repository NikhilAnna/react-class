import logo from './logo.svg';
import './App.css'
import Classcomponent from './Classcomponent'
import {BrowserRouter, Routes,Route} from "react-router-dom";
import Phone from './Phone'
import Bout from './Bout'
import Act from './Act'
import Nav from './Nav'

function App() {
  return (
    <div className="App">
     {/*<Classcomponent/>*/}
    <BrowserRouter>
    <Nav/>
    <Routes>
    <Route path="/"element={<Phone/>}/>
    <Route path="/Bout"element={<Bout/>}/>
    <Route path="/Act"element={<Act/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

