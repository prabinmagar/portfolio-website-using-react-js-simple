import './App.css';
import "./assets/js/script";
import Header from './components/Header/Header';
import Newsletter from './components/Newsletter/Newsletter';
import Services from './components/Services/Services';
import Work from './components/Work/Work';
import WorkProcess from './components/WorkProcess/WorkProcess';
import About from './components/About/About';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Services />
      <Work />
      <WorkProcess />
      <Newsletter />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
