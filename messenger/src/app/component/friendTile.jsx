export default function FriendTile() {
    return (
        <div>
            <button className="container  h-12 flex items-center justify-between border-neutral-100
            px-2 py-1 hover:bg-neutral-100 focus:bg-black focus:text-white">
                <div className="flex items-center justify-center">
                    <div className="border-solid border-black rounded-full border-2 h-8 w-8 flex items-center justify-center z-20 bg-white">
                        <img src="/images/logo.png" className="h-5" />
                    </div>
                    <div className="ml-2">Friend Name</div>
                </div>
                <div>5</div>
            </button>
        </div>
    )
}