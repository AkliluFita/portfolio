import { useContext } from "react";
import "./App.css";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import ProductList from "./components/productList/ProductList";
import Toggle from "./components/toggle/Toggle";
import { ThemeContext } from "./context";

function App() {
  const [state] = useContext(ThemeContext);
  const darkMode = state.darkMode;

  return (
    <div
      className="App"
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode ? "white" : "black",
      }}
    >
      <Toggle />
      <div className="app_container">
        <Intro />
        <About />
        <ProductList />
        <Contact />
      </div>
    </div>
  );
}

export default App;
