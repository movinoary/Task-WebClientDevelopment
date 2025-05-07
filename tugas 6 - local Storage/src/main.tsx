import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { PokemonProvider } from "./context/pokemonContext";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PokemonProvider>
      <App />
    </PokemonProvider>
  </StrictMode>
);
