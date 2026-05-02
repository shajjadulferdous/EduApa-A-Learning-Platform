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
const CourseSection =async () => {
    const courses = await getCourses();
    
    return (
        <div className='mt-10'>
            <h2 className='text-5xl font-bold text-center mb-10'>Our Courses</h2>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-3 w-11/12 mx-auto'>
                 {
                 courses.map((course, index)=> <div key={index} className='p-5 shadow-sm rounded-xl'>
                    <div className='flex justify-center items-center'><Image src={course.image} className='rounded-xl object-cover transition-all duration-500 
             hover:scale-101 hover:shadow-xl hover:brightness-110' alt='course' width={400} height={300}></Image></div>
                    <h1 className='font-bold text-2xl mb-3'>{course.title}</h1>
                    {/* <hr /> */}
                    <div className='flex justify-between'>
                        <div className='flex justify-start flex-col'>
                            <div className='flex items-center gap-1'><PiStudentFill />
                             Instrctor: {course.instructor}</div>
                            <h1 className='flex items-center gap-1 '> <IoStarHalf /> Rating: {course.rating}</h1>
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
            
        </div>
    );
};

export default CourseSection;