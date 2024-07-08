import Profile from "@/app/component/profile"
import FriendList from "@/app/component/friendList"

export default function Page() {
  return (
    <div className="w-full h-full flex">
      <div className="w-2/3 h-full bg-white border-r-2 border-black">
        <Profile />
      </div>
      <div className="bg-white w-1/3">
        <FriendList />
      </div>
    </div>
  )
}
