import { Link } from "react-router-dom";
import { games } from "../data";
import { formatEventDate } from "../utils";

export default function EventDetail({ event, onJoin }) {
  const remaining = Math.max(event.capacity - event.filled, 0);
  const isJoined = event.participants?.includes("Kamu");

  return (
    <main className="event-layout grid grid-cols-1 items-start gap-12 lg:grid-cols-[minmax(0,1fr)_360px]">
      <article className="detail-card">
        <span
          className={`game-tile tile-${Math.min(remaining || 1, 8)}`}
          aria-hidden="true"
        />
        <p className="eyebrow">{event.venueName}</p>
        <h1 className="detail-title">{event.title}</h1>
        <p className="detail-text">{event.description}</p>
        <dl className="facts grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-5 max-[760px]:grid-cols-2">
          <div className="fact">
            <dt>Lokasi</dt>
            <dd>{event.venueName}</dd>
          </div>
          <div className="fact">
            <dt>Waktu</dt>
            <dd>{formatEventDate(event.date, event.time)}</dd>
          </div>
          <div className="fact">
            <dt>Slot tersedia</dt>
            <dd>
              {remaining} dari {event.capacity} slot tersisa
              <span
                className="slot-bar"
                style={{
                  "--filled": `${(event.filled / event.capacity) * 100}%`,
                }}
              />
            </dd>
          </div>
          <div className="fact">
            <dt>Host</dt>
            <dd>{event.participants?.[0] || "Komunitas Kumple"}</dd>
          </div>
        </dl>
        <h2 className="detail-subtitle">Game yang akan dimainkan</h2>
        <ul className="game-chips list-none flex flex-wrap gap-3.5 p-0">
          {(event.games || []).map((name) => {
            const game = games.find((item) => item.name === name);
            return (
              <li key={name}>
                <Link
                  className="game-chip"
                  to={game ? `/games/${game.id}` : "/games"}
                >
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>
        <button
          className="btn btn-red"
          type="button"
          disabled={remaining === 0 || isJoined}
          onClick={onJoin}
        >
          {remaining === 0
            ? "Event Penuh"
            : isJoined
              ? "Kamu Sudah Terdaftar"
              : "Gabung Event Ini"}
        </button>
      </article>
      <section className="players">
        <h2 className="section-title">Peserta yang sudah gabung</h2>
        <ul className="player-list list-none grid gap-4 p-0">
          {(event.participants || []).map((participant) => (
            <li className="player" key={participant}>
              {participant}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
