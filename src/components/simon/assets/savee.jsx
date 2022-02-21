import React, { useEffect, useRef, useState } from 'react';
import Typekit from 'react-typekit';
import './simon.css'
import {gsap} from 'gsap';

 
function Simon (){
    function importAll(r) {
        return r.keys().map(r);
      }
      
    const images = importAll(require.context('./assets/img/', false, /\.(png|jpe?g|svg)$/));
    const [hover1, setHover1] = useState(false);
    const [hover2, setHover2] = useState(false);
    const [hover3, setHover3] = useState(false);
    const [MousePosition,setMousePosition] = useState({
        left:0,
        top:0,
    })



    function handleMouseMove(ev) { 
        setMousePosition({ left: ev.pageX, top: ev.pageY}) 
        const tl = gsap.timeline();
        tl.to(setMousePosition,{
            left:ev.pageX,
            top: ev.pageY,
        })
    
    }

    const showImage = (idImage) => {
        if (idImage === 1) {
            setHover1(true)
            return;
        }
        if (idImage === 2) {
            setHover2(true)
            return;
        }
        if (idImage === 3) {
            setHover3(true)
            return;
        }
    }
    
    const hideImage = (idImage) => {
        if (idImage === 1) {
            setHover1(false)
            return;
            
        }
        if (idImage === 2) {
            setHover2(false)
            return;
            
        }
        if (idImage === 3) {
            setHover3(false)
            return;
            
        }
    }

 return (
     <section className="main">
            <section className="hero">
                <h1 className='bold'>Welcome</h1>
                <h2>I like Photography</h2>

                <h2>This is my world</h2>
                <p className='bold'>Simon Joseph</p>
            </section>
            <section className='project'>
                <div className='imgLink'>
                    <p>01</p>
                    <p onMouseOver={() => showImage(1)} onMouseOut={() => hideImage(1)} onMouseMove={(ev)=> handleMouseMove(ev)}
                    className='img'
                    >Tales of blue light</p>
                </div>
                <div className='imgLink'>
                    <p>02</p>
                    <p onMouseOver={() => showImage(2)} onMouseOut={() => hideImage(2)} onMouseMove={(ev)=> handleMouseMove(ev)}
                    className='img'>Icelandic Path</p>
                </div>
                <div className='imgLink'>
                    <p>03</p>
                    <p onMouseOver={() => showImage(3)} onMouseOut={() => hideImage(3)} onMouseMove={(ev)=> handleMouseMove(ev)}
                    className='img'>My alps</p>
                </div>
                {/* <div className='test' ref={el=> cursor = el}></div> */}
                {(hover1 && hover1 === true) ? (<img src={images[2]} alt="" className="img1" style={{left:MousePosition.left , top: MousePosition.top}} />) : null}
                {(hover2 && hover2 === true) ? (<img src={images[1]} alt="" className="img1" style={{left:MousePosition.left , top: MousePosition.top}} />) : null}
                {(hover3 && hover3 === true) ? (<img src={images[0]} alt="" className="img1" style={{left:MousePosition.left , top: MousePosition.top}} />) : null}

            </section>
        <Typekit kitId="ckf1dlb"/>
    </section>
 )

}
export default Simon;