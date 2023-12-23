import React from 'react';
import MuiNavbar from '../components/Navbar';
import HeroSection from '../components/Herosection';
import Footer from '../components/Footer';

function Home() {

    return (
        <div>
            <MuiNavbar />
            <HeroSection/>
            <Footer />
            <h2>Home page</h2>
        </div>
    );
}

export default Home;
