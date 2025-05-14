
import Home from '../components/Hero';
import Form from '../components/Form';
import Card from '../components/Card';
import {BrowserRouter, Routes, Route , Link, useNavigate, Outlet} from "react-router-dom";

function App() {
  return (
   <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/generate' element={<Form />}></Route>
        <Route path='/card' element={<Card />}></Route>

      </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
