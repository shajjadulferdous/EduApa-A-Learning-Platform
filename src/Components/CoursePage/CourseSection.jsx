'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { IoStarHalf } from "react-icons/io5";
import { PiStudentFill } from "react-icons/pi";
import Link from 'next/link';
import Search from './Search';
import errorImg from '@/asset/error-search.png'


const CourseSection = () => {
    let [courses , setCourses] = useState([]);
    const [search , setSearchValue] = useState('');
    useEffect(()=>{
      const getCourses = async()=>{
        const coursesP= await fetch('https://eduapa.onrender.com/products');
        const courses = await coursesP.json();
        setCourses(courses);
      };
      getCourses();
    }, [])
     let Value = null;
     if (search)
     Value = courses.filter(e => e.title.toLowerCase().includes(search.toLowerCase()))
     if (Value){
         courses = [...Value];
     }
    return (
        <div className='w-11/12 mx-auto mt-10'>
        <div className='flex justify-center items-center w-11/12 mx-auto flex-col'>
            <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 text-orange-700 text-xs font-medium rounded-full px-4 py-1.5 mb-4 tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
            10+ Courses Available
           </div>

            <h1 className="text-4xl text-center md:text-5xl font-bold text-slate-900 leading-tight tracking-tight mb-2">
                Find Your Next{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-orange-500 to-orange-600">
                Dream Course
                </span>
            </h1>
             <p className="text-slate-500 text-center  mb-3">
                Search from Web Dev, Design, Marketing & more
            </p>
            <Search search={search} setSearchValue={setSearchValue}></Search>
        </div>
        <div className='mt-10'>
           {
             courses.length ? <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-3 w-11/12 mx-auto'>
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
            </div> : 
            <div className='flex justify-center items-center p-20 flex-col'>
                  <Image src={errorImg} alt='not found img' width={200} height={200}/> 
                  <h1 className='font-bold text-4xl mt-2'>Sorry , No Reault Found</h1>
            </div>
           
           }
            
        </div>
        </div>
    );
};

export default CourseSection;