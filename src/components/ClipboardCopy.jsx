import { useState } from 'react';

export default function ClipboardCopy({ copyText, Icon }) {
  const [isCopied, setIsCopied] = useState(false);

  // This is the function we wrote earlier
  async function copyTextToClipboard(text) {
    if ('clipboard' in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand('copy', true, text);
    }
  }

  // onClick handler function for the copy button
  const handleCopyClick = () => {
    // Asynchronously call copyTextToClipboard
    copyTextToClipboard(copyText)
      .then(() => {
        // If successful, update the isCopied state value
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <span className=" mb-3 font-Poppins">
      <h4 className="flex center-items">
        <Icon className=" w-8 h-8 mr-2" />
        <button onClick={handleCopyClick} className=" mt-1">
          <span className="font-bold text-abbey mt-1 mr-2">{copyText}</span>
          <span className="animate-bounce">
            {isCopied ? 'Copied!' : 'Copy'}
          </span>
        </button>
      </h4>
    </span>
  );
}
