import React, { useState } from 'react';
import Services from '../../../api/service'
import ServiceSingle from '../ServiceSingle';
import cv from '../../../images/cv.jpg'

const ServiceSection = (props) => {

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


    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }


    return (

        <section className="wpo-service-section section-padding" id="service">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5">
                        <div className="wpo-service-title">
                            <h2>My Awesome Services</h2>
                            <p>Consectetur adipiscing eliplacerat rhoncus non lacinia.</p>
                            <a className="theme-btn" download="My Cv" href={cv}
                                title="ImageName">
                                <img className="hide-img" alt="ImageName" src={cv} />
                                Download CV
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="wpo-service-items" >
                            {Services.slice(0, 4).map((service, srv) => (
                                <div className="wpo-service-item" key={srv}>
                                    <div className="wpo-service-icon">
                                        <div className="icon">
                                            <i className={`fi ${service.icon}`}></i>
                                        </div>
                                    </div>
                                    <div className="wpo-service-text">
                                        <h3 onClick={() => handleClickOpen(service)}>{service.sTitle}</h3>
                                        <span>{service.projects}+ Projects</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <ServiceSingle open={open} onClose={handleClose} title={state.sTitle} dImg={state.sImgS} sImg1={state.ssImg1} sImg2={state.ssImg2} />
        </section>
    );
}

export default ServiceSection;