
import BannerPage from '@/Components/CoursePage/Banner';
import CourseSection from '@/Components/CoursePage/CourseSection';
import Search from '@/Components/CoursePage/Search';



const CouresPage = () => {
    
    return (
        <div className='mx-auto w-11/12'>
            <BannerPage></BannerPage>
             <CourseSection></CourseSection>
        </div>
    );
};

export default CouresPage;