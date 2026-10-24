import { Link } from "react-router-dom";
import EventList from "../components/EventList";
import { useEvents } from "../context/useEvents";

export default function HomePage() {
  const { events } = useEvents();
  const today = new Date().toISOString().slice(0, 10);
  const upcoming = [...events]
    .filter((event) => event.date >= today)
    .sort((first, second) =>
      `${first.date}${first.time}`.localeCompare(
        `${second.date}${second.time}`,
      ),
    )
    .slice(0, 2);

  return (
    <main>
      <section className="hero">
        <p className="eyebrow">Komunitas boardgame Bandung</p>
        <h1 className="hero-title">
          Susah cari teman main boardgame di Bandung?
        </h1>
        <p className="hero-text">
          Kumple bantu kamu nemuin partner main dan gabung meetup di tempat
          favorit.
        </p>
        <div className="hero-actions">
          <Link to="/events" className="btn btn-yellow">
            Lihat Event Terdekat
          </Link>
          <Link to="/register" className="btn btn-outline">
            Register Sekarang
          </Link>
        </div>
      </section>
      <section className="why">
        <h2 className="section-title">Kenapa pakai Kumple</h2>
        <div className="why-grid grid gap-6 lg:grid-cols-3 lg:gap-10">
          <article>
            <h3 className="why-title">Join Main Bareng</h3>
            <p className="why-text">Cari meetup boardgame sekitar Bandung.</p>
          </article>
          <article>
            <h3 className="why-title">Koleksi Games</h3>
            <p className="why-text">
              Kenali game baru dan temukan yang cocok untuk mejamu.
            </p>
          </article>
          <article>
            <h3 className="why-title">Komunitas Terbuka</h3>
            <p className="why-text">
              Datang sendiri juga boleh. Selalu ada teman baru di meja.
            </p>
          </article>
        </div>
      </section>
      <section className="events home-events">
        <div className="section-heading">
          <h2 className="section-title">Event yang akan datang</h2>
          <Link className="text-link" to="/events">
            Lihat semua event <span aria-hidden="true">→</span>
          </Link>
        </div>
        {upcoming.length ? (
          <EventList events={upcoming} showSlotTile={false} />
        ) : (
          <p className="empty-state">Belum ada event mendatang.</p>
        )}
      </section>
    </main>
  );
}
