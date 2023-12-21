import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Signup from "./Signup";
import Home from './Home';
import Login from './Login';


function App() {
  return (
    <BrowserRouter>
      
      <Routes>

          <Route path = '/' element = {<Home />}></Route>
          <Route path = '/signup' element = {<Signup />}></Route>
          <Route path = '/login' element = {<Login />}></Route>

      </Routes>

    </BrowserRouter>
  );
}

export default App;
