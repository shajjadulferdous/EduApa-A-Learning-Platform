import React from 'react';
import Image from 'next/image';
import { FaBrain } from "react-icons/fa";
import { PiChalkboardTeacherBold } from "react-icons/pi";
import { FaBookOpen } from "react-icons/fa";

const getTeacher = async ()=>{
    const teachers = await fetch('https://eduapa.onrender.com/teacher', {
        cache:'no-store'
    });
    const res = await teachers.json();
    return res;
}

const OurInstructor = async() => {
    const instructors = await getTeacher();
    return (
        <div className='my-20'>
             <p className='text-center text-slate-500 mb-1'>MEET THE TEAM</p>
            <h1 className='font-bold text-4xl text-center mb-10'>Learn from the <span className='text-orange-500'>best</span></h1>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto max-w-7xl w-11/13 grid-cols-1 gap-5 justify-around'>
                {
                    instructors.map(instructor=><div key={instructor.id} className='p-5 shadow-md rounded-xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl'>
                         <div className="group relative aspect-4/3 w-full overflow-hidden rounded-2xl bg-slate-100 shadow-md transition-all duration-300 hover:shadow-xl">
                 
                            <Image
                                src={instructor.image}
                                alt={instructor.name}
                                fill 
                                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                            />
                            
                            </div>
                         <h1 className='text-2xl mb-2'>{instructor.name}</h1>
                         <hr className='border-gray-100' />
                         <p className='text-[#808080] flex items-center gap-1 mt-2'><FaBrain /> {instructor.experience}+ experience</p>
                         <p className='text-[#808080] flex items-center gap-1'><PiChalkboardTeacherBold /> {instructor.students.toLocaleString()} + students taught</p>
                         <p className='text-[#808080] flex items-center gap-1'> <FaBookOpen /> Expert in {instructor.subject}</p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default OurInstructor;