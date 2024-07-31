"use client"

import ContUp from "react-countup"



const stats = [
    {
        num: 4,
        text: "Years of Experience"
    }, {
        num: 15,
        text: "Projects completed"
    }, {
        num: 8,
        text: "Technologies mastered"
    }, {
        num: 300,
        text: "Code commits"
    }
]
export const Stats = () => {
    return <section className="pt-4 pb-12 xl:pt-o xl:pb-0">
        <div className="container mx-auto">
            <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">

                {stats.map((item, index) => {
                    return (
                        <div key={index} className="flex-1 flex gap-4 items-center justify-center xl:justify-start mb-8">
                            <ContUp
                                end={item.num}
                                duration={5}
                                delay={2}
                                className="text-5xl xl:text-6xl font-extrabold" />
                            <p className={`${item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]:"} leading-snug text-white/80`}
                            >
                                {item.text}
                            </p>
                        </div>
                    )
                })}
            </div>
        </div>
    </section>
}