"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

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

export const Nav = () => {
    const pathname = usePathname()
    // console.log(pathname)
    return (<nav className="flex gap-8">
        {links.map((link, index) => {
            return (<Link
                href={link.path}
                key={index}
                className={`${link.path === pathname && "text-accent border-b-2 hover:bg-accent hover:rounded-xl hover:text-primary border-accent"}
                    capitalize font-medium hover:text-accent p-1 transition-all`}
            >
                {link.name}
            </Link>)
        })}
    </nav>
    )
}