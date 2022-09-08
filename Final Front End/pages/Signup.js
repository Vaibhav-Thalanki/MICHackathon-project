import React from "react";
import { useRef } from "react";
import Navbar from "../components/navbar";
import Head from "next/head";
import { FaRegEnvelope } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";
import axios from 'axios';
import { useRouter } from 'next/router'

const Signup = () => {
  const nameRef = useRef();
  const email_nameRef = useRef();
  const passwordRef = useRef();
  const phoneRef = useRef();
  const router = useRouter()

  const signUpSubmitHandler = async (event) => {
    event.preventDefault()
    try {
      const res = await axios.post('http://localhost:3001/api/user', {
        name: nameRef.current.value,
        phone: phoneRef.current.value,
        email: email_nameRef.current.value,
        password: passwordRef.current.value
      })
      console.log({
        name: nameRef.current.value,
        phone: phoneRef.current.value,
        email: email_nameRef.current.value,
        password: passwordRef.current.value
      })
      router.push('/Login')
    } catch (err) {
      throw err
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <Head>
        <title>SignUp</title>
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
          <div className="w-3/5 p-5">
            <div className="text-left font-bold">
              <span className="text-violet-700">ST</span> Financials
            </div>
            <div className="py-10">
              <h2 className="text-3xl font-bold text-violet-700 mb-2">
                Welcome to the group !
              </h2>
              <div className="border-2 w-40 border-violet-700 inline-block mb-2"></div>
              <h3 className="text-1xl  text-gray mb-2">
                Great choice ! Monitor all your financial flow with our services and more
              </h3>

              <h2 className="text-1xl text-gray-500 mb-5 mt-10">
                Fill in the following details
              </h2>
              <form className="flex flex-col items-center" onSubmit={signUpSubmitHandler}>
                <div className="bg-gray-100 w-80 h-10 p-2 flex items-center">
                  <BiUserCircle className="text-gray-400 mr-2" />
                  <input
                    type="text"
                    placeholder="Your Name"
                    name="Name"
                    className="bg-gray-100 outline-none text-sm flex-1"
                    ref={nameRef}
                  />
                </div>
                <div className="bg-gray-100 w-80 h-10 p-2 flex items-center mt-3">
                  <FaRegEnvelope className="text-gray-400 mr-2" />
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    className="bg-gray-100 outline-none text-sm flex-1"
                    ref={email_nameRef}
                  />
                </div>
                <div className="bg-gray-100 w-80 h-10 p-2 flex items-center mt-3">
                  <MdLockOutline className="text-gray-400 mr-2" />
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="bg-gray-100 outline-none text-sm flex-1"
                    ref={passwordRef}
                  />
                </div>
                <div className="bg-gray-100 w-80 h-10 p-2 flex items-center mt-3">
                  <BsTelephone className="text-gray-400 mr-2" />
                  <input
                    type="phone"
                    placeholder="Mobile Number"
                    name="Mobile"
                    className="bg-gray-100 outline-none text-sm flex-1"
                    ref={phoneRef}
                  />
                </div>
                <button
                  type="submit"
                  className="border-2 border-black mt-10 rounded-full px-12 py-2 inline-block font-semibold hover:bg-violet-400 hover:text-black"
                >
                  Sign Up
                </button>
              </form>
            </div>
          </div>
          <div className="w-2/5 bg-violet-500 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
            <h2 className="text-3xl font-bold mb-2">Already have an Account?</h2>
            <div className="border-2 w-20 border-white-500 inline-block mb-2"></div>
            <p className="mb-10">
              Login using your credentials here
            </p>
            <a
              href="#"
              className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-black"
            >
              Login
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Signup;
