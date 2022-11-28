import LineGradient from '../components/LineGradient';
import useMediaQuery from '../hooks/useMediaQuery';
import { motion } from 'framer-motion';
import {
  //frontend
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiVuedotjs,
  SiNuxtdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiRedux,
  SiCytoscapedotjs,
  SiD3Dotjs,
  SiCss3,
  SiWebpack,
  SiLess,
  SiSass,

  /* Backend */
  SiNodedotjs,
  SiExpress,
  SiAdonisjs,
  SiGraphql,

  /* Database */
  SiMysql,
  SiPostgresql,
  SiSqlite,
  SiMongodb,
  SiRedis,

  /* Others */
  SiDocker,
  SiKubernetes,
  SiGit,
  SiGithub,
  SiNginx,
  SiJira,
  SiTrello,
  SiFirebase,
  SiHeroku,
} from 'react-icons/si';

const MySkills = () => {
  const frontend_skills = [
    {
      icon: SiReact,
      theme: 'text-sky-400',
      title: 'ReactJs',
      link: '#',
    },
    {
      icon: SiNextdotjs,
      theme: 'text-white',
      title: 'NextJs',
      link: '#',
    },
    {
      icon: SiTypescript,
      theme: 'text-sky-400',
      title: 'Typescript',
      link: '#',
    },
    {
      icon: SiVuedotjs,
      theme: 'text-teal-400',
      title: 'VueJs',
      link: '#',
    },
    {
      icon: SiNuxtdotjs,
      theme: 'text-teal-400',
      title: 'NuxtJs',
      link: '#',
    },

    {
      icon: SiTailwindcss,
      theme: 'text-sky-400',
      title: 'TailwindCss',
      link: '#',
    },
    {
      icon: SiBootstrap,
      theme: 'text-fuchsia-400',
      title: 'Bootstrap',
      link: '#',
    },
    {
      icon: SiRedux,
      theme: 'text-violet-400',
      title: 'Redux',
      link: '#',
    },
    {
      icon: SiCytoscapedotjs,
      theme: 'text-yellow-300',
      title: 'CytoscapeJs',
      link: '#',
    },
    {
      icon: SiD3Dotjs,
      theme: 'text-orange-400',
      title: 'D3js',
      link: '#',
    },
    {
      icon: SiCss3,
      theme: 'text-yellow-400',
      title: 'Css3',
      link: '#',
    },
    {
      icon: SiLess,
      theme: 'text-sky-400',
      title: 'Less',
      link: '#',
    },
    {
      icon: SiSass,
      theme: 'text-pink-300',
      title: 'Typescript',
      link: '#',
    },
    {
      icon: SiWebpack,
      theme: 'text-cyan-300',
      title: 'Typescript',
      link: '#',
    },
  ];

  const backend_skills = [
    {
      icon: SiNodedotjs,
      theme: 'text-teal-400',
      title: 'Nodejs',
      link: '#',
    },
    {
      icon: SiExpress,
      theme: 'text-white',
      title: 'Express',
      link: '#',
    },
    {
      icon: SiAdonisjs,
      theme: 'text-violet-400',
      title: 'AdonisJs',
      link: '#',
    },
    {
      icon: SiGraphql,
      theme: 'text-pink-400',
      title: 'GraphQl',
      link: '#',
    },
  ];
  const database_skills = [
    {
      icon: SiMysql,
      theme: 'text-sky-400',
      title: 'Mysql',
      link: '#',
    },
    {
      icon: SiPostgresql,
      theme: 'text-cyan-500',
      title: 'Postgresql',
      link: '#',
    },
    {
      icon: SiMongodb,
      theme: 'text-green-400',
      title: 'Mongodb',
      link: '#',
    },
    {
      icon: SiRedis,
      theme: 'text-rose-500',
      title: 'Redis',
      link: '#',
    },
    {
      icon: SiSqlite,
      theme: 'text-sky-300',
      title: 'Sqlite',
      link: '#',
    },
    {
      icon: SiFirebase,
      theme: 'text-yellow-300',
      title: 'Firebase',
      link: '#',
    },
  ];
  const others_skills = [
    {
      icon: SiNginx,
      theme: 'text-green-400',
      title: 'Nginx',
      link: '#',
    },
    {
      icon: SiDocker,
      theme: 'text-sky-400',
      title: 'Docker',
      link: '#',
    },
    {
      icon: SiKubernetes,
      theme: 'text-blue-400',
      title: 'Kubernetes',
      link: '#',
    },
    {
      icon: SiGit,
      theme: 'text-orange-500',
      title: 'Git',
      link: '#',
    },
    {
      icon: SiGithub,
      theme: 'text-white',
      title: 'Github',
      link: '#',
    },
    {
      icon: SiJira,
      theme: 'text-blue-400',
      title: 'Jira',
      link: '#',
    },
    {
      icon: SiTrello,
      theme: 'text-sky-400',
      title: 'Mysql',
      link: '#',
    },
    {
      icon: SiHeroku,
      theme: 'text-purple-500',
      title: 'Heroku',
      link: '#',
    },
  ];

  return (
    <section id="skills" className="pt-10 pb-24">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mt-32 ">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className=" font-Comfortaa  text-6xl font-bold mb-5 text-abbey">
            MY SKILLS
          </p>
          <LineGradient width="w-2/3" />
        </motion.div>
      </div>

      {/* SKILLS */}

      <div className="my-16 px-3 font-sen text-white" id="skills">
        <p className=" text-white font-bold text-xl">Front-end Skills</p>
        <div className="mt-5 grid grid-cols-3 sm:grid-cols-4 gap-2 md:grid-cols-8">
          {frontend_skills.map((skill, i) => {
            return (
              <motion.div
                key={i}
                whileHover={{
                  scale: 1.1,
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, y: -50 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="my-2 "
              >
                <a
                  href={skill.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col justify-center items-center bg-[#323a5d] p-3 rounded-lg"
                >
                  <skill.icon size={48} className={skill.theme} />
                  <span className={`mt-3 ${skill.theme}`}>{skill.title}</span>
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="my-16 px-3 font-sen text-white" id="skills">
        <p className=" text-white font-bold text-xl">Back-end Skills</p>
        <div className="mt-5 grid grid-cols-3 sm:grid-cols-4 gap-2 md:grid-cols-8">
          {backend_skills.map((skill, i) => {
            return (
              <motion.div
                key={i}
                whileHover={{
                  scale: 1.1,
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, y: -50 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <a
                  href={skill.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col justify-center items-center bg-[#323a5d] p-3 rounded-lg"
                >
                  <skill.icon size={48} className={skill.theme} />
                  <span className={`my-4 ${skill.theme}`}>{skill.title}</span>
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="my-16 px-3 font-sen text-white" id="skills">
        <p className=" text-white font-bold text-xl">Database Skills</p>
        <div className="mt-5 grid grid-cols-3 sm:grid-cols-4 gap-2 md:grid-cols-8">
          {database_skills.map((skill, i) => {
            return (
              <motion.div
                key={i}
                whileHover={{
                  scale: 1.1,
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, y: -50 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <a
                  href={skill.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col justify-center items-center bg-[#323a5d] p-3 rounded-lg"
                >
                  <skill.icon size={48} className={skill.theme} />
                  <span className={`my-4 ${skill.theme}`}>{skill.title}</span>
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="my-16 px-3 font-sen text-white" id="skills">
        <p className=" text-white font-bold text-xl">Other Skills</p>
        <div className="mt-5 grid grid-cols-3 sm:grid-cols-4 gap-2 md:grid-cols-8">
          {others_skills.map((skill, i) => {
            return (
              <motion.div
                key={i}
                whileHover={{
                  scale: 1.1,
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, y: -50 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <a
                  href={skill.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col justify-center items-center bg-[#323a5d] p-3 rounded-lg"
                >
                  <skill.icon size={48} className={skill.theme} />
                  <span className={`my-4 ${skill.theme}`}>{skill.title}</span>
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MySkills;
