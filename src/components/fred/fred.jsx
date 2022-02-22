import React from 'react';
import Typekit from 'react-typekit';
import './styles.css';
import Title from './my-components/title';
import Info from './my-components/info';
 
function Fred (){
 return <div className='body'>
            <div className='card'>
                <Typekit kitId="uxz2jlo"/>
                <div className="head">
                    <Title/ >
                    <h1 className='lores-12 bold uppercase'>- Fredho animation -</h1>
                    <Info/ >
                </div>
            </div>
         </div>
     
}
 
export default Fred;