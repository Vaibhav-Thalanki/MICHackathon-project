import React from "react";
import Head from "next/head";
import {useState, useRef} from "react";


const status = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
            <Head>
                <title>Application Landing</title>
            </Head>
            <div className="text-3xl w-200 px-40 py-20 bg-white rounded-2xl shadow-2xl outline-4 text-violet-700 mb-2">
                <h2 className="font-bold text-violet-700">Yay! Your Application has been submitted.</h2>
                <div className="border-2 w-60 border-violet-700 inline-block mb-2"></div>
                <h3 className="text-violet-700">Check back the status of your application here</h3>
                <div className="border-2 w-60 h-4 hidden inline-block mb-2"></div>

                <h2 className="font-bold text-red-700 mt-10">STATUS - <span className=" bg-gray-300 px-2 py-2 text-green-500 underline decoration-double">Approved</span></h2>
                
            </div>
        </div>
    )
}

export default status