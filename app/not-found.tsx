import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function NotFound() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center text-center">
            <div className="container max-w-md">
                <h1 className="mb-4 text-6xl font-bold text-orange-500">404</h1>
                <h2 className="mb-8 text-2xl font-medium">Page Not Found</h2>
                <p className="mb-8 text-gray-500">
                    The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                </p>
                <Button asChild className="bg-orange-500 text-white hover:bg-orange-600">
                    <Link href="/">Go Back Home</Link>
                </Button>
            </div>
        </div>
    )
} 