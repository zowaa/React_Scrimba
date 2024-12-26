import parse from "html-react-parser";

export default function ClaudeRecipe({ recipe }: { recipe: string }) {
  return (
    <section className="recipe_section">
      <h2>Chef AI suggest:</h2>
      {parse(recipe)}
    </section>
  );
}
