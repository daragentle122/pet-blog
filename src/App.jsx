// src\App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Add Route here
import Layout from "./layouts/layout"
import Dogs from "./pages/Dogs";
import Home from "./pages/Home"
import Cats from "./pages/cats"
import About from "./pages/about"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="dogs" element={<Dogs />} />
          <Route path="cats" element={<Cats />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
