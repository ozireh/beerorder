import React, { useState } from 'react'
import { useEffect } from 'react';
import styles from './BeerBubbles.module.scss';
import { gsap, TimelineLite, TweenLite, Power3 } from 'gsap/all';

gsap.registerPlugin(TimelineLite, TweenLite, Power3); 

const BeerBubbles = ({ qty }) => {
    const [ready, setReady] = useState(false)
    const [bubbles, setBubbles] = useState([]);
    const [tl, setTl] = useState(new TimelineLite({ paused: true }));
    const refArray = React.useRef([]);

    const generateBubbles = () => {
        const num = Math.floor(Math.random() * 7) + 5
        let array = [];
        for (let index = 0; index < num; index++) {
            array[index] = {
                speed: Math.floor(Math.random() * 5) + 3,
                distance:  Math.floor(Math.random() * (window.innerHeight  * (2 / (10 - qty)))) + 50,
                x: Math.floor(Math.random() * window.innerWidth) + 0,
                y: Math.floor(Math.random() * 200) + 50,
                r: Math.floor(Math.random() * 10) + 6,
                delay: Math.floor(Math.random() * 2) + 0,
            }
        }

        return array;
    }

    useEffect(() => {
        setBubbles(generateBubbles());
        
    }, [])

    useEffect(() => {
        if (qty === 5) {
            tl.pause(); 
            TweenLite.staggerTo(refArray.current, 0.8, { opacity: 0, onCompleteAll: () => {
                setTimeout(() => {
                    tl.play(0)
                    
                }, 800);
            } })
        
        }

    }, [qty])

    useEffect(() => {
        console.log('new bubbles');
        if (!ready) for (let index = 0; index < refArray.current.length; index++) {
            const element = refArray.current[index];
            tl.fromTo(element, bubbles[index]?.speed, { scale: 0.5, opacity: 0 }, { opacity: 1, y: -bubbles[index]?.distance, ease: Power3.easeOut, onComplete: () => TweenLite.to(element, 0.5, { opacity: 0 }) }, bubbles[index]?.delay);
        }

        tl && tl.play();
     
        
    }, [bubbles])
    



    return (
        <div className={styles.container}>
            {
                bubbles && bubbles.map((bubble, index) => (
                    <div 
                        ref={ref => { refArray.current[index] = ref; }}
                        key={index}
                        className={styles.bubble}
                        style={{ width: bubble.r * 2, height: bubble.r * 2, borderRadius: bubble.r, left: bubble.x, bottom: bubble.y }}
                    ></div>
                ))
            }
        </div>
    )
}

export default BeerBubbles;
