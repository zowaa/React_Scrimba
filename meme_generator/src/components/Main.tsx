import { useState, ChangeEvent, useEffect } from "react";

interface Meme {
  id: string;
  name: string;
  url: string;
  width: number;
  height: number;
  box_count: number;
}

export default function Main() {
  const [memeInfo, setMemeInfo] = useState({
    topText: "SHUT UP",
    bottomText: "AND TAKE MY MONEY",
    imageUrl: "/img.png",
  });

  const [fetchedMemes, setFetchedMemes] = useState<Meme[]>([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((res) => setFetchedMemes(res.data.memes));
  }, []);

  function changeVal(e: ChangeEvent<HTMLInputElement>) {
    const { value, name } = e.currentTarget;
    setMemeInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function getRandImg() {
    const num = Math.floor(Math.random() * 100);
    setMemeInfo((prev) => ({
      ...prev,
      imageUrl: fetchedMemes[num].url,
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
      <button onClick={getRandImg}>Get a new meme image 🖼</button>
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
