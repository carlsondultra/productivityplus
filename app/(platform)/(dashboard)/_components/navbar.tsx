import { Button } from "@/components/ui/button"
import { Logo } from "@/components/ui/logo"
import { Plus } from "lucide-react"

export const Navbar = () => {
    return (
        <nav className="fixed z-50 top-0 px-4 w-full h-14 border-b shadow-sm bg-white flex items-center">
            {/* mobile sidebar */}
            <div className="flex items-center gap-x-4">
                <div className="hidden md:flex">
                    <Logo />
                </div>
                <Button size="sm" className="rounded-sm hidden md:block h-auto py-1.5 px-2">
                    Create
                </Button>
                <Button size="sm" className="rounded-sm block md:hidden">
                    <Plus className="h-4 w-4" />
                </Button>
            </div>
        </nav>
    )
}