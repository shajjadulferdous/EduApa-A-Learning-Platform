import Image from 'next/image';
import React from 'react';

const Banner = () => {
    return (
        <div className='flex container mx-auto'>
            <div className='flex-1'>
                <Image src={'/04.png'} alt="an image" width={500} height={500} ></Image>
            </div>
            <div className='flex-1 flex items-center justify-center '>
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