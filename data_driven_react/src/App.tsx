import Navbar from "./components/Navbar";
import Entry from "./components/Entry";
import data from "./data";

export default function App() {
  return (
    <>
      <Navbar />
      <div id="main">
        {data.map((info) => (
          <Entry
            key={info.id}
            img={{
              alt: info.img.alt,
              src: info.img.src,
            }}
            country={info.country}
            title={info.title}
            dates={info.dates}
            link={info.googleMapsLink}
            text={info.text}
          />
        ))}
      </div>
    </>
  );
}
