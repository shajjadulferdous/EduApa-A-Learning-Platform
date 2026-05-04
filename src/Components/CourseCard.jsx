import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IoStarHalf } from 'react-icons/io5';
import { PiStudentFill } from 'react-icons/pi';

const CourseCard = ({course}) => {
    return (
        <div className='p-5 shadow-sm rounded-xl'>
                      <div className='relative rounded-2xl mb-3 aspect-4/3 overflow-hidden hover:shadow-xl shadow flex justify-center items-center'>
                        <Image src={course.image} 
                            className=' object-cover transition-all duration-500 
                            hover:scale-110  '
                            alt='course' fill></Image></div>
                    <h1 className='font-bold text-2xl mb-3  min-h-15 leading-tight '>
                    {course.title}
                    </h1>
                    <div className='flex justify-between'>
                        <div className='flex justify-start flex-col'>
                            <div className='flex items-center gap-1'><PiStudentFill />
                             Instrctor: {course.instructor}</div>
                            <h1 className='flex items-center gap-1'> <IoStarHalf /> Rating: {course.rating}</h1>
                        </div>
                        <div className='flex justify-end items-center '>
                            <span className='px-3 py-1 border-2 rounded-full'>{course.duration}</span>
                        </div>
                    </div>
                    <div className='flex justify-between mt-3'>
                        <Link href={`/courses/${course.id}`} className='text-white btn bg-orange-500 font-semibold w-full rounded-full'>Details</Link>
                    </div>

                </div>
    );
};

export default CourseCard;