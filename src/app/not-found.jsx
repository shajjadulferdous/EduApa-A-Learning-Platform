import Image from 'next/image';
import React from 'react';
import NotFound from "@/asset/404.png"
import Link from 'next/link';
const NotFoundPage = () => {
    return (
        <div className='flex h-screen justify-center items-center flex-col space-y-3'>
            <Image src={NotFound} alt='LinkNot found' width={400} height={400}></Image>
            <h1 className='text-3xl font-semibold text-orange-500'>Link Not Found !</h1>
            <Link href={'/'} className='btn bg-orange-500 text-white'>Go Home</Link>
        </div>
    );
};

export default NotFoundPage;