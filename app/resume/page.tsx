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
        }


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
import { ScrollArea } from '@/components/ui/scroll-area'
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
                        <TabsTrigger className=' bg-secondary' value='experience'>Experience</TabsTrigger>
                        <TabsTrigger className='bg-secondary' value='education'>Education</TabsTrigger>
                        <TabsTrigger className='bg-secondary' value='skills'>Skills</TabsTrigger>
                        <TabsTrigger className='bg-secondary' value='about'>About me</TabsTrigger>
                    </TabsList>

                    {/* Content */}
                    <div className='min-h-[70vh] w-full'>
                        {/* Experience */}
                        <TabsContent value='experience'
                            className='w-full'>
                            <div className=' flex flex-col gap-8 text-center xl:text-left'>
                                <h3 className='text-4xl font-bold'>
                                    {experience.title}</h3>
                                <p className=' max-w-[600px] text-white/50 mx-auto xl:mx-0'>{experience.description}
                                </p>
                                <ScrollArea className='h-[400px]'>
                                    <ul className='grid grid-cols-1 lg:grid-cols-2 gap-7'>
                                        {experience.items.map((item, index) => {
                                            return <li key={index}

                                                className='bg-secondary h-[11.5rem] py-4 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                                                <span className=' text-accent'>{item.duration}</span>
                                                <h3 className='text-xl max-w-64 min-h-12 text-center lg:text-left'>{item.position}</h3>
                                                <div className=' flex items-center gap-3'>
                                                    {/* dot */}
                                                    <span className='w-[0.375rem] h-[0.375rem] rounded-full bg-accent'></span>
                                                    <p className='text-white/60'>{item.company}</p>
                                                </div>
                                            </li>
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/* Education */}
                        <TabsContent value='education'
                            className='w-full'>
                            <div className=' flex flex-col gap-8 text-center xl:text-left'>
                                <h3 className='text-4xl font-bold'>
                                    {experience.title}</h3>
                                <p className=' max-w-[600px] text-white/50 mx-auto xl:mx-0'>{education.description}
                                </p>
                                <ScrollArea className='h-[400px]'>
                                    <ul className='grid grid-cols-1 lg:grid-cols-2 gap-7'>
                                        {education.items.map((item, index) => {
                                            return <li key={index}

                                                className='bg-secondary h-[11.5rem] py-4 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                                                <span className=' text-accent'>{item.duration}</span>
                                                <h3 className='text-xl max-w-64 min-h-12 text-center lg:text-left'>{item.degree}</h3>
                                                <div className=' flex items-center gap-3'>
                                                    {/* dot */}
                                                    <span className='w-[0.375rem] h-[0.375rem] rounded-full bg-accent'></span>
                                                    <p className='text-white/60'>{item.institution}</p>
                                                </div>
                                            </li>
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/* skills */}
                        <TabsContent value='skills'
                            className='w-full h-full'>
                            <div className='flex flex-col gap-7'>
                                <div className='flex flex-col gap-7 text-center xl:text-left'>
                                    <h3 className='text-4xl font-bold'>{skills.title}</h3>
                                    <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0 '>{skills.description}</p>
                                </div>
                                <ul className=' grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-7	'>
                                    {skills.skillList.map((skill, index) => {
                                        return <li key={index}>
                                            <TooltipProvider delayDuration={100}>
                                                <Tooltip>
                                                    <TooltipTrigger className='w-full h-36 group bg-secondary rounded-xl flex items-center justify-center'>
                                                        <div className='text-6xl group-hover:text-accent transition-all duration-300'>{skill.icon}</div>
                                                    </TooltipTrigger>
                                                    <TooltipContent>
                                                        <p className='capitalize'>{skill.name}</p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>
                                        </li>
                                    })}
                                </ul>
                            </div>
                        </TabsContent>

                        {/* about */}
                        <TabsContent value='about'
                            className='w-full'>
                            About me
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    )
};