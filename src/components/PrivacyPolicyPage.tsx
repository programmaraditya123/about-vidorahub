import Footer from "./Home/Footer"
import Navbar from "./Home/Navbar"
import DataProtectionSection from "./PrivacyPolicy/DataProtectionSection"
import LegalLayout from "./PrivacyPolicy/LegalLayout"
// import LegalTabs from "./PrivacyPolicy/LegalTabs"
// import TermsViewer from "./PrivacyPolicy/TermsViewer"
import TransparencyHero from "./PrivacyPolicy/TransparencyHero"

const PrivacyPolicyPage = () => {
  return (
    <>
    <Navbar/>
    <TransparencyHero/>
    {/* <LegalTabs/> */}
    {/* <TermsViewer/> */}
    <LegalLayout/>
    <DataProtectionSection/>
    <Footer/>
    </>
  )
}

export default PrivacyPolicyPage