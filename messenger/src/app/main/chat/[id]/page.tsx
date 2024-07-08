import Chatbar from "@/app/component/chatbar"
import FriendChatTile from "@/app/component/friendChatTile"
import UserChatTile from "@/app/component/userChatTile"

export default function Page() {
  return (
    <div className="bg-white max-h-screen h-full flex flex-col justify-between">
        <div className='top'>
            <div className="flex items-center px-10 pt-2">
                <div className="border-solid border-black rounded-full border-2 h-16 w-16 flex items-center justify-center z-20 bg-white">
                    <img src="/images/logo.png" className="h-10" />
                </div>
                <div className="ml-10 text-l">UserName</div>
            </div>
            <hr className="h-0.5 border-0 bg-black relative bottom-4 z-0" />
        </div>
        <div className="h-full overflow-auto no-scrollbar">
            <FriendChatTile/>
            <UserChatTile/>
            <UserChatTile/>
            <FriendChatTile/>
            <FriendChatTile/>
            <FriendChatTile/>
            <UserChatTile/>
        </div>
        <div>
            <Chatbar/>
        </div>
    </div>
  )
}
