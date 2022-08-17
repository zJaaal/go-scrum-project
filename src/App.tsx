import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router/pages/AppRouter";

function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
