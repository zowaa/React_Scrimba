type args = {
  gotRecipe: () => void;
  ingredients: string[];
};

export default function IngredientsList({ gotRecipe, ingredients }: args) {
  return (
    <section className="ingredient_section">
      <h1>Ingredients on hands:</h1>
      <ul>
        {ingredients.map((item: string) => (
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
          <button onClick={gotRecipe}>Get a recipe</button>
        </div>
      )}
    </section>
  );
}
