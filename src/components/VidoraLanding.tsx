import BharatTimeline from "./Home/BharatTimeline";
import Footer from "./Home/Footer";
import FounderQuote from "./Home/FounderQuote";
import HeroSection from "./Home/HeroSection";
import JoinMovement from "./Home/JoinMovement";
import Navbar from "./Home/Navbar"
import ValuesSection from "./Home/ValuesSection";

export default function VidoraLanding() {
  return (
    <>
    <main className="min-h-screen bg-[#0e0714]">
      <Navbar />
      <HeroSection/>
    </main>
    <BharatTimeline/>
    <ValuesSection/>
    <FounderQuote/>
    <JoinMovement/>
    <Footer/>
    </>
  );
}
