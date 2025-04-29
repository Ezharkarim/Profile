import AboutMe from "./components/AboutMe";
import AchievementsSection from "./components/AchievmentsSection";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ProjectsSection from "./components/ProjectSection";



export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-[#121212]">
      
     <div className=" container mt-24 mx-auto px-12 py-4">
     <Navbar/>
     <HeroSection />
     <AchievementsSection/>
     <AboutMe/>
     <ProjectsSection/>
     <ContactMe/>
     <Footer/>
     </div>
    
      
    </main>
  );
}
