import MainSidebar from "../components/private/global/mainSidebar"

export default function PrivateLayout({ children }) {
    return (
        <div className="flex justify-center p-5">
            <div className="w-full max-w-[1300px] flex items-start gap-5">
                <MainSidebar />

                <div className="w-full max-w-[80%]">
                    {children}
                </div>
            </div>
        </div>
    )
}