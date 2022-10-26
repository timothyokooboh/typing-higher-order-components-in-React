import "./styles.css";
import HC from "./HC";
import Location from "./Location";

const LocationComponent = HC(Location);
export default function App() {
  return (
    <div className="App">
      <LocationComponent gender="male" location={{ name: "lagos" }} />
    </div>
  );
}
