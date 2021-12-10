import React from 'react';

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
            {controls.map(c => (
                <BuildControl 
                key={c.label} 
                label={c.label}
                added={() =>props.ingredientsAdded(c.type)}
                remove={()=>props.ingredientsRemove(c.type)}
                />
            ))}
        </div>
    )
}

export default BuildControls;
