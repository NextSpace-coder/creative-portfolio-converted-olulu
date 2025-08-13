import React from 'react'
import About from './about/about';
import BlogSection from './BlogSection/BlogSection';
import ContactArea from './ContactArea';
import Footer from './footer/Footer';
import PartnerSlider from './partner';
import ProjectSection from './ProjectSection/ProjectSection';
import ServiceSection from './ServiceSection/ServiceSection';
import Testimonial from './Testimonial/Testimonial';

const TenmplateContent = (props) => {
    return (
        <div className="wpo-content">
            <About/>
            <ServiceSection/>
            <Testimonial/>
            <ProjectSection/>
            <BlogSection/>
            <PartnerSlider/>
            <ContactArea/>
            <Footer/>
        </div>
    )
}

export default TenmplateContent;