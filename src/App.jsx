import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootLayout from "../src/layout/RootLayout.jsx";
import Members from "./pages/Members.jsx";
import Apply from "./pages/Apply.jsx";
import Project from "./pages/Project.jsx";
import Login from "./pages/Login.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Members />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/project" element={<Project />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
