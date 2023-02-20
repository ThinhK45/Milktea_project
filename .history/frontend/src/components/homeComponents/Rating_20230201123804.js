import React from 'react';

const Rating = ({ value, text }) => {
    return (
        <div className="rating">
            <i
                className={
                    value >= 1
                        ? 'fas fa-start'
                        : value >= 0.5
                        ? 'fas fa-start-half-alt'
                        : 'far fa-start'
                }
            ></i>
        </div>
    );
};
