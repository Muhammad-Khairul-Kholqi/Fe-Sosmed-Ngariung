import Link from "next/link"

export default function LinkSidebarItem({ icon: Icon, url, label }) {
    return (
        <Link href={url} className="w-full flex items-center gap-2 hover:bg-gray-100 px-3 py-2 rounded-md">
            <Icon className="w-4 h-4 -mt-0.5" />
            <span className="text-sm">{label}</span>
        </Link>
    )
}