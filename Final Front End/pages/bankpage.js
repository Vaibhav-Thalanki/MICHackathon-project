import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";
import { useRef } from "react";
import { useCookies } from 'react-cookie'

const Bankpage = () => {

  const bankref = useRef();
  const loanref = useRef();

  const router = useRouter();
  const [cookie,setCookie,removeCookie] = useCookies()

  const handleClick = () => {

    if (loanref.current.value === "Studentloan") {
      setCookie('bank', bankref.current.value, { path: '/loanapplication/studentloan'})
      router.push('/loanapplication/studentloan');
    }
    if (loanref.current.value === "Homeloan") {
      setCookie('bank', bankref.current.value, { path: '/loanapplication/homeloan'})
      router.push('/loanapplication/homeloan');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <Head>
        <title>Bank Page</title>
      </Head>
      <div className="text-3xl w-200 px-40 py-20 bg-white rounded-2xl shadow-2xl outline-4 text-violet-700 mb-2">
          <label className="text-violet-500" for="bank">
            <span className="font-bold text-violet-700">Hello Jans</span>, Where do you wish to take a Loan from ?
          </label>
          
        <div className="flex mt-4 bg-transparent mb-10 text-7xl" >
          <select ref = {bankref} className="bg-transparent rounded-lg outline-none text-7xl" name="bank" id="bank" required>
            <option className="text-2xl" value="CUB">City Union Bank</option>
            <option className="text-2xl" value="KVB">Karur Vysya Bank</option>
            <option className="text-2xl" value="IOB">Indian Overseas Bank</option>
            <option className="text-2xl" value="SBI">State Bank of India</option>
            <option className="text-2xl" value="ICICI">ICICI</option>
            <option className="text-2xl" value="HDFC">HDFC</option>
          </select>

        </div>
        

               <label className="text-violet-500" for="bank">
            What type of Loan do you wish to take ?
          </label>
          
        <div className="flex mt-4 bg-transparent text-7xl" >
          <select ref = {loanref} className="bg-transparent rounded-lg outline-none text-7xl" name="bank" id="bank" required>
            <option className="text-2xl" value="Studentloan">Student Loan</option>
            <option className="text-2xl" value="Homeloan">Home Loan</option>
          </select>
        </div>

      </div>  


        <div className="items-center justify-items-center content-center">
          <button onClick={handleClick} className="mt-10 justify-center bg-transparent hover:bg-green-500 text-green-500 font-semibold hover:text-white py-2 px-4 w-60 h-20 border border-black-700 hover:border-transparent rounded">
            Apply 
          </button>
        </div>
        
    </div>
  );
};

export default Bankpage;
