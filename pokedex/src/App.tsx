
import SearchBar from './components/SearchBar'
import PokemonCard from './components/PokemonCard'
import { samplePokemon } from './data/pokemon'


export default function App() {
    return (
    <main className="min-h-screen bg-slate-100 px-4 py-10 text-slate-900">
        <div className='mx-auto max-w-4xl'>
            <header className='mb-10 text-center'>
                <p className='mb-2 font-semibold uppercase tracking-[0.2em] text-blue-600
'>
                    Pokedex
                </p>

                <h1 className='text-4xl font-extrabold tracking-tight sm:text-5xl'>
                    Pokemon Explorer
                </h1>

                <p className='mt-3 text-slate-600'>
                    Search and discover all about your favourite Pokémon.
                </p>
            </header>

            <section 
                aria-label="Search Pokémon" 
                className="mb-10 flex justify-center"
            >
                <SearchBar/>
            </section>

            <section aria-labelledby="results-heading">
                <div className="mb-4 flex items-center justify-between">
                    <h2 id="results-heading" className="text-2xl font-bold">
                        Search history
                    </h2>
                </div>
            </section>

            <section className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {samplePokemon.map((pokemon) => (
                    <PokemonCard key={pokemon.id} pokemon={pokemon} />
                ))}
            </section>
        </div>
    </main>
    )

}


