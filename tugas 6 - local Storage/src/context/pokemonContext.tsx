import React, {
  createContext,
  useContext,
  useReducer,
  useEffect,
  ReactNode,
} from "react";
import type { Pokemon } from "../types/pokemon";
import { fetchPokemon } from "../lib/api"; // ganti sesuai path kamu

type PokemonState = {
  pokemons: Pokemon[];
  loading: boolean;
  error: string | null;
};

type Action =
  | { type: "FETCH_START" }
  | { type: "FETCH_SUCCESS"; payload: Pokemon[] }
  | { type: "FETCH_ERROR"; payload: string };

const initialState: PokemonState = {
  pokemons: [],
  loading: false,
  error: null,
};

const PokemonContext = createContext<{
  state: PokemonState;
  dispatch: React.Dispatch<Action>;
}>({
  state: initialState,
  dispatch: () => null,
});

function reducer(state: PokemonState, action: Action): PokemonState {
  switch (action.type) {
    case "FETCH_START":
      return { ...state, loading: true, error: null };
    case "FETCH_SUCCESS":
      return { ...state, loading: false, pokemons: action.payload };
    case "FETCH_ERROR":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}

export const PokemonProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const loadPokemon = async () => {
      dispatch({ type: "FETCH_START" });
      try {
        const data = await fetchPokemon();
        dispatch({ type: "FETCH_SUCCESS", payload: data });
      } catch (err) {
        dispatch({ type: "FETCH_ERROR", payload: "Failed to fetch Pokémon" });
      }
    };

    loadPokemon();
  }, []);

  return (
    <PokemonContext.Provider value={{ state, dispatch }}>
      {children}
    </PokemonContext.Provider>
  );
};

export const usePokemon = () => useContext(PokemonContext);
