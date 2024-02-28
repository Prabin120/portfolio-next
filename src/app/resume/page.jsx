"use client"
import { getData } from "@/components/fetchData";
import { useEffect, useState } from "react";
import { URL } from "@/components/fetchData";

export default function Resume() {
    const [pdf,setPdf] = useState(null);
    useEffect(()=>{
        const fetchdata = async()=>{
            const result = await getData("resume");
            setPdf(result);
        };
        fetchdata();
    },[])
    const pdfURL = pdf ? URL+pdf.resume+"#page=1&zoom=100" : "";

    function pdfDownloder(){
        const link = document.createElement('a');
        link.href = pdfURL;
        link.target = "_blank";
        link.download = "Prabin_Resume.pdf";
        const event = new MouseEvent('click');
        link.dispatchEvent(event);
    }
    return (
        <div className='min-h-screen'>
            <h2 className={`text-center text-5xl pt-20 pb-5 font-mono max-[700px]:text-3xl`}>Resume <span className='text-yellow-500 font-bold'>View</span></h2>
            <div className="flex justify-center">
                <button className="bg-slate-700 mb-4 rounded-lg px-5 py-2 hover:bg-yellow-600" onClick={pdfDownloder} type="button">Download</button>
            </div>
            <div className="flex justify-center">
                <iframe src={`${pdfURL}&toolbar=0`} type="application/pdf" className="w-screen max-w-[75rem] h-screen"></iframe>
            </div>
        </div>
    )
}
