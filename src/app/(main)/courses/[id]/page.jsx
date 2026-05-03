import React from 'react';
import { GiTeacher } from "react-icons/gi";
import { GiDuration } from "react-icons/gi";
import { GiLevelFour } from "react-icons/gi";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { TbCategory } from "react-icons/tb";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import Image from 'next/image';
import { toast, ToastContainer } from 'react-toastify';
import JoinButton from '@/Components/JoinButton';
import Link from 'next/link';
import NotFoundPage from '@/app/not-found';

const getCourseDetails = async(id)=>{
      const res = await fetch(`https://eduapa.onrender.com/products/${id}`);
      const course = await res.json();
      return course;
}
const CourseDetailsPage = async ({params}) => {
    
    const {id} = await params;
    const {title , category , image, description , level , rating, duration , instructor } = await getCourseDetails(id);
    console.log(title);
    console.log(title , category , image , description, level);
    const curriculum = [
    "Introduction to Web Development",
    "HTML Basics",
    "CSS Fundamentals",
    "Responsive Design with Tailwind CSS",
    "JavaScript Basics",
    "DOM Manipulation",
    "ES6+ Features",
    "React.js Fundamentals",
    "State Management",
    "Next.js Basics",
    "Backend (Node.js & Express)",
    "Database (MongoDB)",
    "Authentication System",
    "Final Project & Deployment"
  ];
  if (!title){
        return <>
            <NotFoundPage></NotFoundPage>
        </>
    }
    return (
        <div className='mx-auto w-11/12 mt-15'>
            <div className='flex justify-around  flex-col gap-5 md:flex-row'>
            <div className='space-y-3 flex-1'>
                 <h1 className='font-extrabold text-4xl'>{title}</h1>
                 <p className='text-xl'>{description}</p>
                 <p className='flex items-center gap-2'><GiTeacher /> Instructor: {instructor}</p>
                 <p className='flex items-center gap-2'> <GiDuration /> Duration: {duration}</p>
                 <p className='flex items-center gap-2'> <GiLevelFour /> Course Level: {level}</p>
                 <p className='flex items-center gap-2'> <TbCategory /> Category: {category}</p>
                 <p className='flex items-center gap-2'> <FaRegStarHalfStroke /> Course Rating: {rating}</p>
                 <div className='flex gap-3'>
                    <p className='flex items-center text-3xl'><FaBangladeshiTakaSign /> 1200</p>
                    <p className='text-blue-500 py-1 px-2 bg-base-200 shadow-sm font-semibold '>Full Course Fee</p>
                 </div>
                 <div>
                     <JoinButton></JoinButton>
                 </div>
            </div>
            <div className='relative aspect-3/2 overflow-hidden rounded-2xl shadow-md hover:shadow-2xl flex-1'>
                <Image src={image} alt={title} fill  className=' shadow-md transition-all duration-500 
                     hover:scale-110'></Image>
            </div>
           </div>
              <hr className='text-slate-200 mt-20 mb-10' />

      <div>
        <h2 className="text-3xl font-extrabold text-center mb-8">
          Course Curriculum
        </h2>

        <div className="grid md:grid-cols-2 gap-5">
          {curriculum.map((item, index) => (
            <div
              key={index}
              className="p-4 bg-base-200 rounded-xl shadow-sm flex items-center gap-3 hover:shadow-md transition"
            >
              <span className="text-orange-500 font-bold text-lg">
                {index + 1}.
              </span>
              <p className="font-medium">{item}</p>
            </div>
          ))}
        </div>
      </div>
        </div>
    );
};

export default CourseDetailsPage;