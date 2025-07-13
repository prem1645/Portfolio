import Navbar from './components/Navbar';
import Home from './sections/Home';
import About from './sections/About';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Education from './sections/Education';
import Certifications from './sections/Certifications';
import Activities from './sections/Activities';
import Contact from './sections/Contact';

function App() {
  return (
    <div className="bg-gradient-to-br from-sky-950 via-sky-900 to-sky-800 min-h-screen text-white">
      <Navbar />
      <main className="bg-black">
        <section id="home"><Home /></section>
        <section id="about" className="pt-24"><About /></section>
        <section id="experience" className="pt-24"><Experience /></section>
        <section id="projects" className="pt-24"><Projects /></section>
        <section id="skills" className="pt-24"><Skills /></section>
        <section id="education" className="pt-24"><Education /></section>
        <section id="certifications" className="pt-24"><Certifications /></section>
        <section id="activities" className="pt-24"><Activities /></section>
        <section id="contact" className="pt-24"><Contact /></section>
        <footer className="text-center py-6">
          <p>© 2025 PREM KUMAR P</p>
        </footer>
      </main>
    </div>
  );
}

export default App;
