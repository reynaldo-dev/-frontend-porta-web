import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Cursos } from "./components/administration/Cursos"
import { GradoAcademico } from "./components/administration/GradoAcademico"
import { Habilidades } from "./components/administration/Portafolio"
import { Redes } from "./components/administration/Redes"
import { Usuarios } from "./components/administration/Usuarios"
import { AdministrationLayout } from "./layout/AdministrationLayout"
import { HomeLayout } from "./layout/HomeLayout"
import { LandingLayout } from "./layout/LandingLayout"


function App() {


  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<HomeLayout />} />
        <Route path="/landing/:user" element={<LandingLayout />} />
        <Route path="/administration" element={<AdministrationLayout />}>
          <Route path='cursos' element={<Cursos/> } />
          <Route path='habilidades' element={<Habilidades />} />
          <Route path='usuarios' element={<Usuarios />} />
          <Route path='redes' element={<Redes />} />
          <Route path='grado' element={<GradoAcademico />} />

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
