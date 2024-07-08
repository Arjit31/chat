import React from 'react'

export default function Page() {
  return (
    <div>
        <div className='top bg-white'>
            <div className="flex items-center px-10 pt-2">
                <div className="border-solid border-black rounded-full border-2 h-16 w-16 flex items-center justify-center z-20 bg-white">
                    <img src="/images/logo.png" className="h-10" />
                </div>
                <div className="ml-10 text-l">UserName</div>
            </div>
            <hr className="h-0.5 border-0 bg-black relative bottom-4 z-0" />
        </div>
    </div>
  )
}
