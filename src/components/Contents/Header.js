import React from 'react';
import style from './Header.module.scss';
import classNames from 'classnames';

const Header = ({ title, closeComponentFuntion }) => {

    return (
        <div className={style.container}>
            <div className={style.wrapper}>
                <div className={style.closeButton} onClick={closeComponentFuntion}>
                    <svg width={44} height={44}>
                        <line x1={15} y1={15} x2={29} y2={29} stroke={'#000'} strokeWidth={1} />
                        <line x1={15} y1={29} x2={29} y2={15} stroke={'#000'} strokeWidth={1} />
                    </svg>
                </div>
                <div>
                    <h1>{title}</h1>
                </div>
            </div>
        </div>
    )
}

export default Header;