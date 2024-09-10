import mailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";
import type { contactFormType } from "@/interfaces/ContactFormType";

const createTransporter = () => {
  if (!process.env.USER_EMAIL || !process.env.USER_PASS) {
    throw new Error("Missing email credentials");
  }

  return mailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.USER_EMAIL,
      pass: process.env.USER_PASS,
    },
  });
};

const sendEmail = async (
  transporter: mailer.Transporter,
  mailOptions: mailer.SendMailOptions
) => {
  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        reject(error);
      } else {
        resolve(info);
      }
    });
  });
};

export async function POST(request: NextRequest) {
  try {
    const body: contactFormType = await request.json();

    const transporter = createTransporter();

    const mailOptions = {
      from: "From:" + " " + body.email,
      to: process.env.TARGET_EMAIL,
      subject: body.subject,
      text: body.message,
    };

    const mailResponse = await sendEmail(transporter, mailOptions);

    return NextResponse.json({
      message: "Email sent successfully",
      mailResponse,
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
