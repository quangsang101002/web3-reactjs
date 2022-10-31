import React from 'react';
import Traveltems from './Traveltems';
import './Travels.scss';

function Travels() {
    return (
        <>
            <div className="Travel">
                <div className="Travel_Wrapper">
                    <h2 className="Travel_heading">
                        {' '}
                        Khám phá thế giới
                    </h2>
                    <div className="grid">
                        <div className="Travel_Container">
                            <ul className="grid-row">
                                <div className="grid-colum">
                                    <Traveltems
                                        src="http://baogialai.com.vn/dataimages/201801/original/images2611835_a_1.jpg"
                                        text="Khám phá đất nước Thủy Sỉ với những cảnh đẹp hụt hồn với ai đã đến đây"
                                        label=""
                                        path="/"
                                    />
                                </div>
                                <div className="grid-colum">
                                    <Traveltems
                                        src="http://baogialai.com.vn/dataimages/201801/original/images2611835_a_1.jpg"
                                        text="Khám phá đất nước Thủy Sỉ với những cảnh đẹp hụt hồn với ai đã đến đây"
                                        label=""
                                        path="/"
                                    />
                                </div>
                                <div className="grid-colum">
                                    <Traveltems
                                        src="http://baogialai.com.vn/dataimages/201801/original/images2611835_a_1.jpg"
                                        text="Khám phá đất nước Thủy Sỉ với những cảnh đẹp hụt hồn với ai đã đến đây"
                                        label=""
                                        path="/"
                                    />
                                </div>
                            </ul>
                        </div>
                    </div>
                    <h2 className="Travel_heading">
                        {' '}
                        Khám phá Thụy Sĩ
                    </h2>
                    <div className="grid">
                        <div className="Travel_Container">
                            <ul className="grid-row">
                                <div className="grid-colum">
                                    <Traveltems
                                        src="http://baogialai.com.vn/dataimages/201801/original/images2611835_a_1.jpg"
                                        text="Khám phá đất nước Thủy Sỉ với những cảnh đẹp hụt hồn với ai đã đến đây"
                                        label=""
                                        path="/"
                                    />
                                </div>
                                <div className="grid-colum">
                                    <Traveltems
                                        src="http://baogialai.com.vn/dataimages/201801/original/images2611835_a_1.jpg"
                                        text="Khám phá đất nước Thủy Sỉ với những cảnh đẹp hụt hồn với ai đã đến đây"
                                        label=""
                                        path="/"
                                    />
                                </div>
                                <div className="grid-colum">
                                    <Traveltems
                                        src="http://baogialai.com.vn/dataimages/201801/original/images2611835_a_1.jpg"
                                        text="Khám phá đất nước Thủy Sỉ với những cảnh đẹp hụt hồn với ai đã đến đây"
                                        label=""
                                        path="/"
                                    />
                                </div>
                            </ul>
                        </div>
                    </div>
                    <h2 className="Travel_heading">
                        {' '}
                        Khám phá Nhật Bản
                    </h2>
                    <div className="grid">
                        <div className="Travel_Container">
                            <ul className="grid-row">
                                <div className="grid-colum">
                                    <Traveltems
                                        src="http://baogialai.com.vn/dataimages/201801/original/images2611835_a_1.jpg"
                                        text="Khám phá đất nước Thủy Sỉ với những cảnh đẹp hụt hồn với ai đã đến đây"
                                        label=""
                                        path="/"
                                    />
                                </div>
                                <div className="grid-colum">
                                    <Traveltems
                                        src="http://baogialai.com.vn/dataimages/201801/original/images2611835_a_1.jpg"
                                        text="Khám phá đất nước Thủy Sỉ với những cảnh đẹp hụt hồn với ai đã đến đây"
                                        label=""
                                        path="/"
                                    />
                                </div>
                                <div className="grid-colum">
                                    <Traveltems
                                        src="http://baogialai.com.vn/dataimages/201801/original/images2611835_a_1.jpg"
                                        text="Khám phá đất nước Thủy Sỉ với những cảnh đẹp hụt hồn với ai đã đến đây"
                                        label=""
                                        path="/"
                                    />
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Travels;
