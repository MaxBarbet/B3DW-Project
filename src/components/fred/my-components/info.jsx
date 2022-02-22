import React from 'react';
import Cross from './cross';
import banniere from './../assets/banniere.png';
import ScrollContainer from 'react-indiana-drag-scroll';

const Info = () => {
    return (
        <div className='lores-12 info-card'>
            <div>
                <h3 className='info-title'> Technical Info </h3>
            </div>
            <div className='meta-info'>
                <p>1920*1080</p>
                <Cross/ >
                <p>1 min 24</p>
                <Cross/ >
                <p>24 ips</p>
            </div>
            <ScrollContainer className='info-img'>
                <img src={banniere} alt="paysage" />
                <img src={banniere} alt="mouton" />
                <img src={banniere} alt="cheval" />
            </ScrollContainer>
            <div className='info-subtitle'>
                <h4 className="uppercase">Process</h4>
            </div>
        </div>
    );
};

export default Info;