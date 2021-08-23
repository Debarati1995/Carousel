import React from 'react';

const Status = props => (
    <div>
        {props.items.map((item, key) => (
            <span key={key} className={`status-block ${item.slideNo === props.slide ? 'active' : ''}`} 
                onClick={() => props.goToSlide(item.slideNo)} ></span>
        ))}
    </div>
);

export default Status;