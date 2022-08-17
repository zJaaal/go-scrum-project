import { AnimatePresence } from "framer-motion";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router/pages/AppRouter";

function App() {
  return (
    <BrowserRouter>
      <AnimatePresence>
        <AppRouter />
      </AnimatePresence>
    </BrowserRouter>
  );
}

export default App;
