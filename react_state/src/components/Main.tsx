import { useState, FormEvent } from "react";

export default function Form() {
  const [ingredients, setIngredients] = useState<(string | null)[]>([]);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newIngredient = formData.get("ingredient") as string | null;
    setIngredients((prev) => [...prev, newIngredient]);
  }

  return (
    <main>
      <form onSubmit={handleSubmit} id="form">
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
