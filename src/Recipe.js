import React from 'react';


const Recipe = ({title, image, calories}) =>{

    return(
        <div className ="recipe">
            <img src={image} alt=""/>
            <h2>{title} </h2>
            <p>Calories: {calories}</p>
            <button className="explore-btn">explore</button>

        </div>
    )
}

export default Recipe;