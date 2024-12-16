interface Prop {
  img: { alt: string; src: string };
  country: string;
  title: string;
  dates: string;
  link: string;
  text: string;
}

export default function Entry(props: Prop) {
  return (
    <article>
      <img className="img" alt={props.img.alt} src={props.img.src} />
      <div className="infos">
        <img alt="location logo" src="/location.png" />
        <span>{props.country}</span>
        <a href={props.link}>View on Google Maps</a>
        <h2 className="place">{props.title}</h2>
        <h3 className="dates">{props.dates}</h3>
        <p className="text">{props.text}</p>
      </div>
    </article>
  );
}
