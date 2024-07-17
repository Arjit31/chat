import {connectToDataBase} from "@/lib/mongoDb";
import User from "@/models/User"
import { NextResponse } from "next/server";
import bcrypt from 'bcrypt'

export const POST = async(req: any) => {
    const data = await req.json();
    let {username, name, password, email} = data;
    password = await bcrypt.hash(password.toString(), 10);
    try{
        await connectToDataBase();
        const user = new User({username, email, name, password})
        await user.save()
        return NextResponse.json({ message: 'User registered successfully' }, {status: 201});
    }
    catch(error){
        console.error('Error registering user:', error);
        return NextResponse.json({message: 'Internal Server Error'}, {status: 500});
    }
}