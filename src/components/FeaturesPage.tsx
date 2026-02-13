import CinematicExperience from "./Features/CinematicExperience"
import ComparisonSection from "./Features/ComparisonSection"
import DeepDiveHero from "./Features/DeepDiveHero"
import EcosystemPillars from "./Features/EcosystemPillars"
import FutureCTA from "./Features/FutureCTA"
import Footer from "./Home/Footer"
import Navbar from "./Home/Navbar"

const FeaturesPage = () => {
  return (
    <>
    <Navbar/>
    <DeepDiveHero/>
    <EcosystemPillars/>
    <CinematicExperience/>
    <ComparisonSection/>
    <FutureCTA/>
    <Footer/>
    </>
  )
}

export default FeaturesPage