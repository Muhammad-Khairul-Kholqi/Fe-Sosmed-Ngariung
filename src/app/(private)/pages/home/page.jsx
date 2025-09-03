import StatusSection from "@/app/components/private/section/home/statusSection"
import CreatePostSection from "@/app/components/private/section/home/createPostSection"

export default function HomePage() {
    return (
        <div className="flex items-start gap-5">
            <div className="space-y-5 w-full max-w-[70%]">
                <div className="border border-gray-300 p-5 rounded-xl">
                    <StatusSection />
                </div>

                <div className="border border-gray-300 p-5 rounded-xl">
                    <CreatePostSection />
                </div>
            </div>

            <div className="w-full max-w-[30%] p-5 border border-gray-300 rounded-xl">
                suggested for you
            </div>
        </div>
    )
}