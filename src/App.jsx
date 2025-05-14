import { Routes, Route } from 'react-router-dom';
import Home from '../components/hero';
import Form from '../components/form';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/generate" element={<Form />} />
    </Routes>
  );
}

export default App;
