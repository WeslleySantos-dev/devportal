import { animate, AnimatePresence, motion } from "framer-motion"

const StairsAimation = {
    initial: {
        top: "0%"
    },
    animate: {
        top: "100%"
    },
    exit: {
        top: ["100%", "0%"]
    }
}

const reversedIndex = (index: number) => {
    const totalSteps = 8
    return totalSteps - index - 1
}

export const Stairs = () => {
    return (<>
        {/* render 6 motion divs. each representing a step o te stairs.
        Each div will have some animation deined b the stairanimation oject. 
        the delay for each div is calculated dinamically based on it's reversed index.
        creating a saggered efect with decreasen delay or eacj subsequent step */}
        {[...Array(8)].map((_, index) => {
            return <motion.div key={index}
                variants={StairsAimation}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                    delay: reversedIndex(index) * 0.05
                }}
                className="h-full w-full bg-white relative border-none border-0 border-transparent p-0 m-0"
            />
        })}
    </>
        // <AnimatePresence>
        //     StairTransition
        // </AnimatePresence>
    )
}
