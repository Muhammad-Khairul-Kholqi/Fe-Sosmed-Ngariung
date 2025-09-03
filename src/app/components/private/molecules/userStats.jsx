export default function UserStats() {
    return (
        <div className="mt-5 flex items-center justify-between">
            <div className="flex flex-col items-center">
                <h2 className="text-md font-semibold">472</h2>
                <h3 className="text-xs">Posts</h3>
            </div>

            <div className="h-[30px] border-x border-gray-400" />

            <div className="flex flex-col items-center">
                <h2 className="text-md font-semibold">12.4K</h2>
                <h3 className="text-xs">Followers</h3>
            </div>

            <div className="h-[30px] border-x border-gray-400" />

            <div className="flex flex-col items-center">
                <h2 className="text-md font-semibold">228</h2>
                <h3 className="text-xs">Following</h3>
            </div>
        </div>
    )
}