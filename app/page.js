import AboutMe from "@/src/app/components/AboutMe";
import AchievementsSection from "@/src/app/components/AchievmentsSection";
import ContactMe from "@/src/app/components/ContactMe";
import HeroSection from "@/src/app/components/HeroSection";
import Navbar from "@/src/app/components/Navbar";
import ProjectSection from "@/src/app/components/ProjectSection";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-[#121212]">
      <Navbar/>
     <div className=" container mt-24 mx-auto px-12 py-4">
     <HeroSection />
     <AchievementsSection/>
     <AboutMe/>
     <ProjectSection/>
     <ContactMe/>
     </div>
      
    </main>
  );
}
