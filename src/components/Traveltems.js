import React from 'react';
import { Link } from 'react-router-dom';

function Traveltems(props) {
    return (
        <>
            <li className="Travel_Item-wrapper">
                <Link className="Travel_Link">
                    <div className="Travel_Item-picture">
                        <img
                            className="Travel_Item-img"
                            src={props.src}
                            alt=""
                        />
                    </div>
                    <div className="Travel_Item-heading">
                        <h2>{props.text}</h2>
                    </div>
                </Link>
            </li>
        </>
    );
}

export default Traveltems;
