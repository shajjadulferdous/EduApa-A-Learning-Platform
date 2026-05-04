'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { IoStarHalf } from "react-icons/io5";
import { PiStudentFill } from "react-icons/pi";
import Link from 'next/link';
import Search from './Search';
import errorImg from '@/asset/error-search.png'
import CourseCard from '../CourseCard';


const CourseSection = () => {
    let [courses , setCourses] = useState([]);
    const [search , setSearchValue] = useState('');
    const [loading , setLoading] = useState(true);
    useEffect(()=>{
      const getCourses = async()=>{
        const coursesP= await fetch('https://eduapa.onrender.com/products');
        const courses = await coursesP.json();
         setCourses(courses);
         setLoading(false);
      };
      getCourses();
    }, [])

    const filterCourses = courses.filter(e => e.title.toLowerCase().includes(search.toLowerCase()))

    return (
        <div className='max-w-7xl w-11/13 mx-auto mt-10'>
        <div className='flex justify-center items-center   flex-col'>
            <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 text-orange-700 text-xs font-medium rounded-full px-4 py-1.5 mb-4 tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
            10+ Courses Available
           </div>

            <h1 className="text-4xl text-center md:text-5xl font-bold text-slate-900 leading-tight tracking-tight mb-2">
                Find Your Next{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-br from-orange-500 to-orange-600">
                Dream Course
                </span>
            </h1>
             <p className="text-slate-500 text-center  mb-3">
                Search from Web Dev, Design, Marketing & more
            </p>
            <Search search={search} setSearchValue={setSearchValue}></Search>
        </div>
         {
            loading ?  <div className="flex justify-center items-center h-[50vh]">
            <span className="loading loading-spinner loading-lg text-orange-500"></span>
            </div> :  <div className='mt-10'>
           {
             filterCourses.length ? <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-3'>
                 {
                 filterCourses.map((course, index)=> <CourseCard key={index} course={course}></CourseCard>)
            }
            </div> : 
            <div className='flex justify-center items-center p-20 flex-col'>
                  <Image src={errorImg} alt='not found img' width={200} height={200}/> 
                  <h1 className='font-bold text-4xl mt-2'>Sorry , No Reault Found</h1>
            </div>
           
           }
            
        </div>
         }
        </div>
    );
};

export default CourseSection;