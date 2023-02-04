import React, { useEffect } from 'react';

function ScrollTopButton() {
    const handleClick = () => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    };

    return (
        <button onClick={handleClick}>
            Scroll to Top
        </button>
    );
}

export default ScrollTopButton;