import React from 'react'

export default function page() {
    return (
        <div className='h-screen w-screen'>
            <div className='w-screen h-screen  flex items-center justify-center'>
                <form className='text-lg w-2/5 h-80 flex flex-col justify-evenly bg-white px-8 border-2 border-black rounded-lg z-20'>
                    <div className='flex items-center justify-between'>
                        <label>Username:</label>
                        <input placeholder='Username' className='w-2/3 border rounded-lg px-2 py-1 focus:placeholder-transparent focus:bg-white hover:bg-neutral-50'></input>
                    </div>
                    <div className='flex items-center justify-between'>
                        <label>password:</label>
                        <input placeholder='password' type='password' className='w-2/3 border rounded-lg px-2 py-1 focus:placeholder-transparent focus:bg-white hover:bg-neutral-50'></input>
                    </div>
                    <div className='flex items-center justify-around'>
                        <button className='bg-black text-white border-2 border-black px-2 h-10 hover:bg-white hover:text-black active:bg-black active:text-white rounded-lg'>Login</button>
                        <button className='border-2 border-black px-2 h-10 hover:bg-black hover:text-white active:bg-white active:text-black rounded-lg'>Register</button>
                    </div>
                </form>
            </div>
            <hr className="h-0.5 border-0 bg-black relative bottom-1/2 z-10" />
            <div className='absolute bottom-0 z-0 bg-white h-1/2 w-full'></div>
        </div>
    )
}
