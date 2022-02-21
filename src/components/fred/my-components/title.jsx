import React from 'react';
import Logo from './logo';

const Title = () => {
    return (
        <div className='title-component'>
            <div className='logo-container'>
             <Logo/ >
            </div>
            <div className='bg-black rounded-max white number'>
                <p className='lores-12 bold'>001</p>
            </div>
        </div>
    );
};

export default Title;