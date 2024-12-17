import Header from "./components/Header/Header.js";
import Propaganda from "./components/Propaganda/Propaganda.js";
import Footer from "./components/Footer/Footer.js";
import Selecionador from "./components/Filtros/Selecionador/Selecionador.js";

function App() {
  return (
    <div className="App">
      <Header />
      <Propaganda />
      <Selecionador />
      <Footer />
    </div>
  );
}

export default App;
