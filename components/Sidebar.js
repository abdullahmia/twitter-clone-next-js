import {
  BellIcon, BookmarkIcon,
  ClipboardListIcon, DotsCircleHorizontalIcon, DotsHorizontalIcon, HashtagIcon, InboxIcon, UserIcon
} from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import SidebarLink from "./SidebarLink";


const Sidebar = () => {
  const {data: session} = useSession();
  return (
    <div className="hidden sm:flex flex-col items-center xl:items-start xl:w-[340px] p-2 fixed h-full">
      <div className="flex items-center justify-center w-14 h-14 hoverAnimation p-0 xl:ml-24">
        <Image src="/images/logo.jpg" width={30} height={30} alt="logo" />
      </div>
      <div className="mt-4 mb-2.5 xl:ml-24">
        <SidebarLink text="Home" Icon={HomeIcon} active />
        <SidebarLink text="Explore" Icon={HashtagIcon} />
        <SidebarLink text="Notifications" Icon={BellIcon} />
        <SidebarLink text="Messages" Icon={InboxIcon} />
        <SidebarLink text="Bookmarks" Icon={BookmarkIcon} />
        <SidebarLink text="Lists" Icon={ClipboardListIcon} />
        <SidebarLink text="Profile" Icon={UserIcon} />
        <SidebarLink text="More" Icon={DotsCircleHorizontalIcon} />
      </div>
      <button className="hidden xl:inline bg-[#1d9bf0] ml-auto rounded-full font-bold text-xl w-56 h-[52px] shadow-md hover:bg-[#1a8cd8] text-white">Tweet</button>

      <div onClick={signOut} className="text-[#d9d9d9] flex items-center justify-center hoverAnimation xl:ml-auto xl:-mr-5 mt-auto">
        <img src={session.user.image} alt="User" className="h-10 w-10 rounded-full xl:mr-2.5" />
        <div className="hidden xl:inline leading-5">
          <h2 className="font-bold">{session.user.name}</h2>
          <p className="text-[#6e767d]">@{session.user.tag}</p>
        </div>
        <DotsHorizontalIcon className="h-5 hidden xl:inline ml-10" />
      </div>
    </div>
  )
}

export default Sidebar;