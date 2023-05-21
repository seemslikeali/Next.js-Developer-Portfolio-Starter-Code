import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import profilePic from "../../public/images/profile/developer-pic-1.png"

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="" />
      </Head>
      <main className=" flex items-center text-dark w-full min-h-screen">
        <Layout className='pt-0'>
          <div className="flex items-center justify-between w-full">
            <div className='w-1/2'>
              <Image src={profilePic} alt="Ali" className='w-full h-auto' />
            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}
