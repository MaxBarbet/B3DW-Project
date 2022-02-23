import React, { useEffect, useRef, useState } from 'react';
import Image from './img';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);


 
function Iceland (){
    function importAll(r) {
        return r.keys().map(r);
      }
      let history = useNavigate();
      const images = importAll(require.context('../assets/img/iceland', false, /\.(png|jpe?g|svg)$/));
      const [img, setImage] = useState({
          src:images[2],
      });
      const el = useRef();
      const el2 = useRef();
      const el3 = useRef();
      const q = gsap.utils.selector(el);
      const r = gsap.utils.selector(el2);
      const s = gsap.utils.selector(el3);
      
      useEffect(() => {
        // Target any descendant with the class of .box - no matter how far down the descendant tree. Uses el.current.querySelectorAll() internally
        gsap.from(q(".image"), {
          y: 100,
          opacity:0,
          scrollTrigger:{
              trigger:q(".image")
          },
          stagger: 0.33,
        });
        gsap.from(r(".image"), {
            y: 100,
            opacity:0,
            scrollTrigger:{
                trigger:r(".image")
            },
            stagger: 0.33,
          });
          gsap.from(s(".image"), {
            y: 100,
            opacity:0,
            scrollTrigger:{
                trigger:s(".image")
            },
            stagger: 0.33,
          });
      }, []);



 return (
     <section className='alps iceland'>
        <section className='hero'>
            <div className='text'>
                <h2>Tales of <br></br>Blue Lights</h2>
                <p className='bold'>Photpographie</p>
            </div>
            <div>
                <Image src={images[1]} className='ImagePage' />
            </div>
        </section>
        <section className='sectionImage' ref={el}>
            <Image src={images[0]} className='image'/>
            <Image src={images[2]} className='image'/>
        </section>
        <section className='sectionImage' ref={el2}>
            <Image src={images[3]} className='image'/>
            <Image src={images[4]} className='image'/>
        </section>
        <section className='sectionImage' ref={el3}>
            <Image src={images[5]} className='image'/>
            <Image src={images[6]} className='image'/>
        </section>
        <div className='goBack'>
            <button onClick={() => history(-1)}>Back</button>
        </div>
    </section>
    )
}
 
export default Iceland;