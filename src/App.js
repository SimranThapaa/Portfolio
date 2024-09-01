import "./App.css";
import Sidebar from "./components/sidebar";
import Banner from "./components/banner";
import About from "./components/about";
import Services from "./components/services";
import Portfolio from "./components/portfolio";
import Timeline from "./components/timeline";
import Testimonial from "./components/testimonial";
import News from "./components/news";
import Contact from "./components/contact";
function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="ml-[20%]">
        <Banner />
        <About />
        <Services />
        <Portfolio />
        <Timeline />
        <Testimonial />
        <News />
        <Contact />
      </div>
    </div>
  );
}

export default App;
