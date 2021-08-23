import React from 'react';

const Navigation = props => (
    <div className="nav-arrow-container">
        <button id="left_button" className="arrow-btn" disabled={props.slide === 1} onClick={() => props.showPrevSlide(props.slide)}>
            <i className="fas fa-arrow-circle-left nav-icon"></i>
        </button>
        <button id="right_button" className="arrow-btn" disabled={props.slide === props.itemLength} onClick={() => props.showNextSlide(props.slide)}>
            <i className="fas fa-arrow-circle-right nav-icon"></i>
        </button>
    </div>
);

export default Navigation;