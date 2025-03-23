"use client"

import { Button } from "@/components/ui/button"
import { Link } from "lucide-react"
import { useEffect } from "react"

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])

    return (
        <div className="flex min-h-screen flex-col items-center justify-center text-center">
            <div className="container max-w-md">
                <h1 className="mb-4 text-6xl font-bold text-orange-500">Oops!</h1>
                <h2 className="mb-8 text-2xl font-medium">Something went wrong</h2>
                <p className="mb-8 text-gray-500">
                    We apologize for the inconvenience. Our team has been notified and is working to fix the issue.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                    <Button onClick={reset} className="bg-orange-500 text-white hover:bg-orange-600">
                        Try Again
                    </Button>
                    <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white" asChild>
                        <Link href="/">Go Back Home</Link>
                    </Button>
                </div>
            </div>
        </div>
    )
} 