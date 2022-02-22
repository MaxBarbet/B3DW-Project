import React from 'react';
import Logo from './logo';

const Title = () => {
    return (
        <div className='title-component'>
            <a href="https://www.fredho.fr/" className='logo-container'>
                <Logo/ >
            </a>
            <div className='bg-black rounded-max white number'>
                <p className='lores-12 bold'>001</p>
            </div>
        </div>
    );
};

export default Title;