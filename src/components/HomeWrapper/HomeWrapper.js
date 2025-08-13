import React, { useState, useEffect } from 'react';
import Header from '../header/Header'
import TenmplateContent from '../TenmplateContent/TenmplateContent';


const HomeWrapper = (props) => {
    const [currentY, setCurrentY] = useState(0);

    useEffect(() => {
        window.addEventListener('scroll', function () {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            if (winScroll >= 10 && winScroll <= 120000000) {
                setCurrentY(winScroll - 100);
            }
            if (winScroll < 500) {
                setCurrentY(0)
            }
            if (winScroll > 100000000) {
                setCurrentY(900)
            }
        });

        return window.removeEventListener('scroll', function () { });
    }, []);
    return (
        <div className="home-main-wrapper">
            <div className="personal" style={{ top: -(currentY / 300) + "%", transition: 'all 1s ease 0s' }}></div>
            <Header />
            <TenmplateContent />
        </div>

    )
}

export default HomeWrapper;