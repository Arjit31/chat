import { connectToDataBase } from "@/lib/mongoDb";
import User from "@/models/User";
import bcrypt from 'bcrypt'
import { error } from "console";
import { NextResponse } from "next/server";


export const POST = async(req:any) => {
    const data = await req.json();
    let {username, password} = data;
    try {
        await connectToDataBase();
        const user = await User.findOne({ username: username});
        console.log(username, password);
        if (!user) {
            return NextResponse.json({ message: 'Invalid username!', success: false}, { status: 401 });
        }

        const passwordMatch = await bcrypt.compare(password.toString(), user.password);
        if (!passwordMatch) {
            return NextResponse.json({ message: 'Invalid password!' , success: false}, { status: 401 });
        }

        return NextResponse.json({message:'Login Successful!!', success:true}, { status: 200 });
    } catch (error) {
        console.error('Error logging in:', error);
        return NextResponse.json({ message: 'Internal Server Error!' , success: false}, { status: 500 });
    }
}