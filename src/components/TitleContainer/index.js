import React from 'react';
import bgImage from '../../assets/images/soh2018.jpg';
import './styles.css';

const TitleContainer = ({ title }) => {
    return (
        <div className="parallax-container" id="title-container">
            <div className="parallax">
                <img src={bgImage} alt="bg" />
            </div>
            <div className="title-area">
                <h3 className="title">{title}</h3>
            </div>
        </div>
    );
};

export default TitleContainer;
