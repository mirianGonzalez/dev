import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Cabecera from "./components/Cabecera";
import Home from "./pages/Home";
import NuevoVideo from "./pages/NuevoVideo";
import Pie from "./components/Pie";
import GlobalContextProvider from "./context/GlobalContext";
import FormularioContextProvider from "./context/FormularioContext";
import Pagina404 from "./pages/Pagina404";

function App() {
  return (
    <>
      <GlobalContextProvider>
        
          <BrowserRouter>
<FormularioContextProvider>
            <Cabecera />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/nuevo-video" element={<NuevoVideo />} />
              <Route path="/not-found" element={<Pagina404 />} />
              <Route path="*" element={<Navigate to="/not-found" />} />
            </Routes>
            <Pie />
</FormularioContextProvider>
          </BrowserRouter>
        
      </GlobalContextProvider>
    </>
  );
}
export default App;
