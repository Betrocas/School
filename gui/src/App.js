import './App.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Header from './components/Header';
import Login from "./pages/Login";
import Perfil from "./pages/Perfil";
import Lista_Docentes from './pages/Lista_Docentes';
import Crear from './pages/Crear_Usuario';
import Editar from './pages/Editar_Usuario';
import { useEffect, useState } from 'react';
import Lista_Alumno from './pages/Lista_Alumno';
import Lista_Curso from './pages/Lista_Curso';
import Error from './pages/Error_404';
import Prueba from './pages/Prueba';
import Formulario_Crear_Usuario from './components/Formulario_Crear_Usuario';
import CrearAlumno from './pages/Alumno/Crear';import CrearDocente from './pages/Docente/Crear';
import CrearCurso from './pages/Curso/Crear';
;

function App() {
  let [rol,setRol] = useState("");
  useEffect(()=>{
  },[])
  return (
    <div>
        <Router>
          <Header user={rol}></Header>
          <div className='m-auto w-75'>
          <Routes>
            <Route path="/login" element={<Login setRol={setRol}></Login>}></Route>
            <Route path="/" element={<Perfil homePage={true}></Perfil>}></Route>
            <Route path="/docentes" >
              <Route path="" element={<Lista_Docentes></Lista_Docentes>}></Route>
              <Route path=":id" element={<Perfil rol="docente"></Perfil>}></Route>
              <Route path="editar/:id" element={<Editar rol={"docente"}></Editar>}></Route>
              <Route path="crear" element={<CrearDocente></CrearDocente>}></Route>
            </Route>
            <Route path="/alumnos">
              <Route path='' element={<Lista_Alumno></Lista_Alumno>}></Route>
              <Route path=":id" element={<Perfil rol="alumno"></Perfil>}></Route>
              <Route path="editar/:id" element={<Editar rol={"alumno"}></Editar>}></Route>
              <Route path="crear" element={<CrearAlumno></CrearAlumno>}></Route>
            </Route>
            <Route path="/cursos" >
              <Route path='' element={<Lista_Curso></Lista_Curso>}></Route>
              <Route path='crear' element={<CrearCurso></CrearCurso>}></Route>
            </Route>
            


            <Route path="/editar">
              <Route path=":rol/:id" element={<Editar></Editar>}></Route>
            </Route>
            <Route path="/prueba" element={<Prueba></Prueba>}></Route>
            <Route path="/*" element={<Error></Error>}></Route>
          </Routes>
          </div>
        </Router>
        {/*<Perfil></Perfil>*/}
        {/*<Lista_Docentes></Lista_Docentes>*/}
        {/*<Crear></Crear>*/}
        {/*<Editar></Editar>*/}
    </div>
  );
}

export default App;