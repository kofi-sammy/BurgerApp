import React from 'react';

import styles from './Burger.module.css';

import BurgerIngredient from './BurgerIngredient.js/BurgerIngredient';

const Burger = (props) => {
    
    let transformedIngredient = Object.keys( props.ingredients )
    .map(ingredientKey =>{
        return [...Array(props.ingredients[ingredientKey])].map((_, i) => 
        <BurgerIngredient key={ingredientKey + i} type={ingredientKey}/> )
       
    })

    .reduce((arr, el) =>{
        return arr.concat(el)
    },[]);
    
    if(transformedIngredient.length === 0 ){
        transformedIngredient = <p>Please add ingredient</p>
    }
    
    return (
        <div className={styles.Burger}>
            <BurgerIngredient type='bread-top'/>
            {transformedIngredient}
            <BurgerIngredient type='bread-bottom'/>     
        </div>
    )
}

export default Burger;
