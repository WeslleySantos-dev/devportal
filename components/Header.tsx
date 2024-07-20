import Link from "next/link"
import { Button } from "./ui/button"
import { Nav } from "./Nav"
import { MobileNav } from "./MobileNav"

export const Header = () => {

    return (
        <header className="py-8 xl:py-6 text-white bg-slate-900">
            <div className="container gap-10 w-screen font-bold flex justify-between items-center">
                <Link href="/" className="font-bold text-2xl ">
                    <h1>Weslley S<span className="text-accent-default">.</span>
                    </h1>
                </Link>
                {/* Desktop nav */}
                <div className="hidden xl:flex items-center gap-8">
                    <Nav />
                    <Link href="/contact">
                        <Button>HIRE ME</Button>
                    </Link>

                </div>
                {/* Mobile nav */}
                <div className="xl:hidden items-center gap-8">
                    <MobileNav />
                </div>

            </div>
        </header>)
}