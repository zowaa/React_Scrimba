import { useState } from "react";
import ClaudeRecipe from "./ClaudeRecipe";
import IngredientsList from "./IngredientsList";
import getRecipeFromMistral from "../ai";

export default function Form() {
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [recipe, setRecipe] = useState<string>("");

  function addIng(formData: FormData) {
    const newIngredient = formData.get("ingredient");
    if (typeof newIngredient === "string")
      setIngredients((prev) => [...prev, newIngredient]);
  }

  async function got_recipe() {
    const recipe = await getRecipeFromMistral(ingredients);
    if (recipe != undefined) setRecipe(recipe);
    else setRecipe("No recipe found! Sorry");
  }

  return (
    <main>
      <form
        //@ts-expect-error disable action err
        action={addIng}
        id="form"
      >
        <input type="text" name="ingredient" placeholder="e.g. oregano" />
        <button>+ Add ingredient</button>
      </form>
      {ingredients.length != 0 && (
        <IngredientsList gotRecipe={got_recipe} ingredients={ingredients} />
      )}
      {recipe.length > 0 && <ClaudeRecipe recipe={recipe} />}
    </main>
  );
}
