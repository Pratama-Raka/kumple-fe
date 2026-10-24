import { Link } from "react-router-dom";

// Menampilkan detail spesifik dari satu event ke dalam bentuk kartu
export default function EventCard({ event, showSlotTile = true }) {
  const remaining = Math.max(event.capacity - event.filled, 0);
  const isFull = remaining === 0;
  const formattedDate = new Intl.DateTimeFormat("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(`${event.date}T${event.time}`));

  return (
    <article className={`event-card pt-10 ${isFull ? "event-full" : ""}`}>
      {showSlotTile && !isFull && (
        <span
          className={`game-tile tile-${Math.min(remaining, 8)}`}
          title={`${remaining} slot tersisa`}
          aria-hidden="true"
        />
      )}
      <h2 className="event-title">
        <Link className="event-link" to={`/events/${event.id}`}>
          {event.title}
        </Link>
      </h2>
      <p className="event-venue">{event.venueName}</p>
      <p className="event-time">
        <time dateTime={`${event.date}T${event.time}`}>
          {formattedDate}, {event.time.replace(":", ".")}
        </time>
      </p>
      <p className="event-slots">
        {isFull ? "Penuh - " : `${remaining} slot tersisa - `}
        {event.filled} dari {event.capacity} slot terisi
      </p>
      <span
        className="slot-bar"
        style={{
          "--filled": `${Math.min((event.filled / event.capacity) * 100, 100)}%`,
        }}
      />
      <p className="event-game-list">Game: {(event.games || []).join(", ")}</p>
    </article>
  );
}
