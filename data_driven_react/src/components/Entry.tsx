export default function Entry() {
  return (
    <div id="xx">
      <article>
        <img
          className="img"
          alt="location image"
          src="https://scrimba.com/links/travel-journal-japan-image-url"
        />
        <div className="infos">
          <img alt="location logo" src="/location.png" />
          <span>JAPAN</span>
          <a href="#">View on Google Maps</a>
          <h2 className="place">Mount Fuji</h2>
          <h3 className="dates">12 Jan, 2021 - 24 Jan, 2021</h3>
          <p className="text">
            Mount Fuji is the tallest mountain in Japan, standing at 3,776
            meters (12,380 feet). Mount Fuji is the single most popular tourist
            site in Japan, for both Japanese and foreign tourists.
          </p>
        </div>
      </article>
    </div>
  );
}
