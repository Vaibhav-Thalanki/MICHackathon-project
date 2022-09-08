import React, { useEffect } from "react";
import Navbar from "../../components/navbar";
import Head from "next/head";
import { useState, useRef } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";

const Pending = () => {
  const [loans, setLoans] = useState([])
  const [cookie, setCookie, removeCookie] = useCookies()
  console.log(loans);
  useEffect(() => {
    const res = axios.get('http://localhost:3001/api/loans', {
      params: {
        bank: cookie.token
      }
    }).then(res => setLoans(res.data)).catch(e => console.log(e))
  }, [])
  // laskdk
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-300">
        <Head>
            <title>Pending Applications</title>
        </Head>
        <div>
            <div className="py-10">
                <h2 className="text-6xl font-bold text-violet-700 mb-2">
                    Pending Applications
                </h2>
            </div>
            
            {loans.length > 0 && (
                <div className="py-10">
                    <div className="grid grid-cols-4 gap-4">
                            {loans.map(thing => (<div className="max-w-sm bg-gray-200 rounded-lg overflow-hidden shadow-lg">
                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2">{thing.name}</div>
                                    <div className="text-gray-700 text-base">
                                        <p>Loan Amount - <span>{thing.amount}</span></p>
                                        <p>Loan Tenure - <span>{thing.duration}</span></p>
                                        <p>Loan Type - <span>{thing.type}</span></p>
                                    </div>

                                    <button
                                        className="border-2 mt-10 bg-green-400 border-2 rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-black">
                                        View Application
                                    </button>
                                </div>
                            </div>))}
                            
                            
                        
                    </div>
                </div>
            )}
        </div>
    </div>
    )
}

export default Pending;
