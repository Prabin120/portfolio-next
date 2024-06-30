'use client'
import { useEffect, useState } from "react";

export default function Resume() {
  const pdfFile = "/resume/Prabin_Resume.pdf";
  const [pdf, setPdf] = useState(null);

  useEffect(() => {
    setPdf(pdfFile);
  }, [pdf]);

  const pdfURL = pdf ? `${pdf}#page=1&zoom=100` : "";
  
  function pdfDownloader() {
    const link = document.createElement('a');
    link.href = pdf;
    link.target = "_blank";
    link.download = "Prabin_Resume.pdf";
    link.click();
  }

  return (
    <div className='min-h-screen'>
      <h2 className={`text-center text-5xl pt-20 pb-5 text-slate-300 font-mono max-[700px]:text-3xl`}>
        Resume <span className='text-yellow-500 font-bold'>View</span>
      </h2>
      <div className="flex justify-center">
        <button
          className="bg-slate-700 mb-4 rounded-lg px-5 py-2 hover:bg-yellow-600"
          onClick={pdfDownloader}
          type="button"
        >
          Download
        </button>
      </div>
      <div className="flex justify-center">
        {pdfURL && (
          <iframe
            src={`${pdfURL}&toolbar=0`}
            type="application/pdf"
            className="w-screen max-w-[75rem] h-screen"
          ></iframe>
        )}
      </div>
    </div>
  );
}
