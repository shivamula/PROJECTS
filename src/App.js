import { Loading } from "./Components/Loading";
import { Tour } from "./Components/Tour";
import { Tours } from "./Components/Tours";

function App() {
  return (
    <div className="App">
      <Tour />
      <Tours />
      <Loading />
    </div>
  );
}

export default App;
