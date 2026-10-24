import { Link } from "react-router-dom";

export default function GameCard({ game }) {
  return (
    <article className={`game-card ${game.category.toLowerCase()}`}>
      <figure className="game-image">
        <span
          className={`game-tile tile-${game.maxPlayers}`}
          title={`Maksimal ${game.maxPlayers} pemain`}
          aria-hidden="true"
        />
        <img src={game.image} alt={`Kotak game ${game.name}`} />
      </figure>
      <h2 className="game-title">
        <Link className="game-link" to={`/games/${game.id}`}>
          {game.name}
        </Link>
      </h2>
      <p className="game-info">
        {game.minPlayers}-{game.maxPlayers} pemain | {game.duration} |{" "}
        <span className="game-tag">{game.category}</span>
      </p>
    </article>
  );
}
