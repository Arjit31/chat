import bcrypt from 'bcrypt';
import { NextResponse } from 'next/server'

export const POST = async (req: any, res: any) => {
    const data = await req.json();
    const { otpEnter, otp } = data;
    console.log(otp, otpEnter);
    try{
        const isMatch = await bcrypt.compare(otpEnter.toString(), otp);
        return NextResponse.json({ success: isMatch}, {status: 200})
    }
    catch(error){
        console.log(error);
        return NextResponse.json({status: 500})

    }
}
