import React from 'react';
import './HeroSection.scss';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function HeroSection({
    headline,
    description,
    img,
    buttonLabel,
    lightBg,
    imgStart,
}) {
    return (
        <>
            <div
                className={
                    lightBg
                        ? 'container-wrapper'
                        : 'container-wrapper dark'
                }
            >
                <div
                    className=" container"
                    style={{
                        display: 'flex',
                        flexDirection:
                            imgStart === 'start'
                                ? 'row-reverse'
                                : 'row',
                    }}
                >
                    <div className="col container-title">
                        <h2 className="container-heading">
                            {headline}
                        </h2>
                        <p className="container-description">
                            {description}
                        </p>
                        <div className="container-button">
                            <Link to="signUp">
                                <Button>
                                    {buttonLabel}
                                </Button>
                            </Link>
                        </div>
                    </div>
                    <div></div>
                    <div className="col img-travelContainer">
                        <img
                            className=" img-travel"
                            src={img}
                            alt={''}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default HeroSection;
