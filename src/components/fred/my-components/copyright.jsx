import React from 'react';
import Logo from './logo'

const Copyright = () => {
    return (
        <div className='lores-15 uppercase'>
            <div className='row space-between'>
                <p>Fredho animation</p>
                <p>is</p>
            </div>
            <p>designed, manufractured, and produced</p>
            <div className='row'>
                <p>by</p>
                <a href="https://fredho.fr/" className='logo-copyright rounded-max'><Logo/ ></a>
            </div>
            <div className='row space-between inspired'>
                <div>
                    <span className='urss'>&#9773;</span>
                </div>
                <p className='justify'>Inspired from <br/>created for xp</p>
                <a href="https://okok.services/" className='rounded-max'>okok.services</a>
            </div>
            <div className='row space-between'>
                <p>©2022</p>
                <p>property of <a href="https://fredho.fr/">fredho.fr</a></p>
            </div>
        </div>
    );
};

export default Copyright;