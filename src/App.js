import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import NivelSecundario from './pages/NivelSecundario';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path={'/'} element={<Home/>}/>
        <Route exact path={'/nivel-secundario'} element={<NivelSecundario/>}/>
      </Routes>
    </Router>
  );
}

export default App;
