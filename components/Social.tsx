import Link from "next/link"

import { FaGithub, FaLinkedin } from "react-icons/fa"
import { MdOutlineEmail } from "react-icons/md"

const Socials = [
    { icon: <FaGithub className="w-1/2 h-1/2" />, path: 'https://github.com/WeslleySantos-dev' },
    { icon: <FaLinkedin className="w-1/2 h-1/2" />, path: 'https://www.linkedin.com/in/weslleysantosdev/' },
    { icon: <MdOutlineEmail className="w-1/2 h-1/2" />, path: 'weslleysantosdev@gmail.com' }
]
export const Social = ({ containerStyles, iconStyles }: any) => {
    return (
        <div className={containerStyles}>
            {Socials.map((item, index) => {
                return (
                    <Link key={index}
                        href={item.path}
                        className={iconStyles}
                    >
                        {item.icon}
                    </Link>
                )
            })}
        </div>
    )
}