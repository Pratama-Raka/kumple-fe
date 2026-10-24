// Container pembungkus untuk melakukan render list array menggunakan .map()
import EventCard from "./EventCard";

export default function EventList({ events, showSlotTile = true }) {
  if (events.length === 0) {
    return (
      <section className="event-list">
        <p className="empty-state">
          Belum ada event yang cocok. Coba ubah tanggal atau venue.
        </p>
      </section>
    );
  }

  return (
    <section className="event-list grid grid-cols-1 gap-x-7 gap-y-8 pt-5 px-16 pb-12 max-[1000px]:px-7 max-[760px]:px-6 max-[760px]:pt-6 max-[760px]:pb-10 md:grid-cols-2">
      {events.map((event) => (
        <EventCard
          key={event.id}
          event={event}
          showSlotTile={showSlotTile}
        />
      ))}
    </section>
  );
}
