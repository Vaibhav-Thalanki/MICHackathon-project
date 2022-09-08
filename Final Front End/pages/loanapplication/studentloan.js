import React from "react";
import Navbar from "../../components/navbar";
import Head from "next/head";
import { useState, useRef } from "react";
import axios from 'axios';
import { useCookies } from "react-cookie";
import { useRouter } from "next/router";

const Studentloan = () => {

  const firstname = useRef();
  const lastname = useRef();
  const addressline = useRef();
  const city = useRef();
  const state = useRef();
  const zipcode = useRef();
  const phone = useRef();
  const parentsannualincome = useRef();
  const cgpa = useRef();
  const loanamount = useRef();
  const loanduration = useRef();
  const identity = useRef();

  const [selectedFile, setSelectedFile] = useState(null);
  const [cookie, setCookie, removeCookie] = useCookies()

  const eduLoanSubmitHandler = async (e) => {

    const router = useRouter();

    console.log(cookie.token)
    e.preventDefault()
    const eduLoan = {
      first_name: firstname.current.value,
      last_name: lastname.current.value,
      address: addressline.current.value,
      city: city.current.value,
      state: state.current.value,
      zip: zipcode.current.value,
      phone: phone.current.value,
      parents_annual_income: parentsannualincome.current.value,
      cgpa: cgpa.current.value,
      loan_amount: loanamount.current.value,
      loan_duration: loanduration.current.value,
      identity_verified: identity.current.value,
      bank_name: cookie.bank
    }
    try {
      const res = await axios.post('http://localhost:3001/api/bank/eduloan', eduLoan)
      // console.log(res)
      router.push('../status')
    } catch (e) {
      throw e
    }
  }

  return (
    <div>
      <Navbar></Navbar>
      <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
        <Head>
          <title>Student Loan</title>
        </Head>
        <div>
          <h2 className="text-5xl font-bold mt-20 mb-10 text-violet-700 mb-2">
            Student Loan Form Details
          </h2>
        </div>
        <div className="px-40 py-20 items-center justify-center flex flex-col bg-white rounded-2xl shadow-2xl outline-4 text-violet-700 mb-2">
          <form className="w-full max-w-lg" onSubmit={eduLoanSubmitHandler}>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-first-name"
                >
                  First Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder=""
                  ref={firstname}
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-last-name"
                >
                  Last Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  placeholder=""
                  ref={lastname}
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-password"
                >
                  Address Line
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-password"
                  type="text"
                  placeholder=""
                  ref={addressline}
                />
                <p className="text-gray-600 text-xs italic"></p>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-city"
                >
                  City
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-city"
                  type="text"
                  placeholder=""
                  ref={city}
                />
              </div>
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-state"
                >
                  State
                </label>
                <div className="relative">
                  <select
                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-state"
                    ref={state}
                  >
                    <option>Tamil Nadu</option>
                    <option>Kerala</option>
                    <option>Karnataka</option>
                    <option>Maharashtra</option>
                    <option>Rajasthan</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-zip"
                >
                  Zip
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-zip"
                  type="number"
                  ref={zipcode}
                  placeholder="90210"
                />
              </div>
            </div>
            <div className="flex mt-5 flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-first-name"
                >
                  Phone
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="string"
                  ref={phone}
                  placeholder="Jane"
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-last-name"
                >
                  Parnet's Annual Income
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="number"
                  ref={parentsannualincome}
                  placeholder="Doe"
                />
              </div>
            </div>

            <div className="flex flex-wrap mt-7 -mx-3 mb-2">
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-state"
                >
                  Loan Amount
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="number"
                  ref={loanamount}
                  placeholder="Doe"
                />

              </div>
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-password"
                >
                  Loan Duration (In Days)
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-password"
                  type="number"
                  ref={loanduration}
                  placeholder=""
                />
                <p className="text-gray-600 text-xs italic"></p>
              </div>
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-state"
                >
                  CGPA
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="number"
                  ref={cgpa}
                  placeholder="Doe"
                />
              </div>
            </div>
            <div className="flex flex-wrap mt-7 -mx-3 mb-2">
              <div className="w-full md:w-2/4 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-state"
                >
                  Verify Identity
                </label>
                <div className="relative">
                  <select
                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-state"
                    ref={identity}
                  >
                    <option>Aadhar </option>
                    <option>PAN Card</option>
                    <option>Driving License</option>
                    <option>Passport</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-2/4 px-3 mb-6 md:mb-0">
                <div class="flex justify-center items-center w-full">
                  <label
                    for="dropzone-file"
                    class="flex flex-col justify-center items-center w-full h-20 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                  >
                    <div class="flex flex-col justify-center items-center -mb-2 pt-5 pb-6">
                      <svg
                        aria-hidden="true"
                        class="mb-3 w-10 h-10 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                        ></path>
                      </svg>
                      <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        <span class="font-semibold">Click to upload</span> or drag
                        and drop
                      </p>
                    </div>
                    <input id="dropzone-file" type="file" class="hidden" value={selectedFile} onChange={(e) => setSelectedFile(e.target.files[0])} />
                  </label>
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="border-2 mt-10 bg-green-400 border-2 rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-black"
            >
              Send Application to Bank
            </button>
          </form>
        </div>
      </div>
    </div>

  );
};

export default Studentloan;
