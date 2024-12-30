import { useState } from "react";

export default function Main() {
  const [memeInfo, setMemeInfo] = useState({
    topText: "SHUT UP",
    bottomText: "AND TAKE MY MONEY",
    imageUrl: "/img.png",
  });

  return (
    <main>
      <div id="text">
        <label>
          Top text <br />
          <input name="top" type="text" placeholder="Top text" />
        </label>
        <br />
        <label>
          Bottom text <br />
          <input name="bottom" type="text" placeholder="Bottom text" />
        </label>
      </div>
      <button>Get a new meme image 🖼</button>
      <div
        id="img"
        style={{
          backgroundImage: `url(${memeInfo.imageUrl})`,
        }}
      >
        <p>{memeInfo.topText}</p>
        <p>{memeInfo.bottomText}</p>
      </div>
    </main>
  );
}
