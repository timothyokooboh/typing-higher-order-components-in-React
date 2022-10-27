import "./styles.css";
import HC from "./HC";
import Location from "./Location";
import Polymorphic from "./Polymorphic";

const LocationComponent = HC(Location);
export default function App() {
  return (
    <div className="App">
      <LocationComponent gender="male" location={{ name: "lagos" }} />
      <Polymorphic as="input" href="/" type="text"></Polymorphic>
    </div>
  );
}
