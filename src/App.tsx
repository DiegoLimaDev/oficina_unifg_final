import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { GlobalStyles } from "@mui/material";

function App() {
  return (
    <>
      <GlobalStyles styles={{ margin: 0, padding: 0, fontSize: "62.5%" }} />
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path="/" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
