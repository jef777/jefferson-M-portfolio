import Navbar from './scenes/Navbar';
import Landing from './scenes/Landing';
import MySkills from './scenes/MySkills';
import LineGradient from './components/LineGradient';
import Projects from './scenes/Projects';
import Contact from './scenes/Contact';
// import DotGroup from './scenes/DotGroup';
// import Testimonials from './scenes/Testimonials';
import Footer from './scenes/Footer';
import useMediaQuery from './hooks/useMediaQuery';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

function App() {
  const [selectedPage, setSelectedPage] = useState('home');
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isDesktop = useMediaQuery('(min-width: 1060px)');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage('home');
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app bg-ebonyClay">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <div className="bg-ebonyClay">
        {/* {isDesktop && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )} */}
        <motion.div
          className="w-5/6 mx-auto md:h-full"
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage('home')}
        >
          <Landing setSelectedPage={setSelectedPage} />
        </motion.div>
      </div>
      <LineGradient />
      <div className=" bg-ebonyClay">
        <motion.div
          className="w-5/6 mx-auto md:h-full"
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage('skills')}
        >
          <MySkills />
        </motion.div>
      </div>
      <LineGradient />
      <div className=" bg-ebonyClay">
        <motion.div
          className="w-5/6 mx-auto"
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage('projects')}
        >
          <Projects />
        </motion.div>
      </div>
      <LineGradient />
      {/* <div className=" bg-ebonyClay">
        <motion.div
          className="w-5/6 mx-auto md:h-full"
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage('testimonials')}
        >
          <Testimonials />
        </motion.div>
      </div>
      <LineGradient /> */}
      <div className=" bg-ebonyClay">
        <motion.div
          className="w-5/6 mx-auto md:h-full"
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage('contact')}
        >
          <Contact />
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
