import React from 'react';
import Typekit from 'react-typekit';
import './styles.css';
import Title from './my-components/title';
import Info from './my-components/info';
import Animation from './my-components/animation';
import Roll_video from './assets/Roll-clean.mp4'
 
function Fred (){
 return <div className='body'>
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
                <div>
                    <video src={Roll_video} width={400} height={400} loop autoPlay></video>
                </div>
            </div>
         </div>
     
}
 
export default Fred;