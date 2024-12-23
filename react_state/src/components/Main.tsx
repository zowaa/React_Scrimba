import { useState } from "react";
import ClaudeRecipe from "./ClaudeRecipe";
import IngredientsList from "./IngredientsList";

export default function Form() {
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [recipeShown, setRecipeShown] = useState(false);

  function addIng(formData: FormData) {
    const newIngredient = formData.get("ingredient");
    if (typeof newIngredient === "string")
      setIngredients((prev) => [...prev, newIngredient]);
  }

  function got_recipe() {
    setRecipeShown((prev) => !prev);
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
      {recipeShown && <ClaudeRecipe />}
    </main>
  );
}
