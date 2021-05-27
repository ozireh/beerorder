
import React, { useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import { style } from '@material-ui/system';
import styles from './QuantityRange.module.scss'
const PrettoSlider = withStyles({
    root: {
      color: '#000',
      height: 8,
    },
    thumb: {
      height: 32,
      width: 32,
      backgroundColor: '#fff',
      border: '2px solid currentColor',
      marginTop: -12,
      marginLeft: -16,
      '&:focus, &:hover, &$active': {
        boxShadow: 'inherit',
      },
    },
    active: {},
    valueLabel: {
      left: 'calc(-50% + 2px)',
    },
    track: {
      height: 3,
      borderRadius: 2,
    },
    rail: {
      height: 3,
      borderRadius: 2,
    },
  })(Slider);

const QuantityRange = ({ qty, setQty }) => {
    const [value, setValue] = useState(qty);
    const handleChange = (event, data) => {
        
        setValue(data);
        qty !== Math.floor(data) && setQty(Math.floor(data));
    };

    return (
        <div className={styles.container}>
            
            <PrettoSlider 
                // valueLabelDisplay="auto" 
                value={value}
                onChange={handleChange}
                aria-labelledby="track-false-range-slider"
                // aria-label="pretto slider" 
                min={0}
                step={0.01}
                max={10}
            />
        </div>
    )
}

export default QuantityRange;
