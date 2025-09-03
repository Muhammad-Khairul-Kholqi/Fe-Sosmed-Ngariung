import Image from "next/image"
import { Search, Plus, Video, Camera } from "lucide-react"

export default function CreatePostSection() {
    return (
        <div>
            <div className="flex items-start gap-5 w-full">
                <div className="w-ful">
                    <div className="relative rounded-full w-[60px] h-[60px]">
                        <Image
                            src="https://drive.google.com/uc?export=view&id=1Fb8V5T46mVAlWwTAuFYvxZvHtD7HM2t4"
                            width={96}
                            height={96}
                            alt=""
                            className="rounded-full object-cover w-full h-full"
                        />

                        <div className="absolute -bottom-1 -right-1 bg-black rounded-full p-1 border-2 border-white">
                            <Plus className="w-3 h-3 text-white" />
                        </div>
                    </div>
                </div>

                <div className="w-full">
                    <div className="p-3 rounded-full border border-gray-200 flex items-center gap-2">
                        <Search className="text-gray-600 w-5 h-5" />
                        <input
                            type="text"
                            className="w-full border-none outline-none placeholder:text-sm"
                            placeholder="Search something"
                        />
                    </div>

                    <div className="flex items-center gap-3 mt-5">
                        <button className="flex items-center gap-2 border border-gray-200 py-2 px-3 rounded-full cursor-pointer">
                            <Camera className="w-4 h-4 text-[#ED6262]" />
                            <span className="text-sm font-medium text-gray-600">Post</span>
                        </button>

                        <button className="flex items-center gap-2 border border-gray-200 py-2 px-3 rounded-full cursor-pointer">
                            <Video className="w-4 h-4 text-[#76D0EB]" />
                            <span className="text-sm font-medium text-gray-600">Story</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
