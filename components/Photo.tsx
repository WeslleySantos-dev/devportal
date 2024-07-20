"use client"

import { delay, motion } from "framer-motion"
import Image from "next/image"


export const Photo = () => {
    return (
        <div className="size-full relative">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: {
                        delay: 1.6, duration: 0.4, ease: "easeIn"
                    }
                }}
            >
                {/* Image */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: {
                            delay: 1.6, duration: 0.4, ease: "easeInOut"
                        }
                    }}
                >
                    <Image
                        src="/assets/photo.png"
                        priority
                        quality={100}
                        fill alt="my personal photo"
                        // className="object-cover flex fill rounded-full" 
                        className="object-cover rounded-full"
                    />
                    {/* <div className="size-[18.75rem]  xl:w-[350px] xl:h-[350px] mix-blend-lighten">
                    </div> */}

                </motion.div>
                {/* circle */}
                <motion.svg className="w-[300px] xl:w-[400px] h-[300px] xl:h-[400px] flex  relative top-0"
                    fill="transparent"
                    viewBox="0 0 506 506"
                    xmlns="http://www.w3.org/2000/svg">
                    <motion.circle
                        cx="253"
                        cy="253"
                        r="250"
                        stroke="#00ffff"
                        strokeWidth="5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ strokeDasharray: "24 10 0 0" }}
                        animate={{
                            strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22  22"],
                            rotate: [120, 360]
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            repeatType: "loop"
                        }}
                    />
                </motion.svg>


            </motion.div>
        </div>
    )
}