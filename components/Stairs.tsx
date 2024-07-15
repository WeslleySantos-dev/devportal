import { animate, AnimatePresence } from "framer-motion"

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


export const Stairs = () => {
    return (<>
        stair
    </>
        // <AnimatePresence>
        //     StairTransition
        // </AnimatePresence>
    )
}
