import LinkSidebarItem from "@/app/components/private/atoms/linkSideItem"
import { Home, MessageCircle, Bell, User, LogOut } from "lucide-react"

export default function LinkSidebarList() {
    return (
        <div className="mt-5 flex flex-col items-start space-y-2">
            <LinkSidebarItem icon={Home} url="/pages/home" label="Home" />
            <LinkSidebarItem icon={MessageCircle} url="/pages/messages" label="Messages" />
            <LinkSidebarItem icon={Bell} url="/pages/notifications" label="Notifications" />
            <LinkSidebarItem icon={User} url="/pages/profile" label="Profile" />
            <LinkSidebarItem icon={LogOut} url="/logout" label="Logout" />
        </div>
    )
}
