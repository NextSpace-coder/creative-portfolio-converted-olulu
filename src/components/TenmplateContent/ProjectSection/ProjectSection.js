import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Projects from '../../../api/project'
import ProjectSingle from '../ProjectSingle/ProjectSingle';
import { Link} from 'react-scroll'

const settings = {
    dots: false,
    arrows: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
        {
            breakpoint: 1600,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};


const ProjectSection = (props) => {

    const [open, setOpen] = React.useState(false);

    function handleClose() {
        setOpen(false);
    }

    const [state, setState] = useState({
    })

    const handleClickOpen = (item) => {
        setOpen(true);
        setState(item)
    }
    return (
        <section className="wpo-project-area" id="portfolio">
            <div className="container">
                <div className="wpo-section-title-s2">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-12">
                            <div className="title">
                                <h2>Populer Projects</h2>
                                <p>Consectetur adipiscing eliplacerat rhoncus non lacinia.</p>
                            </div>
                        </div>
                        <div className="col-lg-5 offset-lg-2">
                            <div className="sec-title-btn">
                                <Link className="theme-btn" activeClass="active" to="contact" spy={true} smooth={true}  duration={500}>Lets Project Discuss</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="wpo-project-wrap wpo-project-slide">
                    <Slider {...settings}>
                        {Projects.map((project, pro) => (
                            <div className="wpo-project-item" key={pro}>
                                <div className="wpo-project-img">
                                    <img src={project.pImg} alt="" />
                                </div>
                                <div className="wpo-project-text">
                                    <h2 onClick={() => handleClickOpen(project)}>{project.title}</h2>
                                    <span>{project.subTitle}</span>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
            <ProjectSingle open={open} onClose={handleClose} title={state.title} pImg={state.ps1img} psub1img1={state.psub1img1} psub1img2={state.psub1img2} />
        </section>
    );
}

export default ProjectSection;