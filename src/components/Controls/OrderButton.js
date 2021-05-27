import React from 'react'
import styles from './OrderButton.module.scss';
const OrderButton = ({ qty, orderFunction }) => {
    return (
        <div className={styles.container}>
            <div className={styles.button} onClick={() => orderFunction(qty)}>
                <div>Place your order</div>
                <div className={styles.qty}>
                    <span>{qty}</span>    
                </div>
            </div>
        </div>
    )
}

export default OrderButton
