import { useEffect } from "react";
import type { Pokemon } from "../types/pokemon";

type PokemonCardModalProps = {
    onClose: () => void;
    pokemon: Pokemon;
}

export default function PokemonCardModal({onClose, pokemon}: PokemonCardModalProps) {

    useEffect(() => {
        function handleKeyDown(event: KeyboardEvent) {
            if (event.key === "Escape") {
                onClose()
            }
        }

        window.addEventListener("keydown", handleKeyDown)

        return () => {
            window.removeEventListener("keydown", handleKeyDown)
        }
    }, [onClose]);

    return (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
          onClick={onClose}
          data-testid="pokemon-modal-backdrop"
        >
            <section
                role="dialog"
                aria-modal="true"
                aria-labelledby="pokemon-modal-title"
                className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl"
                onClick={(event) => event.stopPropagation()}
            >
            <button
                type="button"
                aria-label="Close Pokémon details"
                onClick={onClose}
                className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-xl text-slate-600 transition hover:bg-slate-200 hover:text-slate-900"
            >
              ×
            </button>

            <div className="flex flex-col items-center text-center">
              <p className="text-sm font-medium text-slate-500">
                #{String(pokemon.id).padStart(3, "0")}
              </p>

              <img
                src={pokemon.image}
                alt={pokemon.name}
                className="h-40 w-40 object-contain"
              />

              <h2
                id="pokemon-modal-title"
                className="text-3xl font-bold capitalize text-slate-900"
              >
                {pokemon.name}
              </h2>

              <div className="mt-3 flex flex-wrap justify-center gap-2">
                {pokemon.types.map((type) => (
                  <span
                    key={type}
                    className="rounded-full bg-blue-100 px-3 py-1 text-sm capitalize text-blue-800"
                  >
                    {type}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-xl bg-slate-100 p-4 text-center">
                <p className="text-sm text-slate-500">Height</p>
                <p className="mt-1 text-lg font-semibold text-slate-900">
                  {pokemon.height / 10} m
                </p>
              </div>

              <div className="rounded-xl bg-slate-100 p-4 text-center">
                <p className="text-sm text-slate-500">Weight</p>
                <p className="mt-1 text-lg font-semibold text-slate-900">
                  {pokemon.weight / 10} kg
                </p>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="mb-3 font-semibold text-slate-900">
                Abilities
              </h3>

              <ul className="flex flex-wrap gap-2">
                {pokemon.abilities.map((ability) => (
                  <li
                    key={ability}
                    className="rounded-lg border border-slate-200 px-3 py-2 text-sm capitalize text-slate-700"
                  >
                    {ability.replace("-", " ")}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>
    )
}