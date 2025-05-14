import "../src/App.css"
import Home from '../components/Hero';
import Form from '../components/Form';
import Card from "../components/Card";
import {BrowserRouter, Routes, Route , Link, useNavigate, Outlet} from "react-router-dom";

function App() {
  return (
   <div>
    <Card />
   </div>
  );
}

export default App;
