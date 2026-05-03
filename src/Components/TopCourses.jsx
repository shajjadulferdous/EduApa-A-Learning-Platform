import React from 'react';
import Image from 'next/image';
import { IoStarHalf } from "react-icons/io5";
import { PiStudentFill } from "react-icons/pi";
import Link from 'next/link';

const getCourses = async()=>{
     const coursesP= await fetch('https://eduapa.onrender.com/products');
     const courses = await coursesP.json();
     return courses;
}

const TopCourses =async () => {
    const courses = await getCourses();
    const topCourses = courses.sort((a,b)=>b.rating-a.rating).slice(0,3);
    return (
        <div className='mx-auto max-w-7xl w-11/13'>
            <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10'>🔥 Popular Courses</h2>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-3  mx-auto'>
                 {
                 topCourses.map((course, index)=> <div key={index} className='p-5 shadow-sm rounded-xl'>
                    <div className='relative rounded-2xl aspect-4/3 overflow-hidden hover:shadow-xl shadow flex justify-center items-center'>
                        <Image src={course.image} 
                         className=' object-cover transition-all duration-500 
                           hover:scale-110  '
                         alt='course' fill></Image></div>
                    <h1 className='font-bold text-2xl mb-3'>{course.title}</h1>
                    <div className='flex justify-between'>
                        <div className='flex justify-start flex-col'>
                            <div className='flex items-center gap-1 '><PiStudentFill />
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

                </div>)
            }
            </div>
              <div className='flex justify-center items-center my-10'>
                   <Link className='btn bg-orange-500 text-white' href={'/courses'}>Sell All Courses</Link>
              </div>
        </div>
    );
};

export default TopCourses;