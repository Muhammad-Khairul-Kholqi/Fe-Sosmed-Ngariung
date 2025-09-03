import Image from "next/image"
import { BadgeCheck } from "lucide-react"
import UserStats from "@/app/components/private/molecules/userStats"
import LinkSidebarList from "@/app/components/private/molecules/linkSideList"

export default function MainSidebar() {
    return (
        <div className="w-full max-w-[20%] min-h-fit border border-gray-300 rounded-xl">
            <div className="flex justify-center">
                <div className="rounded-full w-[80px] h-[80px]">
                    <Image
                        src="https://drive.google.com/uc?export=view&id=1Fb8V5T46mVAlWwTAuFYvxZvHtD7HM2t4"
                        width={96}
                        height={96}
                        alt=""
                        className="rounded-full object-cover w-full h-full"
                    />
                </div>
            </div>

            <div className="mt-5">
                <div className="flex items-center justify-center gap-1">
                    <BadgeCheck className="h-5 w-5 text-white" fill="#60A5FA" />
                    <h2 className="text-xl font-bold tracking-wide text-center">Khairul Kholqi</h2>
                </div>
                <h3 className="text-center mt-1 text-gray-600 font-medium text-sm">@khairul45_</h3>
            </div>
            <UserStats />
            <LinkSidebarList />
        </div>
    )
}