import React from 'react';
import { motion } from 'framer-motion';

import {
  CommandLineIcon,
  ComputerDesktopIcon,
} from '@heroicons/react/24/solid';

export default function Project({
  imageSrc,
  title,
  description,
  gitLink,
  liveLink,
  devStatus,
}) {
  return (
    <div className="md:flex m-4 w-full justify-center items-center bg-[#414a70] pb-6 md:py-12 rounded-xl">
      <div className="md:px-4 w-full md:w-6/12">
        <div className="rounded-xl overflow-hidden shadow-black-500 shadow-xl relative">
          {devStatus != '' && (
            <span className="absolute text-emerald-500 text-lg font-bold bg-green-200 px-2 py-1 right-0">
              {devStatus}...
            </span>
          )}
          <img src={imageSrc} alt="me" />
        </div>
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
        className="flex flex-col px-4 w-full md:w-5/12 mt-2"
      >
        <div className="flex mb-6 w-full top-0">
          <article className=" text-periwinkle font-bold text-xl rounded-xl w-full">
            <h5 className="text-3xl">{title}</h5>
          </article>
        </div>
        <p className="text-periwinkle">{description}</p>
        <div className=" grid grid-cols-2 gap-4 mt-3">
          {liveLink != '' && (
            <a
              className="inline-flex items-center rounded-md border border-transparent bg-abbey px-4 py-2 text-base font-medium text-ebonyClay shadow-sm hover:bg-abbey focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              href={liveLink}
              target="_blank"
              rel="noreferrer"
            >
              <ComputerDesktopIcon
                className="mr-3 h-6 w-6"
                aria-hidden="true"
              />
              Live view
            </a>
          )}
          {gitLink != '' && (
            <a
              className="inline-flex items-center rounded-md border border-transparent bg-abbey px-4 py-2 text-base font-medium text-ebonyClay shadow-sm hover:bg-abbey focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              href={gitLink}
              target="_blank"
              rel="noreferrer"
            >
              <CommandLineIcon className="mr-3  h-7 w-7" aria-hidden="true" />
              Github code
            </a>
          )}
        </div>
      </motion.div>
    </div>
  );
}
