import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import test1 from '../../../images/testimonial/img-1.jpg'
import test2 from '../../../images/testimonial/img-2.jpg'




const Testimonials = [
    {
        tstImg: test1,
        name: 'Elezabeth Marvel',
        title: 'Photographer',
        descriptoion: '“Consectetur adipiscing elit. Duis eget et morbi morbi ut augue sem. Ac ultricies turpis ut molestie tortor elementum. Id est arcu, volutpat malesuada semper adipiscing. Blandit nibh libero tincidunt pharetra tincidunt.”',
    },
    {
        tstImg: test2,
        name: 'Marry Jenefer',
        title: 'CEO Of Golden Bravo',
        descriptoion: '“Consectetur adipiscing elit. Duis eget et morbi morbi ut augue sem. Ac ultricies turpis ut molestie tortor elementum. Id est arcu, volutpat malesuada semper adipiscing. Blandit nibh libero tincidunt pharetra tincidunt.”',
    },
    {
        tstImg: test1,
        name: 'Elezabeth Marvel',
        title: 'Photographer',
        descriptoion: '“Consectetur adipiscing elit. Duis eget et morbi morbi ut augue sem. Ac ultricies turpis ut molestie tortor elementum. Id est arcu, volutpat malesuada semper adipiscing. Blandit nibh libero tincidunt pharetra tincidunt.”',
    },
    {
        tstImg: test2,
        name: 'Marry Jenefer',
        title: 'CEO Of Golden Bravo',
        descriptoion: '“Consectetur adipiscing elit. Duis eget et morbi morbi ut augue sem. Ac ultricies turpis ut molestie tortor elementum. Id est arcu, volutpat malesuada semper adipiscing. Blandit nibh libero tincidunt pharetra tincidunt.”',
    },
]



const Testimonial = () => {

    var settings = {
        dots: true,
        arrows: false,
        speed: 1200,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,
    };

    return (
        <section className="wpo-testimonial-area section-padding">
            <div className="container">
                <div className="wpo-testimonial-wrap">
                    <div className="testimonial-slider">
                        <Slider {...settings}>
                            {Testimonials.map((tstml, tsm) => (
                                <div className="wpo-testimonial-item" key={tsm}>
                                    <div className="wpo-testimonial-top">
                                        <div className="wpo-testimonial-img">
                                            <img src={tstml.tstImg} alt="" />
                                        </div>
                                        <div className="wpo-testimonial-info">
                                            <h2>{tstml.name}</h2>
                                            <span>{tstml.title}</span>
                                        </div>
                                    </div>
                                    <div className="wpo-testimonial-content">
                                        <p>{tstml.descriptoion}</p>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonial;