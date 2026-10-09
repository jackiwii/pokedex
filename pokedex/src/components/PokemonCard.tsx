import { useState } from "react";
import type { Pokemon } from "../types/pokemon";
import PokemonCardModal from "../modals/PokemonCardModal";


type PokemonCardProps = {
    pokemon: Pokemon;
};

export default function PokemonCard({ pokemon }: PokemonCardProps) {
    
    const [isModalOpen, setModalOpen] = useState<boolean>(false);

    return(
        <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md"
        >
            <button
                type="button"
                aria-expanded={isModalOpen}
                onClick={() => setModalOpen(true)}
                className="flex w-full items-center gap-4 p-4 text-left"
                >
                <img
                    src={pokemon.image}
                    alt={pokemon.name}
                    className="h-24 w-24 rounded-xl bg-slate-100 object-contain"
                />
                <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-slate-500">
                        {pokemon.id}
                    </p>
                    <h2 className="text-xl font-bold capitalize text-slate-900">
                        {pokemon.name}
                    </h2>
                    <div className="mt-2 flex flex-wrap gap-2">
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
                <span aria-hidden="true" className="text-xl text-slate-500">
                    Details
                </span>
            </button>

            {isModalOpen && (
                <PokemonCardModal onClose={() => setModalOpen(false)} pokemon={pokemon} />
                )}
        </article>
    )
}