import { MemoryRouter, Routes, Route } from "react-router";

import { Home } from "./Home.tsx";
import { About } from "./About.tsx";
import { Contact } from "./Contact.tsx";

export function App() {
  return (
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </MemoryRouter>
  );
}
