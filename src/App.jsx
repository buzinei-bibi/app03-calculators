import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Tinta from "./pages/Tinta/Tinta";
import Matematica from "./pages/Matematica/Matematica";
import Sequencia from "./pages/Sequencia/Sequencia";
import Celsius from "./pages/Celsius/Celsius";
import Escolar from "./pages/Escolar/Escolar";
import Meters from "./pages/Meters/Meters";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col h-screen overflow-hidden">
        <Header
          title="LOGOTIPO"
          navigationLinks={[
            { name: "HOME", link: "/" },
            { name: "TINTA", link: "/tinta" },
            { name: "METERS", link: "/meters" },
            { name: "MATEMÁTICA", link: "/matematica" },
            { name: "SEQUÊNCIA", link: "/sequencia" },
            { name: "CELSIUS", link: "/celsius" },
            { name: "ESCOLAR", link: "/escolar" },
          ]}
        />
        <main className="flex-1 bg-gray-100 flex items-center justify-center p-4 overflow-y-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tinta" element={<Tinta />} />
            <Route path="/matematica" element={<Matematica />} />
            <Route path="/sequencia" element={<Sequencia />} />
            <Route path="/celsius" element={<Celsius />} />
            <Route path="/escolar" element={<Escolar />} />
            <Route path="/meters" element={<Meters />} />

            <Route
              path="*"
              element={
                <h1 className="text-2xl font-bold text-center text-white">
                  404 - página não encontrada
                </h1>
              }
              />
          </Routes>
        </main>
      </div>
     
    </BrowserRouter>
  );
}

export default App;
