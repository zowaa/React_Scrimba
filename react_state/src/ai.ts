import { HfInference } from "@huggingface/inference";

const SYSTEM_PROMPT = `You are an assistant that receives a list of ingredients that a
			user has and suggests a recipe they could make with some or all of those ingredients. 
			You don't need to use every ingredient they mention in your recipe. The recipe can include
			additional ingredients they didn't mention, but try not to include too many extra
			ingredients. Format your response in HTML tags to make it easier to render to a web page, 
			since I will display it in a section on a website. 

			Please structure your response as follows:
			<article>
				<p>[Intro paragraph about the recipe]</p>
				<h3>[Recipe Name]</h3>
				<strong>Ingredients:</strong>
				<ul>
					<li>[Ingredient 1]</li>
					<li>[Ingredient 2]</li>
					<!-- Add more ingredients as needed -->
				</ul>
				<strong>Instructions:</strong>
				<ol>
					<li>[Step 1]</li>
					<li>[Step 2]</li>
					<!-- Add more steps as needed -->
				</ol>
			</article>`;

const hf = new HfInference(import.meta.env.VITE_HF_KEY);

export default async function getRecipeFromMistral(ing_list: string[]) {
  const ingredientsString = ing_list.join(", ");
  try {
    const result = await hf.chatCompletion({
      model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        {
          role: "user",
          content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!`,
        },
      ],
      max_tokens: 1024,
    });
    return result.choices[0].message.content;
  } catch (err) {
    console.log(err);
  }
}
