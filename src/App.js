import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import NivelSecundario from './pages/NivelSecundario';
import NivelPrimario from './pages/NivelPrimario';
import ConsultaAlmunos from './pages/ConsultaAlmunos';
import NivelInicial from './pages/NivelInicial';
import Docentes from './pages/Docentes';
import Pastoral from './pages/Pastoral';
import Inscripciones from './pages/Inscripciones';
import Administracion from './pages/Administracion';
import Contacto from './pages/Contacto';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path={'/'} element={<Home/>}/>
        <Route exact path={'/nivel-inicial'} element={<NivelInicial/>}/>
        <Route exact path={'/nivel-primario'} element={<NivelPrimario/>}/>
        <Route exact path={'/nivel-secundario'} element={<NivelSecundario/>}/>
        <Route exact path={'/consulta-alumnos'} element={<ConsultaAlmunos/>}/>
        <Route exact path={'/docentes'} element={<Docentes/>}/>
        <Route exact path={'/pastoral'} element={<Pastoral/>}/>
        <Route exact path={'/inscripciones'} element={<Inscripciones/>}/>
        <Route exact path={'/administracion'} element={<Administracion/>}/>
        <Route exact path={'/contacto'} element={<Contacto/>}/>
      </Routes>
    </Router>
  );
}

export default App;
