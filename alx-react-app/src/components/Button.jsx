import React from 'react';

function Button() {
    const buttonStyle = {
        backgroundColor: 'blue',
        color: 'white',
        padding: '10px 20px',
        fontSize: '16px',
        borderRadius: '20px'
    };

    return (
        <botton style={buttonStyle}>
            <a href="#" className='click-me'>Click Me</a>
        </botton>
    );
}

export default Button;