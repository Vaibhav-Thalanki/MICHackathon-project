import { OtpEntity } from "../otp.entity";

require('dotenv').config()
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

const messageSender = (otpEntity: OtpEntity) => {
  client.messages.create({
    body: `${otpEntity.otp}`,
    from: process.env.TWILIO_PHONE_NO,
    to: "+91" + otpEntity.phone
  }).then(res => {
    return res
  }).catch(e => {
    throw e
  })
}

export default messageSender