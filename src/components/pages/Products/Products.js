import React from 'react';
import { homeObjOne, homeObjThree } from './Data';
import HeroSection from '~/components/HeroSection';
import Travels from '~/components/Travels';

function Products() {
    return (
        <div>
            <HeroSection {...homeObjThree} />
            <HeroSection {...homeObjOne} />
            <Travels />
        </div>
    );
}

export default Products;
