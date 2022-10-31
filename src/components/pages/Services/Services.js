import React from 'react';
import { homeObjOne, homeObjTwo } from './Data';
import HeroSection from '~/components/HeroSection';
import Travels from '~/components/Travels';

function Services() {
    return (
        <div>
            <HeroSection {...homeObjOne} />
            <HeroSection {...homeObjTwo} />
            <Travels />
        </div>
    );
}

export default Services;
