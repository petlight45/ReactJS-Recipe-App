import React from 'react';




const RecipeList = ({recipe_list})=>{
	console.log(recipe_list)
	return (
		<div className="recipe-list py-3">
			{recipe_list.map((recipe)=>{
				return(
					<div className="recipe-wrapper media mb-3 card-custom py-3" key={recipe.recipe.Label}>
						<div className="image-wrapper">
							<img src={recipe.recipe.image} className="mr-3" alt="No image available" />
						</div>
					  <div className="media-body d-flex flex-column ml-3">
					    <h5 className="mt-0">{recipe.recipe.label}</h5>
					    <h6>Dietary Facts</h6>
					    <ul className="list-group px-2">
						  <li className="list-group-item py-1 px-1 my-0">{Math.round(recipe.recipe.calories)} Calories</li>
						  {recipe.recipe.dietLabels.map((label)=>{
						  	return (<li className="list-group-item py-1 px-1 my-0">{label}</li>)
						  	}
						  )}
						</ul>
						<a href={recipe.recipe.url} target="_blank" className="btn btn-warning align-self-end mt-2">Read More</a>
					  </div>
					</div>
				)
			})}
		</div>
	)
}

export default RecipeList;