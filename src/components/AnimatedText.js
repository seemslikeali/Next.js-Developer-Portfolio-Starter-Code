import React from 'react'
import { animate, motion } from "framer-motion"


// dissapear to appear
const quote = {
    initial: {
        opacity: 1,
    },
    animate: {
        opacity: 1,
        transition: {
            delay: 0.5,
            staggerChildren: 0.08,
        }
    }
}
//move text per word
const perWords = {
    initial: {
        opacity: 0,
        y: 50,
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 1,
        }
    }
}



const AnimatedText = ({ text, className = "" }) => {
    return (
        <div className='w-full mx-auto py-2 flex items-center justify-center overflow-hidden'>
            <motion.h1 className={`inline-block w-full text-dark font-bold capitalize text-8xl ${className}`}
                variants={quote}
                initial="initial"
                animate="animate" >
                {
                    text.split(" ").map((word, index) =>
                        <motion.span key={word + '-' + index} className='inline-block'
                            variants={perWords}
                        >
                            {word}&nbsp;
                        </motion.span>)
                }
            </motion.h1>
        </div>
    )
}

export default AnimatedText