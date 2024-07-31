"use client"

import { FaHtml5, FaCss3, FaJs, FaPython, FaNodeJs, FaGithub } from 'react-icons/fa'
import { FiFigma } from 'react-icons/fi'
import { SiDotnet, SiTailwindcss, SiNextdotjs } from 'react-icons/si'

//about-data 
const about = {
    title: 'about-me',
    Description: 'Lorem ipsum dolor sit amet consectetur',
    info: [
        {
            fieldName: 'Name',
            fieldValue: 'Luke Coleman'
        },
        {
            fieldName: 'Phone',
            fieldValue: '+55 (81) 9 7339-8604'
        },
        {
            fieldName: 'Experience',
            fieldValue: '4+ Years'
        },
        {
            fieldName: 'Nationality',
            fieldValue: 'Brazilian'
        }, {
            fieldName: 'Email',
            fieldValue: 'Weslleysantosdev@gmail.com'
        }, {
            fieldName: 'Freelance',
            fieldValue: 'Available'
        },
        {
            fieldName: 'Languages',
            fieldValue: 'Portuguese, English'
        }
    ]
}

// Experience data
const experience = {
    icon: '',
    title: 'My Experience',
    description: 'Lorem ipsum dolor sit amet consectetur',
    items: [
        {
            company: "Afroconcurseira",
            position: "web Developer - Volunteer",
            duration: '2019-2021'
        },
        {
            company: "Systi",
            position: "Full Stack Developer",
            duration: '2022 - Present'
        },
        {
            company: "FreeLancer",
            position: "Web Developer",
            duration: '2019 - Present'
        }

    ]
}

const education = {
    icon: '',
    title: 'My Education',
    description: 'Lorem ipsum dolor sit amet consectetur',
    items: [
        {
            institution: "Udemy",
            degree: "Visual Basic develpment",
            duration: '2021'
        },
        {
            institution: "Desenvolvedor.io",
            degree: "Asp.NET Core development",
            duration: '2022'
        },
        {
            institution: "Fiap",
            degree: "Python development",
            duration: '2023'
        },
        {
            institution: "Rocketseat",
            degree: "Java develpment",
            duration: '2023'
        },
        {
            institution: "Rocketseat",
            degree: "C# develpment",
            duration: '2024'
        },


    ]
}
//Skiils data
const skills = {
    title: 'My skills',
    description: 'Lorem ipsum dolor sit amet consectetur',
    skillList: [
        {
            icon: <FaJs />,
            name: 'Javascript'
        },
        {
            icon: <FaPython />,
            name: 'Python'
        },
        {
            icon: <SiDotnet />,
            name: 'Dotnet'
        },

        {
            icon: <SiTailwindcss />,
            name: 'Tailwindcss'
        },
        {
            icon: <FaNodeJs />,
            name: 'Node.JS'
        },
        {
            icon: <FiFigma />,
            name: 'Figma'
        },
        {
            icon: <FaGithub />,
            name: 'Tailwindcss'
        },
        {
            icon: <SiNextdotjs />,
            name: 'Next.js'
        }
    ]
}


import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@radix-ui/react-tooltip'
import { ScrollArea } from '@radix-ui/react-scroll-area'
import { motion } from 'framer-motion'

export default function Resume() {
    return (
        < motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: {
                    delay: 2.4, duration: 0.4, ease: "easeIn"
                }
            }}
            className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'
        >
            <div className="container">
                <Tabs defaultValue='experience'
                    className='flex flex-col xl:flex-row gap-[3rem]'>
                    <TabsList className='flex flex-col w-full max-w-[380px] mx-auto xl:mx-0
                    gap-6'>
                        <TabsTrigger value='experience'>Experience</TabsTrigger>
                        <TabsTrigger value='education'>Education</TabsTrigger>
                        <TabsTrigger value='skills'>Skills</TabsTrigger>
                        <TabsTrigger value='about'>About me</TabsTrigger>
                    </TabsList>

                    {/* Content */}
                    <div className='min-h-[70vh] w-full'>
                    
                        {/* Experience */}
                        <TabsContent value='experience'
                            className='w-full'>
                            Experience
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    )
};