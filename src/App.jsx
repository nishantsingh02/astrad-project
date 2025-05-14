
import Home from '../components/hero';
import Form from '../components/form';
import {BrowserRouter, Routes, Route , Link, useNavigate, Outlet} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/generate" element={<Form />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
