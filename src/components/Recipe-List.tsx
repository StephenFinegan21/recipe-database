import Link from "next/link"
import { IRecipeList, Recipe } from "../app/types/recipes";


export default async  function RecipeList(){
  //await new Promise((resolve) => setTimeout(resolve, 1000)) //to test skeleton loader
    const response = await fetch("https://dummyjson.com/recipes/?limit=10").then(
        (res) => res.json()
      );
    
      const { recipes }: IRecipeList = response;
    return(
        <ul>
        {recipes && recipes.map((recipe: Recipe) => (
          <li key={recipe.id} className="text-zinc-700 hover:text-zinc-900">
            <Link href={`/posts/${recipe.id}`}>{recipe.name}</Link>
          </li>
        ))}
      </ul>
    )
}