import Link from "next/link"
import { Home, MessageCircle, Bell, SquarePlus, User } from "lucide-react"

export default function MainSidebar() {
    return (
        <aside className="bg-[#181818] rounded-xl p-5">
            <div className="space-y-5 w-full text-white">
                <Link href="/" className="w-full hover:bg-gradient-to-r from-blue-400 to-blue-500 px-3 py-2 rounded-md flex items-center gap-2">
                    <Home className="w-5 h-5 mt-0.5" />
                    <span className="font-medium">Home</span>
                </Link>

                <Link href="/" className="w-full hover:bg-gradient-to-r from-blue-400 to-blue-500 px-3 py-2 rounded-md flex items-center gap-2">
                    <MessageCircle className="w-5 h-5 mt-0.5" />
                    <span className="font-medium">Messages</span>
                </Link>

                <Link href="/" className="w-full hover:bg-gradient-to-r from-blue-400 to-blue-500 px-3 py-2 rounded-md flex items-center gap-2">
                    <Bell className="w-5 h-5 mt-0.5" />
                    <span className="font-medium">Notifications</span>
                </Link>

                <Link href="/" className="w-full hover:bg-gradient-to-r from-blue-400 to-blue-500 px-3 py-2 rounded-md flex items-center gap-2">
                    <SquarePlus className="w-5 h-5 mt-0.5" />
                    <span className="font-medium">Create</span>
                </Link>

                <Link href="/" className="w-full hover:bg-gradient-to-r from-blue-400 to-blue-500 px-3 py-2 rounded-md flex items-center gap-2">
                    <User className="w-5 h-5 mt-0.5" />
                    <span className="font-medium">Profile</span>
                </Link>
            </div>
        </aside>
    )
}
