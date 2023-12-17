import { Base } from "./Base";
import { GetPeople } from "./GetPeople";

function App() {
  return <Base Child={<GetPeople />} />;
}

export default App;
