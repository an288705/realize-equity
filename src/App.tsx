import "./App.css";
import { UserModel } from "./models/UserModel";
import { UserContext } from "./controllers/contexts";
import RoutesProvider from "./configs/RoutesProvider";

function App() {
  const user = new UserModel();
  
  return (
    <UserContext.Provider value={user}>
      <RoutesProvider />
    </UserContext.Provider>
  );
}

export default App;
