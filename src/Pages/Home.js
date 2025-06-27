import Hero from "../components/Hero";
import Projects from "../components/Projects";
import ContactForm from "../components/Contact";
import "../styles/Home.css";
import Footer from "../components/Footer";

const Home = () => (
  <div className="home-container">
    <Hero />
    <Projects />
    <ContactForm />
    <Footer />
  </div>
);

export default Home;
