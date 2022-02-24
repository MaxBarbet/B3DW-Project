import React from 'react';
import Cross from './cross';
import croquis from './../assets/hamster-croquis.png';
import ae_hamster from './../assets/hamster.png';
import final_hamster from './../assets/hamster-final.png';
import ScrollContainer from 'react-indiana-drag-scroll';

const Info = () => {
    return (
        <div className='lores-12 info-card'>
            <div>
                <h3 className='info-title'> Technical Info </h3>
            </div>
            <div className='meta-info'>
                <p>1080*1080</p>
                <Cross/ >
                <p>07 sec</p>
                <Cross/ >
                <p>24 ips</p>
            </div>
            <ScrollContainer className='info-img'>
                <img src={croquis} alt="Croquis video hamster" />
                <img src={ae_hamster} alt="after effect image hamster" />
                <img src={final_hamster} alt="final cover hamster" />
            </ScrollContainer>
            <div className='info-subtitle'>
                <h4 className="uppercase">Process</h4>
            </div>
        </div>
    );
};

export default Info;