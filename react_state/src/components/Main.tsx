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
      <ul>
        {ingredients.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </main>
  );
}
