import AnimatedText from '@/components/AnimatedText'
import { GithubIcon } from '@/components/Icons'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import project1 from "../../public/images/projects/crypto-screener-cover-image.jpg"
import Image from 'next/image'
import { motion } from 'framer-motion'
const FramerImage = motion(Image);

const FeatureProject = ({ type, title, summary, img, link, github }) => {
    return (
        <article className='rounded-br-2xl w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light dark:border-light dark:bg-dark shadow-2x1 p-12 relative'>
            <div className='rounded-br-3xl absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light' />
            <Link href={link} target='_blank'
                className='w-1/2 cursor-pointer overflow-hidden rounded-lg'
            >
                <FramerImage src={img} alt={title} className="w-full h-auto"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"

                />
            </Link>

            <div className='w-1/2 flex flex-col items-start justify-between pl-6 dark:text-light'>
                <span className='text-primary dark:text-primaryDark font-medium text-xl'>{type}</span>
                <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light'>{title}</h2>
                </Link>

                <p className='my-2 font-medium text-dark dark:text-light'>{summary}</p>
                <div className='mt-2 flex items-center'>
                    <Link className='w-10' href={github} target='_blank'><GithubIcon /> </Link>
                    <Link
                        className='ml-4 rounded-lg bg-dark text-light dark:bg-light dark:text-dark p-2 px-6 text-lg font-semibold'
                        href={link} target='_blank'>Visit Project</Link>

                </div>



            </div>

        </article>
    )
}


const Project = ({ title, type, img, link, github }) => {
    return (

        <article className='w-full flex flex-col items-center justify-between rounded-2xl border border-solid border-dark bg-light p-6 relative
        dark:bg-dark dark:border-light '>
            <div className='rounded-br-3xl absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light' />
            <Link href={link} target='_blank'
                className='w-full cursor-pointer overflow-hidden rounded-lg'
            >
                <FramerImage src={img} alt={title} className="w-full h-auto"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                />
            </Link>

            <div className='w-full flex flex-col items-start justify-between mt-4'>
                <span className='text-primary dark:text-primaryDark font-medium text-xl'>{type}</span>
                <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-3xl font-bold dark:text-light'>{title}</h2>
                </Link>


                <div className='w-full mt-2 flex items-center justify-between dark:text-light'>

                    <Link
                        className=' text-lg font-semibold underline dark:text-light'
                        href={link}
                        target='_blank'>
                        Visit
                    </Link>
                    <Link className='w-8' href={github} target='_blank'>
                        <GithubIcon />
                    </Link>
                </div>
            </div>

        </article>
    )
}


const projects = () => {
    return (
        <>
            <Head>
                <title>Ali Shakeel | Projects Page </title>
                <meta name='description' content='about us' />
            </Head>
            <main className='w-full mb-16 flex flex-col items-center justify-center'>

                <Layout className='pt-16'>
                    <AnimatedText text="Imagination Trumps Knowledge!"
                        className='mb-16'
                    />
                    <div className='grid grid-cols-12 gap-24'>
                        <div className='col-span-12'>
                            <FeatureProject
                                title={"Crypto Screener Application"}
                                summary={"A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."}
                                img={project1}
                                github={"/"}
                                link="/"
                                type={"Featured Project"}
                            />
                        </div>

                        <div className='col-span-6'>
                            <Project title={"Crypto Screener Application"}
                                img={project1}
                                github={"/"}
                                link="/"
                                type={"Featured Project"} />
                        </div>

                        <div className='col-span-6'>
                            <Project title={"Crypto Screener Application"}
                                img={project1}
                                github={"/"}
                                link="/"
                                type={"Featured Project"} />
                        </div>

                        <div className='col-span-12'>
                            <FeatureProject
                                title={"Crypto Screener Application"}
                                summary={"A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."}
                                img={project1}
                                github={"/"}
                                link="/"
                                type={"Featured Project"}
                            />
                        </div>

                        <div className='col-span-6'>
                            <Project title={"Crypto Screener Application"}
                                img={project1}
                                github={"/"}
                                link="/"
                                type={"Featured Project"} />
                        </div>

                        <div className='col-span-6'>
                            <Project title={"Crypto Screener Application"}
                                img={project1}
                                github={"/"}
                                link="/"
                                type={"Featured Project"} />
                        </div>
                    </div>
                </Layout>
            </main>
        </>
    )
}

export default projects