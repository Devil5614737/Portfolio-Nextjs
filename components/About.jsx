import { useNextSanityImage } from 'next-sanity-image'
import Image from 'next/image'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { client } from '../sanity/client'
import { Container } from './Container';
import sanityClient from '@sanity/client';

export const About = () => {
const[about,setAbout]=useState()

  useEffect(() => {
    const query = '*[_type=="about"]';

    client.fetch(query).then((data) => setAbout(data));
  }, []);



  const configuredSanityClient = sanityClient({
    projectId:'f201tyh4',
    dataset: 'production',
    useCdn: true
  });
  
  
    const imageProps = useNextSanityImage(
      configuredSanityClient,
    about&&about[0].imageUrl
    );
  
  


  return (
    <Container>
        <div id='about' className="w-fit m-auto text-center">
          <h2 className="font-bold text-[2rem] md:text-[2.6rem]">About</h2>
        </div>
        <div className="wrapper px-3 mt-[3rem]  bg-[#5750EC] md:px-[4rem] py-[4rem]">
         <div className="flex flex-col md:flex-row  md:grid-cols-2 md:gap-7">
         <div className="my-image mb-4 m-auto md:m-0">
            <Image
          {...imageProps}
          width={300}
          height={300}
          loading="lazy"
          objectFit="cover"
          className="rounded-lg"
          alt='me'
        />
            </div>
            <div className="md:mt-6">
            <p className='md:mb-6 md:text-start text-center md:text-[1.8rem] text-[1.5rem] text-white md:max-w-[70%] md:leading-[3rem]'>{about&&about[0].desc}</p>
            <a target={'_blank'} href={about&&about[0].resumeLink} 
            rel='noreferrer'
            class="md:m-0 mt-3 w-fit grid m-auto md:px-8 px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-purple-50 text-black ">
<span class="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-[#5750EC] group-hover:h-full opacity-90"></span>
<span class="relative group-hover:text-white text-[1.6rem]">Resume</span>
</a>
            </div>
          
         </div>
        </div>
    </Container>
  )
}
