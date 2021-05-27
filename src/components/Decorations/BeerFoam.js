import React, { useEffect, useState } from 'react';
import styles from './BeerFoam.module.scss';
import { gsap, TimelineLite, TweenLite, Power3 } from 'gsap/all';
gsap.registerPlugin(TimelineLite, TweenLite, Power3);

const BeerFoam = ({ qty }) => {
    const [reversed, setReversed] = useState(false)
    const refArray = React.useRef([]);

    const [tl, setTl] = useState();

    useEffect(() => {
        if (!tl) setTl(new TimelineLite({ paused: true })
            .fromTo(refArray.current[0], Math.floor(Math.random() * 5) + 1, { y: -180 }, { y: 0 }, Math.floor(Math.random() * 3) + 1)
            .fromTo(refArray.current[1], Math.floor(Math.random() * 5) + 1, { y: -180 }, { y: 0 }, Math.floor(Math.random() * 3) + 1)
            .fromTo(refArray.current[2], Math.floor(Math.random() * 5) + 1, { y: -180 }, { y: 0 }, Math.floor(Math.random() * 3) + 1)
            .fromTo(refArray.current[3], Math.floor(Math.random() * 5) + 1, { y: -180 }, { y: 0 }, Math.floor(Math.random() * 3) + 1)
            .fromTo(refArray.current[4], Math.floor(Math.random() * 5) + 1, { y: -180 }, { y: 0 }, Math.floor(Math.random() * 3) + 1)
            .fromTo(refArray.current[5], Math.floor(Math.random() * 5) + 1, { y: -180 }, { y: 0 }, Math.floor(Math.random() * 3) + 1)
            .fromTo(refArray.current[6], Math.floor(Math.random() * 5) + 1, { y: -180 }, { y: 0 }, Math.floor(Math.random() * 3) + 1)
            .fromTo(refArray.current[7], Math.floor(Math.random() * 5) + 1, { y: -180 }, { y: 0 }, Math.floor(Math.random() * 3) + 1)
            .fromTo(refArray.current[8], Math.floor(Math.random() * 5) + 1, { y: -180 }, { y: 0 }, Math.floor(Math.random() * 3) + 1)
            .fromTo(refArray.current[9], Math.floor(Math.random() * 5) + 1, { y: -180 }, { y: 0 }, Math.floor(Math.random() * 3) + 1)
            .fromTo(refArray.current[10], Math.floor(Math.random() * 5) + 1, { y: -180 }, { y: 0 }, Math.floor(Math.random() * 3) + 1)
            .fromTo(refArray.current[11], Math.floor(Math.random() * 5) + 1, { y: -180 }, { y: 0 }, Math.floor(Math.random() * 3) + 1)
            .fromTo(refArray.current[12], Math.floor(Math.random() * 5) + 1, { y: -180 }, { y: 0 }, Math.floor(Math.random() * 3) + 1)
            .fromTo(refArray.current[13], Math.floor(Math.random() * 5) + 1, { y: -180 }, { y: 0 }, Math.floor(Math.random() * 3) + 1))

        if (qty >= 10) {
            if (!reversed) {
                setReversed(true);
                tl.timeScale(2).play();
            }
           
        } else if (tl) {
            if (reversed) {
                tl.timeScale(4).reverse();
                setReversed(false);
            } 
            // tl.reverse().timeScale(2);
        }

    }, [qty]);

    return (
        <div className={styles.container}>
            <svg width="438" height="189" viewBox="0 0 438 189" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path ref={ref => { refArray.current[0] = ref; }} d="M313 34.5C313 24.2827 321.283 16 331.5 16C341.717 16 350 24.2827 350 34.5V144.5C350 154.717 341.717 163 331.5 163C321.283 163 313 154.717 313 144.5V34.5Z" fill="#FEF4E6"/>
            <path ref={ref => { refArray.current[1] = ref; }} d="M68 33C68 23.6112 75.6112 16 85 16C94.3888 16 102 23.6112 102 33V121C102 130.389 94.3888 138 85 138C75.6112 138 68 130.389 68 121V33Z" fill="#FEF4E6"/>
            <path ref={ref => { refArray.current[2] = ref; }} d="M289 180.5C289 175.806 292.806 172 297.5 172C302.194 172 306 175.806 306 180.5C306 185.194 302.194 189 297.5 189C292.806 189 289 185.194 289 180.5Z" fill="#FEF4E6"/>
            <path ref={ref => { refArray.current[3] = ref; }} d="M75 157C75 153.686 77.6863 151 81 151C84.3137 151 87 153.686 87 157C87 160.314 84.3137 163 81 163C77.6863 163 75 160.314 75 157Z" fill="#FEF4E6"/>
            <path ref={ref => { refArray.current[4] = ref; }} d="M169.834 63.0299C169.834 48.3944 181.699 36.5299 196.334 36.5299H229.334C243.97 36.5299 255.834 48.3944 255.834 63.0299C255.834 77.6655 243.97 89.5299 229.334 89.5299H196.334C181.699 89.5299 169.834 77.6655 169.834 63.0299Z" fill="#FEF4E6"/>
            <path ref={ref => { refArray.current[5] = ref; }} d="M401.834 46C401.834 35.7827 410.117 27.5 420.334 27.5C430.552 27.5 437.088 35.7827 437.088 46V99.0299C437.088 109.247 430.552 117.53 420.334 117.53C410.117 117.53 401.834 109.247 401.834 99.0299V46Z" fill="#FEF4E6"/>
            <path ref={ref => { refArray.current[6] = ref; }} d="M250.834 76.5299C250.834 64.932 260.236 55.5299 271.834 55.5299C283.432 55.5299 292.834 64.932 292.834 76.5299V83.5299C292.834 95.1279 283.432 104.53 271.834 104.53C260.236 104.53 250.834 95.1279 250.834 83.5299V76.5299Z" fill="#FEF4E6"/>
            <path ref={ref => { refArray.current[7] = ref; }} d="M0.0320114 39.6798C0.896937 17.5194 19.1133 9.77704e-05 41.2906 9.19086e-05L389.014 0C415.564 -7.0176e-06 437.088 21.5231 437.088 48.0733C437.088 75.3589 414.404 97.1743 387.139 96.1102L39.6803 82.5488C16.8938 81.6595 -0.857349 62.4664 0.0320114 39.6798Z" fill="#FEF4E6"/>
            <path ref={ref => { refArray.current[8] = ref; }} d="M204.07 39.787C216.911 31.3893 234.128 34.9908 242.525 47.8313L247.128 54.8694C255.526 67.7099 251.924 84.9268 239.084 93.3245C226.243 101.722 209.027 98.1207 200.629 85.2802L196.026 78.2421C187.628 65.4016 191.23 48.1847 204.07 39.787Z" fill="#FEF4E6"/>
            <path ref={ref => { refArray.current[9] = ref; }} d="M2.42168 54.5299C2.42168 41.2751 13.1668 30.5299 26.4217 30.5299C39.6765 30.5299 50.4217 41.2751 50.4217 54.5299V84.5299C50.4217 97.7847 39.6765 108.53 26.4217 108.53C13.1668 108.53 2.42168 97.7847 2.42168 84.5299V54.5299Z" fill="#FEF4E6"/>
            <path ref={ref => { refArray.current[10] = ref; }} d="M94.8342 74.5299C94.8342 87.7848 84.0891 98.5299 70.8342 98.5299C57.5794 98.5299 46.8342 87.7848 46.8342 74.5299C46.8342 61.2751 57.5794 50.5299 70.8342 50.5299C84.0891 50.5299 94.8342 61.2751 94.8342 74.5299Z" fill="#FEF4E6"/>
            <path ref={ref => { refArray.current[11] = ref; }} d="M329.834 94.0299C329.834 104.799 321.104 113.53 310.334 113.53C299.565 113.53 290.834 104.799 290.834 94.0299C290.834 83.2604 299.565 74.5299 310.334 74.5299C321.104 74.5299 329.834 83.2604 329.834 94.0299Z" fill="#FEF4E6"/>
            <path ref={ref => { refArray.current[12] = ref; }} d="M171.734 101.92C208.897 96.4484 237.422 64.4278 237.422 25.7448C237.422 20.4819 236.894 15.3422 235.888 10.376L86.3782 4.54064C84.4527 11.2768 83.4217 18.3904 83.4217 25.7448C83.4217 62.3399 108.951 92.9725 143.171 100.805L171.734 101.92Z" fill="#FEF4E6"/>
            <path ref={ref => { refArray.current[13] = ref; }} d="M411.834 79.5299C411.834 95.5462 391.463 108.53 366.334 108.53C341.205 108.53 320.834 95.5462 320.834 79.5299C320.834 63.5137 341.205 50.5299 366.334 50.5299C391.463 50.5299 411.834 63.5137 411.834 79.5299Z" fill="#FEF4E6"/>
            </svg>
        </div>
    )
}

export default BeerFoam;
