import React, { useEffect, useState } from 'react';
import { gsap, TimelineLite, TweenLite, Power3 } from 'gsap/all';
import styles from './Statements.module.scss'
gsap.registerPlugin(TimelineLite, TweenLite, Power3); 

const Statements = ({ statements, qty }) => {
    const [isAnimating, setIsAnimating] = useState(false);
    const [state, setState] = useState(null);
    const refArray = React.useRef([]);
    const changeStatement = (oldState, newState) => {

        if ((oldState || oldState === 0) && (newState || newState === 0)) {
            setIsAnimating(true)
            
            TweenLite.fromTo(
                refArray.current[statements.findIndex(item => item.trigger === oldState)],
                .25,
                { y: 0, opacity: 1 },
                { y: -30, opacity: 0, ease: Power3.easeOut }
            )
            TweenLite.fromTo(
                refArray.current[statements.findIndex(item => item.trigger === newState)],
                .4,
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, ease: Power3.easeOut, onComplete: () => {
                    TweenLite.set([
                        refArray.current.filter(item => item !== refArray.current[statements.findIndex(item => item.trigger === newState)])
                    ], { clearProps: 'all' });
                    setIsAnimating(false)

                } },
                
            )
        } else if (newState || newState === 0) {
        
            TweenLite.fromTo(
                refArray.current[statements.findIndex(item => item.trigger === newState)],
                1,
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, ease: Power3.easeOut, onComplete: () => {
                    TweenLite.set([
                        refArray.current.filter(item => item !== refArray.current[statements.findIndex(item => item.trigger === newState)])
                    ], { clearProps: 'all' });
                    setIsAnimating(false)

                } },
                
            )
        }



    };

    useEffect(() => {
        
        let closest = Math.max.apply(null, statements.map(item => (item.trigger)).filter(value => value <= qty));
        if (!isAnimating && state !== closest) {
            if (state === null) {
                changeStatement(null, closest);
            } else {
                changeStatement(state, closest);
            }
             
            setState(closest);
        }
        

      
    }, [qty]);




    return (
        <div className={styles.container}>
            { statements.map((item, index) => (
                <div 
                    className={styles.statement}
                    key={item.trigger} 
                    // style={{ visibility: 'hidden' }}
                    ref={ref => {
                        refArray.current[index] = ref;
                    }}
                >{item.label}</div>
            )) }
        </div>
    )
}

export default Statements;