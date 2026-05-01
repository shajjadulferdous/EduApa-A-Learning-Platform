import React from 'react';
import instructorsa from "@/lib/teacher.json"
import Image from 'next/image';
import { FaBrain } from "react-icons/fa";
import { PiChalkboardTeacherBold } from "react-icons/pi";

const getTeacher = async ()=>{
    const teachers = await fetch('https://eduapa.onrender.com/teacher');
    const res = await teachers.json();
    return res;
}

const OurInstructor = async() => {
    const instructors = await getTeacher();
    return (
        <div className='my-10'>
            <h1 className='font-bold text-4xl text-center mb-10'>Our Instructor</h1>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto container gap-5 justify-around'>
                {
                    instructors.map(instructor=><div key={instructor.id} className='p-5 shadow-md rounded-xl'>
                         <Image src={instructor.image} alt='teacherImage' width={280} height={280}></Image>
                         <h1 className='text-2xl font-bold'>{instructor.name}</h1>
                         <p className='text-[#808080] flex items-center gap-1'><FaBrain /> {instructor.experience}+ experience</p>
                         <p className='text-[#808080] flex items-center gap-1'><PiChalkboardTeacherBold /> Teaches {instructor.students}+ students</p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default OurInstructor;