import React from 'react';
import Typekit from 'react-typekit';
import Title from './my-components/title';
import Info from './my-components/info';
import Animation from './my-components/animation';
import Roll_video from './assets/Roll-clean.mp4'
import Description from './my-components/description';
import Copyright from './my-components/copyright'
import './styles.css';
 
function Fred (){
 return <div className='body'>
            <div className='grid'></div>
            <div className='card'>
                <Typekit kitId="uxz2jlo"/>
                <div className="head">
                    <Title/ >
                    <h1 className='lores-12 bold uppercase'>- Fredho animation -</h1>
                    <Info/ >
                </div>
                <div className='animation-card'>
                    <Animation/ >
                </div>
                <div className='video'>
                    <video src={Roll_video} width={400} height={400} loop autoPlay></video>
                </div>
                <div className='row space-between'>
                    <div className="description">
                        <Description/ >
                    </div>
                    <div className='copyright'>
                        <Copyright/ >
                    </div>
                </div>
            </div>
         </div>
     
}
 
export default Fred;