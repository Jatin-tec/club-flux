import React from 'react'
import AboutUs from './AboutUs';
import Footer from './Footer';
import Porjects from './Porjects';
import Gallery from './Gallery';

export default function HomePage() {
    return (
        <div>
            <AboutUs />
            <Porjects />
            <Gallery />
            <Footer />
        </div>
    )
}
