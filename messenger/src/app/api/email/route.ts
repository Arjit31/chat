import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer';

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

    const mailOptions = {
        from: process.env.EMAIL,
        to: email,
        subject: subject,
        text: `Your varification code is ${3423}`,
    };

    try {
        transport(mailOptions, transporter);
        return NextResponse.json({ success: true }, { status: 200 })
    }
    catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ success: false, error: 'Failed to send email' }, { status: 500 })
    }
};