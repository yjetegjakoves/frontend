import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Signup from "./Signup/Signup";
import Home from './pages/Home';
import Login from './Login/Login';
import Proze from './pages/Proze';
import Produktet from './pages/Produktet';
import Kfc from './pages/Kfc';
import Berati from './pages/Berati';
import Retro from './pages/Retrocard';
import Proper from './pages/Properpizza';
import Dame from './pages/Dame';



//drilon

function App() {
  return (
    <BrowserRouter>
      
      <Routes>

          <Route path = '/' element = {<Home />}></Route>
          <Route path = '/signup' element = {<Signup />}></Route>
          <Route path = '/login' element = {<Login />}></Route>
          <Route path = '/proze' element = {<Proze />}></Route>
          <Route path = '/produktet' element = {<Produktet />}></Route>
          <Route path = '/kfc' element = {<Kfc />}></Route>
          <Route path = '/berati' element = {<Berati/>}> </Route>
          <Route path = '/retro' element = {<Retro/>}> </Route>
          <Route path = '/proper' element = {<Proper/>}> </Route>
          <Route path = '/dame' element = {<Dame/>}> </Route>

      </Routes>

    </BrowserRouter>
  );
}

export default App;
