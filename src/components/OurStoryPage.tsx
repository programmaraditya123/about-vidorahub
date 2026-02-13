import Footer from "./Home/Footer"
import Navbar from "./Home/Navbar"
import BeyondAlgorithmHero from "./OurStory/BeyondAlgorithmHero"
import BrokenEcosystem from "./OurStory/BrokenEcosystem"
import EvolutionTimeline from "./OurStory/EvolutionTimeline"
import FounderMessageCard from "./OurStory/FounderMessageCard"
import MissionStatement from "./OurStory/MissionStatement"
import PromiseSection from "./OurStory/PromiseSection"
import StoryCTA from "./OurStory/StoryCTA"

const OurStoryPage = () => {
  return (
    <>
    <Navbar/>
    <BeyondAlgorithmHero/>
    <BrokenEcosystem/>
    <PromiseSection/>
    <EvolutionTimeline/>
    <FounderMessageCard/>
    <MissionStatement/>
    <StoryCTA/>
    <Footer/>
    </>
  )
}

export default OurStoryPage