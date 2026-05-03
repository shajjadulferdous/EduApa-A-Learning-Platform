import Banner from "@/Components/Banner";
import ExtraSection from "@/Components/ExtraSection";
import OurInstructor from "@/Components/OurInstructor";
import TopCourses from "@/Components/TopCourses";

export const metadata = {
  title: 'EduApa|HomePage',
  description: 'A Learning Platform',
}

export default function Home() {
  return (
      <>
        <Banner></Banner>
        <TopCourses></TopCourses>
        <ExtraSection></ExtraSection>
        <OurInstructor></OurInstructor>
      </>
  );
}
