"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { CiMenuFries } from 'react-icons/ci'
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet"



const links = [
    {
        name: 'Home',
        path: '/'
    },
    {
        name: 'Services',
        path: '/services'
    },
    {
        name: 'Resume',
        path: '/resume'
    },
    {
        name: 'work',
        path: '/work'
    },
    {
        name: 'Contact',
        path: '/contact'
    }
]

export const MobileNav = () => {
    const pathname = usePathname()
    // console.log(pathname)
    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center align-middle">
                <CiMenuFries className="text-[2rem] text-accent-default" />
            </SheetTrigger>
            <SheetContent className="flex flex-col border-0">
                <Link href="/" className="font-bold text-3xl capitalize  mt-32 mb-40 text-center text-2xl">
                    <h1>Weslley S<span className="text-accent-default">.</span></h1>
                </Link>
                <nav className="flex flex-col justify-center items-center gap-4">
                    {links.map((link, index) => {
                        return (
                            <SheetClose asChild={true}>

                                <Link
                                    href={link.path}
                                    key={index}
                                    className={`${link.path === pathname && "text-accent-default border-b-2 hover:bg-accent-default hover:rounded-xl hover:text-primary border-accent-default"}
                                capitalize font-medium   hover:text-accent-default p-1 transition-all`}
                                >
                                    {link.name}
                                </Link>
                            </SheetClose>
                        )
                    })}
                </nav>
            </SheetContent>
        </Sheet>

    )
}