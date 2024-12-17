import { useState } from "react";

export default function Form() {
  const [ingredients, setIngredients] = useState<(string | null)[]>([]);

  function addIng(formData: FormData) {
    const newIngredient = formData.get("ingredient") as string | null;
    setIngredients((prev) => [...prev, newIngredient]);
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
        <section className="ingredient_section">
          <h1>Ingredients on hands:</h1>
          <ul>
            {ingredients.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          {ingredients.length > 3 && (
            <div className="get_recipe">
              <div className="container">
                <span className="p1">Ready for a recipe</span>
                <span className="p2">
                  Generate a recipe from your list of ingredients.
                </span>
              </div>
              <button>Get a recipe</button>
            </div>
          )}
        </section>
      )}
    </main>
  );
}
