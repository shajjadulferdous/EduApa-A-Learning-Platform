import Image from 'next/image';
import React from 'react';
import sibling from "@/asset/04.png"
const Banner = () => {
    return (
        <div className='flex w-11/12 mx-auto flex-col-reverse md:flex-row'>
            <div className='flex-1 flex justify-center items-center'>
                <Image src={sibling} alt="an image" width={500} height={400} />
            </div>
            <div className='flex-1 flex items-center justify-center mt-10 md:mt-0'>
               <div className=''>
                <h1 className='font-bold text-5xl text-center mb-3'>Smart Preparation for Smart Students</h1>
                <p className='text-center'>Making complex topics easy to understand.
                Start your journey today.</p>
               </div>
            </div>
        </div>
    );
};

export default Banner;