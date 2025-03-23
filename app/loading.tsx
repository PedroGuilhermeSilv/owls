import Image from "next/image"

export default function Loading() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center">
            <div className="flex flex-col items-center">
                <div className="animate-pulse">
                    <Image
                        src="/images/owls-logo.png"
                        alt="Owls Logo"
                        width={120}
                        height={120}
                        className="h-30 w-30 object-contain"
                    />
                </div>
                <h2 className="mt-4 text-2xl font-bold text-orange-500">Loading...</h2>
                <div className="mt-4 h-1 w-48 overflow-hidden rounded-full bg-gray-200">
                    <div className="h-full w-1/2 animate-[loading_1.5s_ease-in-out_infinite] rounded-full bg-orange-500"></div>
                </div>
            </div>
        </div>
    )
} 