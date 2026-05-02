import React from 'react';
import iconEmail from '@/asset/icon-orange-email.png'
import Image from 'next/image';
const ExtraSection = () => {
    return (
        <div className='bg-base-200'>
             <div  className='w-11/12 mx-auto pt-30 pb-20'>
                  <div className='flex justify-center items-center'>
                    <Image src={iconEmail} alt="icon-email" width={100} height={100}></Image>
                 </div>
                 
                 <h1 className='font-bold text-4xl text-center'>Subscribe to Newsletter</h1>
                 <p className='text-center mt-2'>Subscribe free and get the notification and latest offers of our courses.</p>
             </div>
             <div className='text-[#808080] w-11/12 mx-auto'>
                <h1 className='text-2xl font-bold mb-2'>Best E-learning platform In Bangladesh</h1>
                <p>EduApa is one the top e-learning platforms in Bangladesh. We are especially focused on kids and juniors skill based programs like Spoken English, Abacus, Drawing, Singapore Math, Presentation and Public Speaking and CPA Math course. We are the pioneer to introduce online Singapore and CPA Math courses in Bangladesh. Through the Academic Excellence program, we prepare students for academic exams. Our highly experienced teachers, skilled operation team and premium study materials make the course unique. We conduct one of the best online cadet coaching in BD. Cadet Admission coaching teachers have studied from various cadet colleges of Bangladesh. Our students are doing very well in the Cadet Admission Test under the qualified leadership of Ex Cadets. We also have a skill development section. Our skill development courses include Digital Marketing, Computer Programming, Microsoft Excel and more.</p>
             </div>
             <div className='mx-auto w-11/12 mt-5 text-[#808080] pb-20'>
                <h2 className='font-bold text-xl mb-3'>Abacus Math</h2>
                <p >The Abacus Mastering Mental Math course is one of our best courses. We conduct the course by experienced teachers from Bangladesh and abroad. Abacus Book Set and tools are provided to every student by EduTune. EduTune also has an experienced panel of teachers to assess Abacus Exam Papers to ensure the quality of learning.</p>
             </div>
        </div>
    );
};

export default ExtraSection;