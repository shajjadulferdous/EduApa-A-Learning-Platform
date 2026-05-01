import BannerPage from '@/Components/CoursePage/Banner';
import CourseSection from '@/Components/CoursePage/CourseSection';
import React from 'react';

const CouresPage = () => {
    return (
        <div className='mx-auto container'>
            <BannerPage></BannerPage>
            <CourseSection></CourseSection>
        </div>
    );
};

export default CouresPage;