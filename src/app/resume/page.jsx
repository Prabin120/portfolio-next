'use client'
import { useEffect, useState } from "react";
import resume from "../../../public/data/resume";

export default function Resume() {
    const [pdf, setPdf] = useState(null);

    useEffect(() => {
        setPdf(resume);
    }, []);

    const pdfURL = pdf ? `${pdf.link}#page=1&zoom=100` : "";
    console.log(resume.link);
    function pdfDownloader() {
        const link = document.createElement('a');
        link.href = pdf.link;
        link.target = "_blank";
        link.download = "Prabin_Resume.pdf";
        link.click();
    }

    return (
        <div className='min-h-screen'>
            <h2 className={`text-center text-5xl pt-20 pb-5 font-mono max-[700px]:text-3xl`}>
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
