import Navbar from "./components/Navbar";
import Entry from "./components/Entry";
import data from "./data";

export default function App() {
  return (
    <>
      <Navbar />
      <div id="main">
        {data.map((info) => (
          <Entry key={info.id} entry={info} />
        ))}
      </div>
    </>
  );
}
