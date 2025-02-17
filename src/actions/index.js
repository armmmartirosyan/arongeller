"use server";

import nodemailer from "nodemailer";
import { EMAIL } from "@constants";

const user = "armenmartirosyan020@gmail.com";
const pass = "nabyzvclyxvkhxkr";

export async function sendEmail(formData) {
  const email = formData.get("email") || "";
  const message = formData.get("message") || "";

  if (!email || !message) {
    return {
      message: "The email and message fields are required.",
      success: false,
    };
  }

  const transporter = nodemailer.createTransport({
    secure: true,
    host: "smtp.gmail.com",
    port: 465,
    auth: {
      user,
      pass,
    },
  });

  const mailData = {
    from: "'Wants to connect' <armenmartirosyan020@gmail.com>",
    to: EMAIL,
    subject: "Wants to connect to you.",
    text: message,
    html: `<div>Email: ${email}<br>Message: ${message}</div>`,
  };

  try {
    await transporter.sendMail(mailData);
  } catch (error) {
    return {
      message: "Failed to send message.",
      success: false,
    };
  }

  return {
    success: true,
    message:
      "Thank you for connecting with me. The message was sent successfully.",
  };
}
