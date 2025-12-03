import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <div className="snap-container">
        <Hero />
        <About />
        <Projects />
      </div>
      <Footer />
    </>
  );
}

export default App;
