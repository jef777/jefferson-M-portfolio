import { SiGithub, SiLinkedin } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className=" flex flex-col justify-evenly items-center h-64 bg-abbey pt-10">
      <a href="#" className=" text-ebonyClay font-bold text-3xl font-Poppins">
        JM.
      </a>

      <div className="flex">
        <a
          href="https://www.linkedin.com/in/jefferson-muigai-3b229512b/"
          target="_blank"
          rel="noreferrer"
          className="mr-2"
        >
          <SiLinkedin className="text-ebonyClay w-10 h-8" />
        </a>
        <a
          href="https://github.com/jef777/"
          target="_blank"
          rel="noreferrer"
          className="ml-2"
        >
          <SiGithub className="text-ebonyClay w-10 h-8" />
        </a>
      </div>
      <div className="footer__copyright">
        <small className="text-ebonyClay">
          <span className="font-bold">
            &copy; JM. {new Date().getFullYear()}
          </span>{' '}
          All rights reserved.
        </small>
      </div>
    </footer>
  );
};

export default Footer;
