import './Description.css'
function Description({name, recipe, ingredients}){
    // let name = "Naial";
    // let recipe = "Fried Shrimp";
    // let ingredients = ["shrimp", "breading", "olive oil", "seasonings"];
    return(
        <div>
            <h1 className="header">Author Name is {name}</h1>
            <h3>Name of Recipe is {recipe}</h3>
            <h3>Ingredients</h3>
            <ul>
                {ingredients.map(currentIngredient => <li>{currentIngredient}</li>)}
            </ul>
        </div>
    )
}

export default Description 