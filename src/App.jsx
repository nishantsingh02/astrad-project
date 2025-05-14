
import Home from '../components/Hero';
import Form from '../components/Form';
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
