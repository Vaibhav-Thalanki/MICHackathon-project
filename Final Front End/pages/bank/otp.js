import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";
import { useRef } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import Link from 'next/link'

const Otp = () => {

    const router= useRouter()
    const phone = useRef();
    const otp = useRef();
    const [cookie, setCookie, removeCookie] = useCookies()
    
    const otpSubmitHandler = async (event) => {
        event.preventDefault()
        try {
          const res = await axios.post('http://localhost:3001/api/otp', {
            phone: phone.current.value
          })
          console.log("SENT VIA API");
        //   setCookie('token', res.data, { path: '/' })
        //   router.push('/')
        } catch (err) {
          throw err
        }
    }

    const otpVerifyHandler = async(e) => {
      e.preventDefault()
      try {
        const res = await axios.post('http://localhost:3001/api/otp/verify', {
          otp: otp.current.value,
          phone: phone.current.value
        })
        setCookie('phone',res.data,{path:'/'})
        if(res){
          router.push('/dashboard')
        }
      } catch (error) {
        
      }
    }


  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <Head>
        <title>OTP Verification</title>
      </Head>
      <div className="text-3xl w-200 px-40 py-20 bg-white rounded-2xl shadow-2xl outline-4 text-violet-700 mb-2">
        <h2 className="text-3xl font-bold text-violet-700 mb-10">Customer OTP Verification</h2>
        <form className="flex flex-wrap -mx-3 mb-6" onSubmit={otpSubmitHandler}>
          <div className="w-full md:w-4/5 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-password"
            >
              Phone
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
              type="text"
              ref={phone}
              placeholder=""
            />
            <p className="text-gray-600 text-xs italic"></p>
          </div>
          <div className="w-full  justify-content-center align-items-center md:w-1/5 px-3">
            <button
              type="submit"
              className="border-1 mt-8 bg-violet-400 border-2 rounded-md text-white justify-content-center align-items-center  w-30 h-20  px-12 py-2 inline-block font-semibold hover:bg-white hover:text-black"
            >
              Send OTP
            </button>
          </div>
        </form>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-3/5 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-password"
            >
              Verify OTP
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
              type="text"
              ref={otp}
              placeholder=""
            />
            <p className="text-gray-600 text-xs italic"></p>
          </div>
          <div className="w-full md:w-2/5 px-3">
            <a
              href="#"
              className="border-1 mt-8 bg-violet-400 border-2 rounded-md text-white justify-content-center align-items-center  w-30 h-20  px-12 py-2 inline-block font-semibold hover:bg-white hover:text-black"
              onClick={otpVerifyHandler}
            >
              Verify OTP
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Otp;
