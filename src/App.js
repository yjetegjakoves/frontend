import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Signup from "./Signup/Signup";
import Home from './pages/Home';
import Login from './Login/Login';
import Proze from './pages/Proze';
import Cimi from './pages/Cimi';



//drilon

function App() {
  return (
    <BrowserRouter>
      
      <Routes>

          <Route path = '/' element = {<Home />}></Route>
          <Route path = '/signup' element = {<Signup />}></Route>
          <Route path = '/login' element = {<Login />}></Route>
          <Route path = '/proze' element = {<Proze />}></Route>
          <Route path = '/cimi' element = {<Cimi />}></Route>
      
      </Routes>

    </BrowserRouter>
  );
}

export default App;
