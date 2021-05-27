import React, { useEffect, useRef, useState } from 'react';
import styles from './BeerFlow.module.scss';
import { gsap, TimelineLite, TweenLite, Power3 } from 'gsap/all';
gsap.registerPlugin(TimelineLite, TweenLite, Power3); 

const waveWidth = 100;


const BeerFlow = ({ qty }) => {
    const ref = useRef(null);
    const line1 = useRef(null);
    const line2 = useRef(null);
    const [waveDifference, setWaveDifference] = useState({ difference: 0 });

    const [y, setY] = useState(qty);


    useEffect(() => {
        setY(qty)

        setWaveDifference({ difference: 10 })

    }, [qty]);

    useEffect(() => {
        TweenLite.to(line1.current, 1.2, { attr: {
            d: `M0 85 Q 65 65, 100 85 T 200 85 Q 250 65, 300 85 T 400 85 Q 450 65 500 85 T 600 85 L600 200 L0 200`,
            ease: Power3.easeInOut
        } });
        TweenLite.to(line2.current, 1.2, { attr: {
            d: `M0 85 Q 65 65, 100 85 T 200 85 Q 250 65, 300 85 T 400 85 Q 450 65 500 85 T 600 85 Q 650 65 700 85 T 800 85 L800 200 L0 200`,
            ease: Power3.easeInOut
        } });
        TweenLite.to(ref.current, 1.2, { css: { transform: `translateY(${(10 - qty) * 10}%)` }, onComplete: () => {
            TweenLite.to(line1.current, 1.2, { attr: {
                d: `M0 75 Q 75 75, 100 75 T 200 75 Q 250 75, 300 75 T 400 75 Q 450 75 500 75 T 600 75 L600 200 L0 200`,
                ease: Power3.easeInOut
            } });
            TweenLite.to(line2.current, 1.2, { attr: {
                d: `M0 75 Q 75 75, 100 75 T 200 75 Q 250 75, 300 75 T 400 75 Q 450 75 500 75 T 600 75 Q 650 75 700 75 T 800 75 L800 200 L0 200`,
                ease: Power3.easeInOut
            } });
        } })
    }, [waveDifference])



    return (
        <div className={styles.container}>

            <div ref={ref} className={styles.flow}>
                
                <svg width={window.innerWidth} height={200}>
                <g className={styles.floatingleft}>

                <path ref={line1} className={styles.darkwave} style={{ transform: 'translateX(50px)' }} d={`M0 75 Q 75 75, 100 75 T 200 75 Q 250 75, 300 75 T 400 75 Q 450 75 500 75 T 600 75 L600 200 L0 200`} stroke={'transparent'} />
                <path ref={line2} className={styles.wave} style={{ transform: 'translateX(-50px)' }} d={`M0 75 Q 75 75, 100 75 T 200 75 Q 250 75, 300 75 T 400 75 Q 450 75 500 75 T 600 75 Q 650 75 700 75 T 800 75 L800 200 L0 200`} stroke={'transparent'} />

                </g>
                    
                </svg>
                <div className={styles.flowrest}></div>
            </div>
            
        </div>
    )
}

export default BeerFlow;
