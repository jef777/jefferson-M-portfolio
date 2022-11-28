const LineGradient = ({ width = 'w-full' }) => {
  return (
    <div
      className={`h-0.5 ${width} bg-gradient-to-r from-teal-300 to-sky-400`}
    />
  );
};

export default LineGradient;
