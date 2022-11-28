import useMediaQuery from '../hooks/useMediaQuery';
import { motion } from 'framer-motion';
import LineGradient from '../components/LineGradient';
import CTA from '../components/CTA';

const Landing = ({ setSelectedPage }) => {
  const isAboveLarge = useMediaQuery('(min-width: 1060px)');
  return (
    <section
      id="home"
      className="flex justify-between items-center h-screen py-10"
    >
      <div className="flex flex-col justify-center items-center mt-12 md:mt-32 w-full">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <h1 className="text-[4rem] text-periwinkle font-light font-Poppins">
            Hi, I am{' '}
            <span className="text-abbey font-bold">
              Jefferson M.
              <LineGradient width="w-10/12" />
            </span>
          </h1>

          <h4 className="text-3xl font-medium font-Poppins text-periwinkle mt-4">
            A Passionate Fullstack Developer.
          </h4>
          <CTA setSelectedPage={setSelectedPage} />
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
