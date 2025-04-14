import HeroSection from "@/src/app/components/HeroSection";
import Navbar from "@/src/app/components/Navbar";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-[#121212]">
      <Navbar/>
     <div className=" container mt-24 mx-auto px-12 py-4">
     <HeroSection />
     </div>
      
    </main>
  );
}
