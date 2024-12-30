import { useState, ChangeEvent } from "react";

export default function Main() {
  const [memeInfo, setMemeInfo] = useState({
    topText: "SHUT UP",
    bottomText: "AND TAKE MY MONEY",
    imageUrl: "/img.png",
  });

  function changeVal(e: ChangeEvent<HTMLInputElement>) {
    const { value, name } = e.currentTarget;
    setMemeInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <main>
      <div id="text">
        <label>
          Top text <br />
          <input
            name="topText"
            type="text"
            placeholder="Top text"
            onChange={changeVal}
            value={memeInfo.topText}
          />
        </label>
        <br />
        <label>
          Bottom text <br />
          <input
            name="bottomText"
            type="text"
            placeholder="Bottom text"
            onChange={changeVal}
            value={memeInfo.bottomText}
          />
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
