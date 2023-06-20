import './App.scss';
import Header from "./components/Header/Header";
import HeroBanner from "./components/HeroBanner/HeroBanner"
import About from "./components/About/About"
// import Footer from "./components/Footer/Footer"


function App() {
  return (
    <div className="App">
     <Header />
     <HeroBanner />
     <About />
     {/* <Footer /> */}
    </div>
  );
}

export default App;
