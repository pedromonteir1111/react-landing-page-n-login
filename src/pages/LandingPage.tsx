import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar'
import ProductSection from '../components/ProductSection';
import TopBanner from '../components/TopBanner';

export default function LandingPage() {
    return (
        <>
        <Navbar/>

        {/*parte de cima (logo e carousel)*/}
        <TopBanner/>

        {/*nossos produtos*/}
        <ProductSection/>

        {/*Sobre nos*/}
        <AboutSection/>

        {/*contato*/}
        <ContactSection/>

        <Footer/>
        </>
    )
}