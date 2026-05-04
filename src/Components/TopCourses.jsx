import React from 'react';
import Image from 'next/image';
import { IoStarHalf } from "react-icons/io5";
import { PiStudentFill } from "react-icons/pi";
import Link from 'next/link';
import CourseCard from './CourseCard';

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
            <h2 className='text-4xl md:text-5xl font-bold text-center mb-10'>🔥 Popular Courses</h2>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-3  mx-auto'>
                 {
                 topCourses.map((course, index)=> <CourseCard key={index} course={course}></CourseCard>)
            }
            </div>
              <div className='flex justify-center items-center my-10'>
                   <Link className='btn bg-orange-500 text-white' href={'/courses'}>Sell All Courses</Link>
              </div>
        </div>
    );
};

export default TopCourses;