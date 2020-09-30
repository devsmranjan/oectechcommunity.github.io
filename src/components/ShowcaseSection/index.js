import React from 'react';
import './styles.css';

const ShowcaseSection = ({ bgImage, title }) => {
    return (
        <div class="parallax-container" id="showcase-section">
            <div class="title-container">
                <h5 class="title">{title}</h5>
            </div>
            <div class="parallax">
                <img src={bgImage} alt={title} />
            </div>
        </div>
    );
};

export default ShowcaseSection;
