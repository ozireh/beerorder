import React from 'react';
import style from './ContentWrapper.module.scss';

const ContentWrapper = ({ children }) => {
    return (
        <div className={style.contentContainer}>
            {children}
        </div>
    )
}

export default ContentWrapper
