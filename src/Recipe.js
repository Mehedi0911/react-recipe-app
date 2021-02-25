import React from 'react';


const Recipe = ({title, image, calories}) =>{

    return(
        <div>
            <img src={image} alt=""/>
            <h2>{title} </h2>
            <p>Calories:{calories}</p>
        </div>
    )
}

export default Recipe;