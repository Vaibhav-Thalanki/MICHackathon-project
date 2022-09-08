import React from "react";
import { useRef } from "react";
import { useCookies } from 'react-cookie';
import Head from "next/head";
import { FaRegEnvelope } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import axios from 'axios';
import { useRouter } from "next/router";

const Banklogin = () => {
  const email_nameRef = useRef();
  const passwordRef = useRef();
  const [cookie, setCookie, removeCookie] = useCookies(['auth-cookie'])
  const router = useRouter()

  const loginSubmitHandler = async (event) => {
    event.preventDefault()
    try {
      const res = await axios.post('http://localhost:3001/api/bank/login', {
        email: email_nameRef.current.value,
        password: passwordRef.current.value
      })
      console.log("SUCCESSFULLY PUSHED");
      console.log("email_nameRef.current.value = " + email_nameRef.current.value);
      setCookie('token', res.data, { path: '/' })
      router.push('/pending')
    } catch (err) {
      throw err
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <Head>
        <title>Login</title>
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
          <div className="w-3/5 p-5">
            <div className="text-left font-bold">
              <span className="text-violet-700">ST</span> Financials
            </div>
            <div className="py-10">
              <h2 className="text-3xl font-bold text-violet-700 mb-2">
                Bank Login
              </h2>
              <div className="border-2 w-40 border-violet-700 inline-block mb-2"></div>
              <h2 className="text-1xl text-gray-500 mb-20 mt-10">
                Login with your Bank Account Credentials
              </h2>
              <form className="flex flex-col items-center" onSubmit={loginSubmitHandler}>
                <div className="bg-gray-100 w-80 h-10 p-2 flex items-center">
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
                <button
                  type="submit"
                  className="border-2 border-black mt-10 rounded-full px-12 py-2 inline-block font-semibold hover:bg-violet-400 hover:text-black"
                >
                  Login
                </button>
              </form>
            </div>
          </div>
          <div className="w-2/5 bg-violet-500 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">

          </div>
        </div>
      </main>
    </div>
  );
};

export default Banklogin;
