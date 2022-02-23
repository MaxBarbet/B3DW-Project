import React from 'react';
import { Animator, ScrollContainer,batch, ScrollPage, Sticky, Zoom, Fade, MoveOut, StickyIn, FadeIn, ZoomIn, MoveIn } from 'react-scroll-motion';
import './loulou.css';
import ecran_manahe from './images/ecran_manahe.png'
import  P43_img from './images/p43.png'
import  manahe_projet from './images/manahe_projet.png'
import  nature from './images/nature.png'
import  arbre from './images/arbre.png'
import  terre from './images/terre.png'
import oiseau from './images/oiseau.gif'
import emoi from './images/emoi.png'
import ecran_p43 from './images/ecran_p43.png'
import nft from './images/nft.png'
import qrcode from './images/qrcode.png'
import chat from './images/chat.png'






const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
const FadeUp = batch(Fade(), StickyIn(), )
function Mwan_lou  (){


 
 return (
     <ScrollContainer>

         <ScrollPage page={0}>
             <Animator>
             <div className='animation-area'>
              <ul className='box-area'>
                   <li></li>
                   <li></li>
                   <li></li>
                   <li></li>
                   <li></li>
                   <li></li>
                   <li></li>
              </ul>
              <h1 className='part_1'>Bienvenue dans mon univers💻</h1>
             </div>
             </Animator>
         </ScrollPage>


         <ScrollPage page={1}>
             <Animator animation={ZoomInScrollOut}>
             <h2 className='part_2'>Bonjour, je m'appelle Loulou <br></br>j'ai 23 ans, après avoir fait deux ans de Lience en Economie et Gestion, J'ai décidé de m'orienter dans  l'univers du digital après avoir fait des projet en autodidact  <br/>Actuellement je suis étudiante en troisième année de bachelor chef de projet digital💻   </h2>
             </Animator>
         </ScrollPage>
         
         <div className='page_rotate'>

         <ScrollPage page={2}>
             <Animator animation={FadeUp}>
                    <div className='container'>
                        <div className='images'>
                            <img src={ecran_manahe} alt="" />
                            <img src={ecran_p43} alt="" />
                            <img src={emoi} alt="" />
                            <img src={nft} alt="" />
                            <img src={qrcode} alt="" />
                            <img src={chat} alt="" />
                        </div>   
                    </div>
             </Animator>
           
         </ScrollPage>
         </div>
         <ScrollPage page={3}>
             <h2 className='titre_competence'>Mes compétences</h2>
             <div className='section-3'>
             <h2>
             <Animator animation={MoveIn(-1000, 0)}>Developement web</Animator>
             <Animator animation={MoveIn(1000, 0)}>Stratégie marketing</Animator>
             <Animator animation={MoveOut(1000, 0)}>3D</Animator>
             <Animator animation={MoveOut(-1000,0)}>SEO & SEA</Animator>
             <Animator animation={MoveIn(-1000, 0)}>Graphisme</Animator>

             </h2>
             </div>
         </ScrollPage>

         <ScrollPage page={4}>
             <Animator animation={FadeUp}>
                 
                    <div className='page4'>
                        <h1 className='titre_projet'>Mes projet</h1>
                        <p>Je vous presente mes differents projet que <br/>j'ai réalisé de manière professionnel ou personnelle.</p>
                        <div className='images_projet'>
          <a href="https://natureemoi-mll.netlify.app/" target="_blank"><img src={nature}  className='projet_image1' alt=""/>
          </a> 
          <a href="https://manahe.fr/" target="_blank"><img src={manahe_projet}  className='projet_image1' alt=""/></a>
          <a href="https://www.p4-3.fr/" target="_blank"><img src={P43_img}  className='projet_image1' alt=""/></a> 
          </div>
          </div>
             </Animator>
         </ScrollPage> 
         <ScrollPage page={5}>
             <div className='page5'>
             <h2 className='creation'>Mes creations 3D</h2>
             <div className='section-3'>
             <h2>
             <Animator animation={MoveIn(-1000, 0)}><img src={arbre}  className='arbre' alt=""/></Animator>
             <Animator animation={MoveIn(1000, 0)}>Mon arbre pixalisé</Animator>
             <Animator animation={MoveOut(1000, 0)}><img src={terre}  className='terre' alt=""/></Animator>
             <Animator animation={MoveOut(-1000,0)}>Earth</Animator>
        </h2>
             </div>
             </div>
         </ScrollPage>  

          <ScrollPage page={6}>
             <Animator>
                 <div className='page6'>
             <h2>Contacter-moi !</h2>
             <img src={oiseau}  className='oiseau' alt=""/>
             <p><a className='email'  href="mailto:mwan-loulou.ibrahimmahazi@outlook.com" target="_blank">louloumwana@gmail.com</a></p>
             </div>
             </Animator>
         </ScrollPage>     
     </ScrollContainer>

      
 );

 
   
 

}




 
export default Mwan_lou;

