import { Link, useParams } from "react-router-dom";
import EventDetail from "../components/EventDetail";
import { useEvents } from "../context/useEvents";

export default function EventDetailPage() {
  const { eventId } = useParams();
  const { events, joinEvent } = useEvents();
  const event = events.find((item) => item.id === eventId);
  if (!event)
    return (
      <main className="content-page">
        <p className="empty-state">
          Event tidak ditemukan. Kembali ke{" "}
          <Link to="/events">daftar event</Link>.
        </p>
      </main>
    );
  return <EventDetail event={event} onJoin={() => joinEvent(event.id)} />;
}
