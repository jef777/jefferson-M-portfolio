import LineGradient from '../components/LineGradient';
import { motion } from 'framer-motion';

import elimuapp from '../assets/projects/elimuapp-home.png';
import giantcrypto from '../assets/projects/giant-crypto-home.png';
import afyayetu from '../assets/projects/afya-yetu.png';

import Project from '../components/Project';

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div className="mb-8">
          <p className="font-Poppins font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
      </motion.div>

      {/* PROJECTS */}
      <div className="md:flex justify-center">
        <motion.div
          className=" grid grid-rows-1 gap-12"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Project
            title="elimuApp"
            description="Educational platform"
            imageSrc={elimuapp}
            gitLink=""
            liveLink="http://elimuapp.com/"
            devStatus="Complete"
          />
          <Project
            title="GiantCrypto"
            description="Crypto coin platform"
            imageSrc={giantcrypto}
            gitLink="https://github.com/jef777/crypto-giant"
            liveLink="https://crypto-giant-smpg.vercel.app/"
            devStatus="Semi complete"
          />
          <Project
            title="AfyaYetu"
            description="Telemedicine platform"
            imageSrc={afyayetu}
            gitLink=""
            liveLink="https://afya-yetu.vercel.app/"
            devStatus="Developing"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
