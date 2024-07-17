'use client'
import { useRouter } from "next/navigation";
import { useState } from 'react'

export default function page() {
    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");
    const router = useRouter();
    const handleSubmit = async (e:any) => {
        e.preventDefault();
        try {
            const res = await fetch('http://localhost:3000/api/login',{
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify({username: username, password: password}),
            })
            const data = await res.json();
            alert(data.message);
            if(!data.success)
            {
                throw new Error('Login Failed!');
            }
            router.push(`/main/chat/${username}`);
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <div className='h-screen w-screen'>
            <div className='w-screen h-screen  flex items-center justify-center'>
                <form className='text-lg w-2/5 h-80 flex flex-col justify-evenly bg-white px-8 border-2 border-black rounded-lg z-20'>
                    <div className='flex items-center justify-between'>
                        <label>Username:</label>
                        <input onChange={(e) => setUsername(e.target.value)} placeholder='Username' className='w-2/3 border rounded-lg px-2 py-1 focus:placeholder-transparent focus:bg-white hover:bg-neutral-50'></input>
                    </div>
                    <div className='flex items-center justify-between'>
                        <label>password:</label>
                        <input onChange={(e) => setPassword(e.target.value)} placeholder='password' type='password' className='w-2/3 border rounded-lg px-2 py-1 focus:placeholder-transparent focus:bg-white hover:bg-neutral-50'></input>
                    </div>
                    <div className='flex items-center justify-around'>
                        <button onClick={handleSubmit} className='bg-black text-white border-2 border-black px-2 h-10 hover:bg-white hover:text-black active:bg-black active:text-white rounded-lg'>Login</button>
                        <button className='border-2 border-black px-2 h-10 hover:bg-black hover:text-white active:bg-white active:text-black rounded-lg'>Register</button>
                    </div>
                </form>
            </div>
            <hr className="h-0.5 border-0 bg-black relative bottom-1/2 z-10" />
            <div className='absolute bottom-0 z-0 bg-white h-1/2 w-full'></div>
        </div>
    )
}
