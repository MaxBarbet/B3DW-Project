import React, { useEffect, useRef, useState } from 'react';
import { Component } from "react/cjs/react.development"
import {gsap} from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

class Image extends Component{
    render(){ 
        return (
            <div>
                <img src={this.props.src} className={this.props.className}/>
            </div>
        )
    }
}
export default Image