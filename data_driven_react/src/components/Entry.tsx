interface Prop {
  img: { alt: string; src: string };
  country: string;
  title: string;
  dates: string;
  googleMapsLink: string;
  text: string;
}

export default function Entry({ entry }: { entry: Prop }) {
  return (
    <article>
      <img className="img" alt={entry.img.alt} src={entry.img.src} />
      <div className="infos">
        <img alt="location logo" src="/location.png" />
        <span>{entry.country}</span>
        <a href={entry.googleMapsLink}>View on Google Maps</a>
        <h2 className="place">{entry.title}</h2>
        <h3 className="dates">{entry.dates}</h3>
        <p className="text">{entry.text}</p>
      </div>
    </article>
  );
}
