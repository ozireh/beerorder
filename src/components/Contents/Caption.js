import React from 'react';
import style from './Caption.module.scss';
import classNames from 'classnames';

const Caption = ({ caption }) => {
    return (
        <div className={style.container}>
            <div>
                <h2>{caption}</h2>
            </div>
        </div>
    )
}

export default Caption;
