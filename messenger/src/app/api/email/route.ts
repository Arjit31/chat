import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer';
import crypto from 'crypto'
import bcrypt from 'bcrypt'

async function transport(mailOptions: any, transporter: any) {
    await transporter.sendMail(mailOptions);
};

export const POST = async (req: any, res: any) => {
    const data = await req.json();
    const { email, subject } = data;
    // console.log(data);
    // console.log(req);
    if (!email || !subject) {
        throw new Error('Email or subject is missing');
    }
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAIL_PASSWORD,
        },
    });
    const otp = crypto.randomInt(100000, 999999);
    const hashedOtp = await bcrypt.hash(otp.toString(), 10);
    console.log(otp, hashedOtp);
    const mailOptions = {
        from: process.env.EMAIL,
        to: email,
        subject: subject,
        text: `Your varification code is ${otp}`,
    };

    try {
        transport(mailOptions, transporter);
        return NextResponse.json({ success: true, otp: hashedOtp }, { status: 200 })
    }
    catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ success: false, error: 'Failed to send email' }, { status: 500 })
    }
};