import { Context } from "./context/Context";
import { MainRoute } from "./routes/MainRoute";
import store from "./store";

function App() {
  return (
    <>
      <Context.Provider value={store}>
        <MainRoute />
      </Context.Provider>
    </>
  );
}

export default App;
