import { useState } from "react";
import GameCard from "../components/GameCard";
import { games } from "../data";

export default function GamesPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [players, setPlayers] = useState("");
  const filteredGames = games.filter((game) => {
    const nameMatches = game.name.toLowerCase().includes(search.toLowerCase());
    const categoryMatches =
      !category || game.category.toLowerCase() === category;
    const playersMatch =
      !players ||
      (players === "2"
        ? game.minPlayers <= 2 && game.maxPlayers >= 2
        : players === "3-4"
          ? game.minPlayers <= 4 && game.maxPlayers >= 3
          : game.maxPlayers >= 5);
    return nameMatches && categoryMatches && playersMatch;
  });

  return (
    <main>
      <h1 className="page-title">Katalog Game</h1>
      <form
        className="filter-form flex flex-wrap items-end justify-center gap-4 px-0 py-0 max-[1000px]:justify-start max-[760px]:items-stretch max-[760px]:gap-3"
        onSubmit={(event) => event.preventDefault()}
      >
        <div className="field field-search">
          <label className="field-label" htmlFor="game-search">
            Cari game
          </label>
          <input
            className="input"
            id="game-search"
            type="search"
            placeholder="Nama game..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>
        <div className="field">
          <label className="field-label" htmlFor="game-players">
            Jumlah pemain
          </label>
          <select
            className="input"
            id="game-players"
            value={players}
            onChange={(event) => setPlayers(event.target.value)}
          >
            <option value="">Semua</option>
            <option value="2">2 pemain</option>
            <option value="3-4">3-4 pemain</option>
            <option value="5+">5+ pemain</option>
          </select>
        </div>
        <div className="field">
          <label className="field-label" htmlFor="game-category">
            Kategori
          </label>
          <select
            className="input"
            id="game-category"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          >
            <option value="">Semua</option>
            <option value="strategy">Strategy</option>
            <option value="party">Party</option>
            <option value="family">Family</option>
          </select>
        </div>
        <output className="filter-count" aria-live="polite">
          {filteredGames.length} game ditemukan
        </output>
      </form>
      <section className="game-list grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {filteredGames.length ? (
          filteredGames.map((game) => <GameCard key={game.id} game={game} />)
        ) : (
          <p className="empty-state">
            Game tidak ditemukan. Coba ubah kata kunci atau filter.
          </p>
        )}
      </section>
    </main>
  );
}
