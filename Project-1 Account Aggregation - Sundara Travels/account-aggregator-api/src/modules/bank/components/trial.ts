// const fs = require("fs");
// var jpickle = require('jpickle');
// const scaler = fs.readFileSync("scaler.pkl", "binary");

import { XMLHttpRequest } from "xmlhttprequest-ts"
// import { XMLHttpRequest } from 'xmlhttprequest';
// var unpickled = jpickle.loads(scaler);
// NOTE: you must manually enter your API_KEY below using information retrieved from your IBM Cloud
const API_KEY = "hy7E-bnXomI-gSe1K6KlfCdqIp5KFD2BWiLdAbVqnnEC";

function getToken(errorCallback, loadCallback) {
  const req = new XMLHttpRequest();
  req.addEventListener("load", loadCallback);
  req.addEventListener("error", errorCallback);
  req.open("POST", "https://iam.cloud.ibm.com/identity/token");
  req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  req.setRequestHeader("Accept", "application/json");
  req.send(
    "grant_type=urn:ibm:params:oauth:grant-type:apikey&apikey=" + API_KEY
  );
}

function apiPost(scoring_url, token, payload, loadCallback, errorCallback) {
  const oReq = new XMLHttpRequest();
  oReq.addEventListener("load", loadCallback);
  oReq.addEventListener("error", errorCallback);
  oReq.open("POST", scoring_url);
  oReq.setRequestHeader("Accept", "application/json");
  oReq.setRequestHeader("Authorization", "Bearer " + token);
  oReq.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  oReq.send(payload);
}

getToken(
  (err) => console.log(err),
  function () {
    let tokenResponse;
    try {
      tokenResponse = JSON.parse(this.responseText);
    } catch (ex) {
      // TODO: handle parsing exception
    }
    // NOTE: manually define and pass the array(s) of values to be scored in the next line
    //[0,5000,129,360,1.0,0.0,0.0]
    const payload = `{"input_data": [{"values": [[0,5000,129,360,1.0,0.0,0.0]]}]}`;
    const scoring_url =
      "https://us-south.ml.cloud.ibm.com/ml/v4/deployments/94c8e1c6-3e0e-4bf0-ae77-2db69fc96a29/predictions?version=2022-09-07";
    //education  -  https://us-south.ml.cloud.ibm.com/ml/v4/deployments/94c8e1c6-3e0e-4bf0-ae77-2db69fc96a29/predictions?version=2022-09-07
    // education ex - const payload = `{"input_data": [{"values": [[0,6000,128,360,0.0,1.0,0.0]]}]}`;
    //home  -  https://us-south.ml.cloud.ibm.com/ml/v4/deployments/9fccb5b7-a803-4198-9c89-81a9802c5e07/predictions?version=2022-09-07
    // home ex - const payload = `{"input_data": [{"values": [[0,342,434,321,143,0,1,0,0,0,1,0,0]]}]}`;
    apiPost(
      scoring_url,
      tokenResponse.access_token,
      payload,
      function (resp) {
        let parsedPostResponse;
        try {
          parsedPostResponse = JSON.parse(this.responseText);
        } catch (ex) {
          // TODO: handle parsing exception
        }
        console.log("Scoring response");
        console.log(parsedPostResponse["predictions"][0]["values"][0][0]);
      },
      function (error) {
        console.log(error);
      }
    );
  }
);

export { apiPost, getToken }
// const test = (inputs) => {};
// const get_inputs = () => {
//   const form = document.forms[0];
//   const education = form["Education"].value;
//   const ApplicantIncome = form["ApplicantIncome"].value;
//   const Coapplicant = form["Co-applicant"].value;
//   const LoanAmount = form["LoanAmount"].value;
//   const LoanTerm = form["Loan-Amount-Term"].value;
//   const CreditHistory = form["Credit-History"].value;
//   const dependents = form["dependents"].value;
//   const property = form["property"].value;
//   let se, s1, s2, s3, s4, sp1, sp2, sp3;
//   if (education === "Graduate") {
//     se = 0;
//   } else {
//     se = 1;
//   }
//   if (dependents == "0") {
//     s1 = 0;
//     s2 = 0;
//     s3 = 0;
//     s4 = 1;
//   } else if (dependents == "1") {
//     s1 = 0;
//     s2 = 0;
//     s3 = 1;
//     s4 = 0;
//   } else if (dependents == "2") {
//     s1 = 0;
//     s2 = 1;
//     s3 = 0;
//     s4 = 0;
//   } else {
//     s1 = 1;
//     s2 = 0;
//     s3 = 0;
//     s4 = 0;
//   }
//   if (property === "Rural") {
//     sp1 = 0;
//     sp2 = 0;
//     sp3 = 1;
//   } else if (property === "Semi-urban") {
//     sp1 = 0;
//     sp2 = 1;
//     sp3 = 0;
//   } else {
//     sp1 = 1;
//     sp2 = 0;
//     sp3 = 0;
//   }
//   console.log(
//     se,
//     ApplicantIncome,
//     Coapplicant,
//     LoanAmount,
//     LoanTerm,
//     CreditHistory,
//     s1,
//     s2,
//     s3,
//     s4,
//     sp1,
//     sp2,
//     sp3
//   );
//   arrayofinputs = [
//     [
//       float(se),
//       float(ApplicantIncome),
//       float(Coapplicant),
//       float(LoanAmount),
//       float(LoanAmountTerm),
//       float(CreditHistory),
//       float(s1),
//       float(s2),
//       float(s3),
//       float(s4),
//       float(sp1),
//       float(sp2),
//       float(sp3),
//     ],
//   ];
// };

// [0 '35773' '432' '321' '143' '1' 0 0 1 0 1 0 0]
