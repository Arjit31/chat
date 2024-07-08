export default function Chatbar() {
  return (
    <div className="flex items-center justify-around border-solid border-t-2  border-black">
        <input placeholder="Type Message..." className="text-sm w-full px-3 py-1 focus:placeholder-transparent outline-none hover:outline-none focus:bg-white focus:outline-none focus:border-none hover:bg-neutral-100"/>
        <button className= "px-2 py-1 bg-black text-white hover:text-black hover:bg-white active:bg-black active:text-white">
            Send
        </button>
    </div>
  )
}
