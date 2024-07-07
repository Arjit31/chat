import Search from "../component/search";
import FriendList from "@/app/component/friendList"
import Topbar from "@/app/component/topbar"

export default function Sidebar() {
  return (
    <div className="h-screen flex flex-col">
        <Topbar/>
        <Search/>
        <FriendList/>
    </div>
  )
}
