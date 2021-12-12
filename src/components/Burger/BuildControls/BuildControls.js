import React, { createElement } from 'react';

import BuildControl from './BuildControl';
import styles from './BuildControls.module.css';

const controls =[
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon' , type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'},
]


const BuildControls = (props) => {
    return (
        <div className={styles.BuildControls}>
            <p>Current Price {props.price.toFixed(2)}</p>
            {controls.map(c => (
                <BuildControl 
                    key={c.label} 
                    label={c.label}
                    added={() =>props.ingredientsAdded(c.type)}
                    remove={()=>props.ingredientsRemove(c.type)}
                    disabled={props.disabled[c.type]}
                   
                />
            ))}
             <button className={styles.OrderButton}
              disabled={!props.purchasable}>ORDER NOW</button>
        </div>
    )
}

export default BuildControls;
