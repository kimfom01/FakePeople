import { Base } from "./Base";
import { GetPeople } from "./GetPeople";

const App = () => {
  return <Base child={<GetPeople />} />;
};

export default App;
