export default function page() {
    return (
        <div className="w-screen h-screen">
            <div className="flex items-center justify-around w-full h-full py-2">
                <div className="w-full ml-4 mr-2 h-full border-2 border-black rounded-xl p-1">
                    <div className="h-full w-full bg-slate-400 rounded-lg"></div>
                </div>
                <div className="w-full mr-4 ml-2 h-full border-2 border-black rounded-xl p-1">
                    <div className="h-full w-full bg-slate-400 rounded-lg"></div>
                </div>
            </div>
            <div className="relative bottom-1/4 w-full">
            <div className="flex justify-center">
                <div className="border-solid border-black rounded-full border-2 h-28 w-28 flex items-center justify-center z-20 bg-white">
                    <img src="/images/logo.png" className="h-10" />
                </div>
            </div>
            </div>
        </div>
    )
}
