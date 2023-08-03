import React, { useEffect, useState, useRef } from 'react'
import './styles.css';
const Main = () => {

    const [ingredientList, setIngredientList] = useState([]);
    const [loading, setLoading] = useState(false)
    const inputRef = useRef(null);

    const searchRecipe = async (query) => {
        setLoading(true);
        const YOUR_APP_ID = process.env.REACT_APP_YOUR_APP_ID;
        console.log(YOUR_APP_ID);
        const YOUR_APP_KEY = process.env.REACT_APP_YOUR_APP_KEY;

        const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`;
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        setLoading(false);
        setIngredientList(data.hits);
    }

    const search = () => {
        searchRecipe(inputRef.current.value);
    }
    useEffect(() => {
        searchRecipe('pizza');
    }, []);


    return (
        <div className="main">
            <input placeholder="Search a recipe" ref={inputRef} />
            <button onClick={search}>Search</button>
            {loading && <p>Loading....</p>}
            <div className="card">
                {ingredientList.map((item) => {
                    return (
                        <div className="Ingredient">
                            <span>{item.recipe.label}</span>
                            <img src={item.recipe.image} alt="" />
                            <div className="steps">
                                {item.recipe.ingredientLines.map((step) => {
                                    return (<p>{step}</p>)
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Main