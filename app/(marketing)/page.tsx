import { Medal } from "lucide-react";
import localFont from "next/font/local"
import { Poppins } from "next/font/google"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils"

const headingFont = localFont({
    src: "../../public/fonts/font.woff2"
})

const textFont = Poppins({
    subsets: ["latin"],
    weight: [
        "100",
        "200",
        "300",
        "400",
        "500",
        "600",
        "700",
        "800",
        "900"
    ],
})

const MarketingPage = () => {
    return (
        <div className="flex items-center justify-center flex-col">
            <div className={cn(
                "flex items-center justify-center flex-col",
                headingFont.className,
            )}>
                <div className="mb-4 flex items-center border shadow-sm p-4 bg-amber-100 text-amber-700 rounded-full uppercase">
                    <Medal className="h-6 w-6 mr-2" />
                    Task Management made simple!
                </div>
                <h1 className="text-3xl md:text-6xl text-center text-neutral-800 mb-6">
                    Add ProductivityPlus to your workflow!
                </h1>

                <img src="dashboard.png" alt="dashboard" width="80%" height="80%"/>

            </div>
            <div className={cn(
                "text-sm md:text-xl text-neutral-500 mt-4 max-w-xs md:max-w-2xl text-center mx-auto",
                textFont.className,
            )}>
                Work together with colleagues, oversee projects, and achieve success!
            </div>
            <Button className="mt-6" size="lg" asChild>
                <Link href="/sign-up">
                    Try out productivityplus now!
                </Link>
            </Button>
        </div>
    )
}

export default MarketingPage;