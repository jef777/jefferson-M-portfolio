import LineGradient from '../components/LineGradient';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import ClipboardCopy from '../components/ClipboardCopy';
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/solid';

const Contact = () => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section id="contact" className="contact py-48">
      {/* HEADINGS */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
        className="flex justify-start w-full"
      >
        <div>
          <p className=" font-Poppins font-semibold text-4xl">
            <span className="text-yellow">CONTACT ME</span>
          </p>
          <div className="flex md:justify-end my-5">
            <LineGradient width="w-1/2" />
          </div>
        </div>
      </motion.div>

      {/* FORM & IMAGE */}
      <div className="md:flex md:justify-between gap-16 mt-5">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className=" flex justify-between"
        >
          <article className="flex flex-col justify-start m-auto border border-abbey rounded-lg p-12">
            <ClipboardCopy
              copyText="jeffmuigai11@gmail.com"
              Icon={EnvelopeIcon}
            />
            <ClipboardCopy copyText="+254 795 620 920" Icon={PhoneIcon} />

            <div className="flex justify-evenly mt-4">
              <a
                href="https://www.linkedin.com/in/jefferson-muigai-3b229512b/"
                target="_blank"
                rel="noreferrer"
              >
                <SiLinkedin className="text-abbey w-10 h-8" />
              </a>
              <a
                href="https://github.com/jef777/"
                target="_blank"
                rel="noreferrer"
              >
                <SiGithub className="text-abbey w-10 h-8" />
              </a>
            </div>
          </article>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="basis-1/2 mt-10 md:mt-0"
        >
          <h4 className="text-2xl text-abbey font-bold mb-2 font-Poppins">
            Send me a message
          </h4>
          <form
            target="_blank"
            onSubmit={onSubmit}
            action="https://formsubmit.co/e0fe3feb8065b532f1b19ed42c8bf980"
            method="POST"
          >
            <input
              className="w-full bg-[#414A70] font-semibold placeholder-opaque-black p-3"
              type="text"
              placeholder="NAME"
              {...register('name', {
                required: true,
                maxLength: 100,
              })}
            />
            {errors.name && (
              <p className="text-rose-400 mt-1">
                {errors.name.type === 'required' && 'This field is required.'}
                {errors.name.type === 'maxLength' && 'Max length is 100 char.'}
              </p>
            )}

            <input
              className="w-full bg-[#414A70] font-semibold placeholder-opaque-black p-3 mt-5"
              type="text"
              placeholder="EMAIL"
              {...register('email', {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />
            {errors.email && (
              <p className="text-rose-400 mt-1">
                {errors.email.type === 'required' && 'This field is required.'}
                {errors.email.type === 'pattern' && 'Invalid email address.'}
              </p>
            )}

            <input
              className="w-full bg-[#414A70] font-semibold placeholder-opaque-black p-3 mt-5"
              type="text"
              placeholder="Phone"
              {...register('phone')}
            />

            <textarea
              className="w-full bg-[#414A70] font-semibold placeholder-opaque-black p-3 mt-5"
              name="message"
              placeholder="MESSAGE"
              rows="4"
              cols="50"
              {...register('message', {
                required: true,
                maxLength: 2000,
              })}
            />
            {errors.message && (
              <p className="text-rose-400 mt-1">
                {errors.message.type === 'required' &&
                  'This field is required.'}
                {errors.message.type === 'maxLength' &&
                  'Max length is 2000 char.'}
              </p>
            )}

            <button
              className="px-12 py-5 border border-abbey rounded-md font-Poppins font-semibold text-deep-blue mt-5 hover:bg-red hover:text-white hover:bg-abbey transition duration-500"
              type="submit"
            >
              SEND
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
