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
    return (
        <div>mobilediv  </div>
    )
}