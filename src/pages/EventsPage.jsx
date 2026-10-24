import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import EventList from "../components/EventList";
import EventSummary from "../components/EventSummary";
import { useEvents } from "../context/useEvents";
import { games } from "../data";

export default function EventsPage() {
  const { events } = useEvents();
  const [searchParams] = useSearchParams();
  const [venue, setVenue] = useState("");
  const [date, setDate] = useState("");
  const selectedGame = games.find(
    (game) => game.id === searchParams.get("game"),
  );
  const filteredEvents = events
    .filter(
      (event) =>
        (!venue || event.venue === venue) &&
        (!date || event.date === date) &&
        (!selectedGame || event.games?.includes(selectedGame.name)),
    )
    .sort((first, second) =>
      `${first.date}${first.time}`.localeCompare(
        `${second.date}${second.time}`,
      ),
    );

  return (
    <main className="events-page">
      <div className="page-head flex flex-wrap items-end justify-between gap-4 pt-10 pb-2 max-[760px]:pt-6">
        <h1 className="page-title page-title-short">Event Mendatang</h1>
        <Link to="/events/new" className="btn btn-yellow">
          Buat Event Baru
        </Link>
      </div>
      <form
        className="filter-form flex flex-wrap items-end justify-center gap-4 px-0 py-0 max-[1000px]:justify-start max-[760px]:items-stretch max-[760px]:gap-3"
        onSubmit={(event) => event.preventDefault()}
      >
        <div className="field">
          <label className="field-label" htmlFor="event-venue">
            Venue
          </label>
          <select
            className="input"
            id="event-venue"
            value={venue}
            onChange={(event) => setVenue(event.target.value)}
          >
            <option value="">Semua venue</option>
            <option value="kopi-session">Kopi Session, Dago</option>
            <option value="board-brew">Board &amp; Brew, Buah Batu</option>
          </select>
        </div>
        <div className="field">
          <label className="field-label" htmlFor="event-date">
            Tanggal
          </label>
          <input
            className="input"
            type="date"
            id="event-date"
            value={date}
            onChange={(event) => setDate(event.target.value)}
          />
        </div>
      </form>
      <EventSummary count={filteredEvents.length} />
      <EventList events={filteredEvents} />
    </main>
  );
}
