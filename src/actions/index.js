"use server";

import nodemailer from "nodemailer";
import { EMAIL } from "@constants";

const user = "armenmartirosyan020@gmail.com";
const pass = "nabyzvclyxvkhxkr";

export async function sendEmail(formData) {
  const name = formData.get("name") || "";
  const email = formData.get("email") || "";
  const phone = formData.get("phone") || "";
  const message = formData.get("message") || "";

  if (!email || !message || !name || !phone) {
    return {
      message: "The fields are required.",
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
    from: "'Contact manager' <armenmartirosyan020@gmail.com>",
    to: EMAIL,
    subject: "Contact form submission:",
    html: getHTMLTemplate({ name, email, phone, message }),
  };

  try {
    await transporter.sendMail(mailData);
  } catch (error) {
    return {
      message: "Failed to send the email!",
      success: false,
    };
  }

  return {
    success: true,
    message: "Email sent.",
  };
}

function getHTMLTemplate({ name, email, phone, message }) {
  return `
    <html>
    <body style="font-family: Arial, sans-serif;">
      <div style="max-width: 600px; margin: auto; padding: 20px; background: #fff; box-shadow: 0px 2px 10px rgba(0,0,0,0.1);">
        <h2 style="text-align: center; background: #333; color: white; padding: 10px;">📩 New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <div style="background: #f9f9f9; padding: 15px; border-left: 4px solid #333;">
          <p>${message}</p>
        </div>
      </div>
    </body>
    </html>
  `;
}
