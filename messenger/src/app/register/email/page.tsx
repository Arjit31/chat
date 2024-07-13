'use client'

import React, { MouseEventHandler } from 'react'
import { useState } from 'react'
// import {varify} from "@/app/api/email/varify"

export default function page() {
    const [email, setEmail] = useState('');
    const sendCode: MouseEventHandler = async (e: React.MouseEvent<HTMLElement>) => {
        console.log("hello", email);
        const res = await fetch('http://localhost:3000/api/email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
              },
            body: JSON.stringify({ email, subject: 'Varification Code' }),
        });
        const data = await res.json();
        // let data = await varify(email);
        if (data.success) {
            alert('Email sent successfully');
        } else {
            alert('Failed to send email');
        }
    };
    return (
        <div className='h-screen w-screen'>
            <div className='w-screen h-screen  flex items-center justify-center'>
                <div className='text-lg w-3/5 h-64 flex flex-col justify-evenly bg-white px-8 border-2 border-black rounded-lg z-20'>
                    <div className='flex items-center justify-between'>
                        <label>email:</label>
                        <input onChange={(e) => setEmail(e.target.value)} required placeholder='email' type='email' className='w-2/3 border rounded-lg px-2 py-1 focus:placeholder-transparent focus:bg-white hover:bg-neutral-50'></input>
                        <button onClick={sendCode} className='bg-black text-white border-2 border-black px-2 h-10 hover:bg-white hover:text-black active:bg-black active:text-white rounded-lg'>send</button>
                    </div>
                    <div className='flex items-center justify-between'>
                        <label>code:</label>
                        <input placeholder='code' className='w-2/3 border rounded-lg px-2 py-1 focus:placeholder-transparent focus:bg-white hover:bg-neutral-50'></input>
                        <button className='border-2 border-black px-2 h-10 hover:bg-black hover:text-white active:bg-white active:text-black rounded-lg'>verify</button>
                    </div>

                </div>
            </div>
            <hr className="h-0.5 border-0 bg-black relative bottom-1/2 z-10" />
            <div className='absolute bottom-0 z-0 bg-white h-1/2 w-full'></div>
        </div>
    )
}
