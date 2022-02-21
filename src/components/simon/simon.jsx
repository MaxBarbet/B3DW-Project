import React, { useEffect, useRef, useState } from 'react';
import Typekit from 'react-typekit';
import './simon.css'
import {gsap} from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';



function HomeSimon (){
    function importAll(r) {
        return r.keys().map(r);
      }

      const images = importAll(require.context('./assets/img', false, /\.(png|jpe?g|svg)$/));
      let tl = gsap.timeline();
      let tl2 = gsap.timeline();
      let cursor = useRef(null);
      const [img, setImage] = useState({
          src:images[2],
      });
      let h1 = useRef(null);
      useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        tl2.from(h1.children,{
          skewY: 8,
          y: 200,
          duration: 2,
          delay: .3,
          opacity: 0,
          scrollTrigger:{
            trigger:'#secondSection',
            start: "top center",
            end: "bottom bottom",
            scrub: true
        },
        })

      },[])
    const showImage = (idImage) => {
        if (idImage === 1) {
            setImage({
                src:images[2],
            })
            tl.to(cursor,{
                css:{
                    opacity:1,
                },
            })
            return;
        }
        if (idImage === 2) {
            setImage({
                src:images[1],
            })
            tl.to(cursor,{
                css:{
                    opacity:1,
                },
            })
            return;
        }
        if (idImage === 3) {
            setImage({
                src:images[0],
            })
            tl.to(cursor,{
                css:{
                    opacity:1,
                },
            })
            return;
        }
    }    
    const hideImage = (idImage) => {
        if (idImage === 1) {
            tl.to(cursor,{
                css:{
                    opacity:0,
                },
            })
            return;
            
        }
        if (idImage === 2) {
            tl.to(cursor,{
                css:{
                    opacity:0,
                },
            })
            return;
            
        }
        if (idImage === 3) {
            tl.to(cursor,{
                css:{
                    opacity:0,
                },
            })
            return;
            
        }
    }

    function handleMouseMove(ev) { 
        const tl = gsap.timeline();
        tl.to(cursor,{
            duration:1.5,
            transformOrigin: 'right top',
            skewType: "simple",
            skewX: 30,
            css: {
                left: ev.pageX,
                top: ev.pageY ,
              }
        })
    
    }


 return (
     <section className="main">
            <section className="hero">
                <h1 className='bold'>Welcome</h1>
                <h2>I like Photography</h2>

                <h2>This is my world</h2>
                <p className='bold'>Simon Joseph</p>
            </section>
            <section className='project' id='secondSection' onMouseMove={(ev)=> handleMouseMove(ev)}>
           
                <div className="content"  ref={el => h1 =el}>
                <div className='imgLink' >
                        <p>01</p>
                        <Link to="/simon/alps">
                        <p onMouseOver={() => showImage(1)} onMouseOut={() => hideImage(1)} 
                        className='img'
                        >Tales of blue light</p></Link>
                </div>
                <div className='imgLink'>
                    <p>02</p>
                    <p onMouseOver={() => showImage(2)} onMouseOut={() => hideImage(2)} 
                    className='img'>Icelandic Path</p>
                </div>
                <div className='imgLink'>
                    <p>03</p>
                    <p onMouseOver={() => showImage(3)} onMouseOut={() => hideImage(3)} 
                    className='img'>My alps</p>
                </div>
                </div>
                <img src={img.src} alt="" className="img1" ref={el => cursor = el} />



{/* 
                {(hover1 && hover1 === true) ? (<img src={images[2]} alt="" className="img1" ref={el => cursor = el} />) : null}
                {(hover2 && hover2 === true) ? (<img src={images[1]} alt="" className="img1" ref={el => cursor = el} />) : null}
                {(hover3 && hover3 === true) ? (<img src={images[0]} alt="" className="img1" ref={el => cursor = el} />) : null} */}
            </section>
        <Typekit kitId="ckf1dlb"/>
    </section>

 )

}
export default HomeSimon;