export default function Main() {
  return (
    <main>
      <div id="text">
        <label>
          Top text <br />
          <input type="text" placeholder="Top text" />
        </label>
        <br />
        <label>
          Bottom text <br />
          <input type="text" placeholder="Bottom text" />
        </label>
      </div>
      <button>Get a new meme image 🖼</button>
      <div
        id="img"
        style={{
          backgroundImage: 'url("/img.png")',
        }}
      >
        <p>SHUT UP</p>
        <p>AND TAKE MY MONEY</p>
      </div>
    </main>
  );
}
