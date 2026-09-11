import {
  Route,
  Routes,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Collections from "./pages/Collections";
import BrandDetails from "./pages/BrandDetails";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Routes>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/collections"
            element={<Collections />}
          />

          <Route
            path="/brands/:id"
            element={<BrandDetails />}
          />

          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="/contact"
            element={<Contact />}
          />

        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;