import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/user/Login.jsx";
import React, { useState, useEffect } from "react";
import Page404 from "./components/404.jsx";
import {ManualUrl} from "./components/utils/apiUrl.js"
import Inicio from "./components/Inicio.jsx";
import Sedes from "./components/Sedes.jsx";
import About from "./components/About.jsx";
import Template from "./Template.jsx";
import SedePage from "./components/Sedes/SedePage.jsx";
import AboutPage from "./components/about/AboutPage.jsx";
import Manual from "./components/Manual.jsx";
import Proyect from "./components/Proyects.jsx";
import Proyecto from "./components/Proyectos/Proyecto.jsx";
import Proy from "./components/Proyectos/Proy.jsx";
import Curricular from "./components/Curricular.jsx";
import Curricu from "./components/Curricular/Curricu.jsx";
import CurricuSub from "./components/Curricular/CurricuSub.jsx";
import Oports from "./components/Oports.jsx";
import Oportunidad from "./components/oportunidades/oportunidad.jsx";
import ConsejoD from "./components/Consejo.jsx";
import Noticias from "./components/inicio/Noticias/Noticas.jsx";
import AdminPerfil from "./components/admin/adminPerfil.jsx";
import ProtectRuts from "./components/utils/ProtectRuts.jsx";
import Cookies from "universal-cookie";



const cookies = new Cookies();

function App() {
  const isUserLoggedIn = !!localStorage.getItem("auth") || !!cookies.get("username"); // Verifica si la cookie existe
  const Url = { ManualUrl };


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route element={<ProtectRuts canActivate={isUserLoggedIn} />}>
          <Route path="/perfil" element={<Template />}>
            <Route index element={<AdminPerfil />} />
          </Route>
        </Route>

        <Route path="/" element={<Template />}>
          <Route index element={<Inicio />} />
          <Route path=":name" element={<Noticias />} />
          <Route path="/oportunidades/:name" element={<Oportunidad />} />
        </Route>
        <Route path="/sedes" element={<Template />}>
          <Route index element={<Sedes />} />
          <Route path=":name" element={<SedePage />} />
        </Route>
        <Route path="/about" element={<Template />}>
          <Route index element={<About />} />
          <Route path=":name" element={<AboutPage />} />
        </Route>
        <Route path="/manual" element={<Template />}>
          <Route index element={<Manual url={Url} />} />
        </Route>
        <Route path="/proyectos" element={<Template />}>
          <Route index element={<Proyect />} />
          <Route path=":name/*" element={<Proyecto />} />
        </Route>
        <Route path="/proyectos/:name/:name" element={<Template />}>
          <Route index element={<Proy />} />
        </Route>
        <Route path="/malla-curricular" element={<Template />}>
          <Route index element={<Curricular />} />
          <Route path=":name/*" element={<Curricu />} />
        </Route>
        <Route path="/malla-curricular/:name/:name" element={<Template />}>
          <Route index element={<CurricuSub />} />
        </Route>
        <Route path="/oportunidades" element={<Template />}>
          <Route index element={<Oports />} />
          <Route path=":name/*" element={<Oportunidad />} />
        </Route>
        <Route path="/Consejo-directivo" element={<Template />}>
          <Route index element={<ConsejoD />} />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
