import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React, { useRef } from 'react'
import { motion, useMotionValue, onMouseMove, onMouseLeave } from 'framer-motion'

// images
import article1 from "../../public/images/articles/pagination component in reactjs.jpg"
import article2 from "../../public/images/articles/create loading screen in react js.jpg"
import article3 from "../../public/images/articles/form validation in reactjs using custom react hook.png"
import TransitionEffect from '@/components/TransitionEffect'

const FramerImage = motion(Image);

const MovingImg = ({ title, img, link, w, h }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const imgRef = useRef(null);


    function handleMouse(e) {
        imgRef.current.style.display = "inline-block "
        x.set(e.pageX)
        y.set(-10)

    }
    function handleMouseLeave(e) {
        imgRef.current.style.display = "none "
        x.set(0)
        y.set(0)
    }



    return (
        <Link Link href={link} target='_blank'
            onMouseMove={handleMouse}
            onMouseLeave={handleMouseLeave}
        >
            <h2 className='capitalize text-xl font-semibold hover:underline'>{title}</h2>
            <FramerImage
                style={{ x: x, y: y }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
                ref={imgRef} src={img} alt={title} className={`z-10 w-${w}  h-auto hidden absolute rounded-lg md:!hidden`}
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                width={w}
                height={h}
            />

        </Link >
    )
}

const FeaturedArticle = ({ img, title, time, summary, link }) => {
    return (

        <li className='relative col-span-1 w-full p-4 bg-light border-solid border border-dark dark:bg-dark dark:border-light  rounded-2xl'>
            <div className='rounded-br-3xl absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark' />
            <Link href={link} target='_blank'
                className='w-full inline-block cursor-pointer overflow-hidden rounded-lg'
            >
                <FramerImage src={img} alt={title} className="w-full h-auto"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"

                />
            </Link>
            <Link href={link} target="_blank"><h2 className='xs:text-lg capitalize text-2xl font-bold my-2 mt-4 hover:underline'>{title}</h2></Link>
            <p className='text-sm mb-2 '>{summary}</p>
            <span className='text-primary dark:text-primaryDark font-semibold'>{time}</span>
        </li>
    )
}

const Article = ({ img, title, date, link, w, h }) => {
    return (
        <motion.li
            initial={{ y: 200 }}
            whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
            viewport={{ once: true }}
            className='sm:flex-col  relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark dark:bg-dark dark:text-light first:mt-0 border border-solid border-dark dark:border-light border-r-4 border-b-4'>
            <MovingImg title={title} img={img} link={link} w={w} h={h} />
            <span className='xs:text-sm sm:pl-0 sm:self-start text-primary dark:text-primaryDark font-semib pl-4'>{date}</span>
        </motion.li>
    )
}

const articles = () => {
    return (
        <>
            <Head>
                <title>Ali Shakeel | About Page </title>
                <meta name='description' content='about us' />
            </Head>
            <TransitionEffect />
            <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light'>
                <Layout className='pt-16 '>
                    <AnimatedText text="Words Can Change The World! " className='mb-16 lg:text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl' />
                    <ul className='grid grid-cols-2 gap-16 lg:gap-8 md:gap-y-16 md:grid-cols-1'>
                        <FeaturedArticle
                            title="Build A Custom Pagination Component In Reactjs From Scratch"
                            summary={"Learn how to build a custom pagination component in ReactJS from scratch. \nFollow this step-by-step guide to integrate Pagination component in your ReactJS project."}
                            time="9 min read"
                            link={"/"}
                            img={article1}
                        />
                        <FeaturedArticle
                            title="Build A Custom Pagination Component In Reactjs From Scratch"
                            summary={"Learn how to build a custom pagination component in ReactJS from scratch. \nFollow this step-by-step guide to integrate Pagination component in your ReactJS project."}
                            time="9 min read"
                            link={"/"}
                            img={article2}
                        />
                    </ul>
                    <h2 className='font-bold text-4xl w-full text-center my-16 mt-32 '> All Articles </h2>
                    <ul>
                        <Article
                            title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling
                            "
                            date="June 7, 2023"
                            link="/"
                            img={'https://i.imgur.com/QfTd8EG.png'}
                            w={20}
                            h={20}
                        />

                        <Article
                            title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling
                            "
                            date="June 7, 2023"
                            link="/"
                            img={article3} />

                        <Article
                            title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling
                            "
                            date="June 7, 2023"
                            link="/"
                            img={article3} />
                    </ul>
                </Layout>
            </main>
        </>
    )
}

export default articles