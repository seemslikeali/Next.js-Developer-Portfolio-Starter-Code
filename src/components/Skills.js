import React from 'react'
import { motion } from "framer-motion"


const Skill = ({ name, x, y }) => {
    return (
        <motion.div className='flex items-center cursor-pointer justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 absolute shadow-dark dark:text-dark dark:bg-light'
            whileHover={{ scale: 1.05 }}
            initial={{ x: 0, y: 0 }}
            whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
            viewport={{ once: true }}
        >
            {name}
        </motion.div>
    )

}
const Skills = () => {
    return (

        <>
            <h2 className='font-bold text-8xl mt-64 w-full text-center'>Skills</h2>
            <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark'>
                <motion.div className='flex items-center cursor-pointer justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark dark:text-dark dark:bg-light'
                    whileHover={{ scale: 1.05 }}>web</motion.div>

                <Skill name="CSS" x="-13vw" y="0vw" />
                <Skill name="HTML" x="20vw" y="-12vw" />
                <Skill name="JavaScript" x="14vw" y="-18vw" />
                <Skill name="React" x="-20vw" y="16vw" />
                <Skill name="Python" x="-10vw" y="-17vw" />
                <Skill name="NodeJS" x="-18vw" y="-12vw" />
                <Skill name="Express" x="-24vw" y="-4.5vw" />
                <Skill name="C" x="-10vw" y="-8.5vw" />
                <Skill name="Mips" x="-20vw" y="5vw" />
                <Skill name="C++" x="-1vw" y="10vw" />
                <Skill name="C#" x="-14vw" y="12vw" />
                <Skill name="Java" x="-5vw" y="20vw" />
                <Skill name="BulmaCSS" x="10vw" y="17vw" />
                <Skill name="Bootstrap" x="19vw" y="12vw" />
                <Skill name="PostgreSQL" x="14vw" y="5vw" />
                <Skill name="Django" x="16vw" y="-5vw" />
                <Skill name="MySQL" x="7vw" y="-12vw" />
                <Skill name="DNNGO" x="23vw" y="0vw" />
                <Skill name="Unity" x="0vw" y="-20vw" />
            </div>
        </>
    )
}

export default Skills