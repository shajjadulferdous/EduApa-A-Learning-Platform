import Banner from "@/Components/Banner";
import ExtraSection from "@/Components/ExtraSection";
import OurInstructor from "@/Components/OurInstructor";
import TipSection from "@/Components/TipSection";
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
        <TipSection></TipSection>
        <OurInstructor></OurInstructor>
        <ExtraSection></ExtraSection>
      </>
  );
}
