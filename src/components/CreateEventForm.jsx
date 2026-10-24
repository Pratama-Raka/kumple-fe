// Form input (controlled component) untuk menambah data event baru
import { useState } from "react";

export default function CreateEventForm({ onAddEvent }) {
  // State khusus untuk menampung input form sementara
  const [title, setTitle] = useState("");
  const [venueName, setVenueName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [capacity, setCapacity] = useState("");
  const [description, setDescription] = useState("");
  const [selectedGames, setSelectedGames] = useState([]);
  const [error, setError] = useState("");

  // Fungsi yang dijalankan saat tombol submit diklik
  const handleSubmit = (e) => {
    e.preventDefault();
    const numericCapacity = Number(capacity);
    if (
      !title.trim() ||
      !venueName ||
      !date ||
      !time ||
      !capacity ||
      selectedGames.length === 0
    ) {
      setError("Lengkapi semua detail dan pilih minimal satu game.");
      return;
    }
    if (numericCapacity < 2 || numericCapacity > 30) {
      setError("Jumlah slot harus antara 2 dan 30 peserta.");
      return;
    }
    if (date < new Date().toISOString().slice(0, 10)) {
      setError("Pilih tanggal hari ini atau setelahnya.");
      return;
    }

    const newEvent = {
      title: title.trim(),
      venueName,
      venue: venueName === "Kopi Session, Dago" ? "kopi-session" : "board-brew",
      date,
      time,
      description:
        description.trim() || "Detail acara akan dibagikan oleh host.",
      games: selectedGames,
      capacity: numericCapacity,
    };
    onAddEvent(newEvent);

    // Mengosongkan form kembali setelah berhasil disubmit
    setTitle("");
    setVenueName("");
    setDate("");
    setTime("");
    setCapacity("");
    setDescription("");
    setSelectedGames([]);
    setError("");
  };

  return (
    <div className="form-wrap mb-12">
      <form
        onSubmit={handleSubmit}
        className="form-card event-form flex flex-col gap-6 p-6 md:p-10 max-[760px]:p-6"
      >
        <h2 className="form-heading">Detail Event</h2>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="field md:col-span-2">
            <label htmlFor="title" className="field-label">
              Nama Event
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="input"
              placeholder="Misal: Main Catan Bareng"
              required
            />
          </div>

          <div className="field">
            <label htmlFor="venueName" className="field-label">
              Venue
            </label>
            <select
              id="venueName"
              value={venueName}
              onChange={(e) => setVenueName(e.target.value)}
              className="input"
              required
            >
              <option value="">Pilih venue...</option>
              <option value="Kopi Session, Dago">Kopi Session, Dago</option>
              <option value="Board & Brew, Buah Batu">
                Board & Brew, Buah Batu
              </option>
            </select>
          </div>

          <div className="field col-span-full">
            <label htmlFor="description" className="field-label">
              Deskripsi
            </label>
            <textarea
              id="description"
              rows="4"
              className="input"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Deskripsikan event"
            />
          </div>

          <div className="field">
            <label htmlFor="date" className="field-label">
              Tanggal
            </label>
            <input
              type="date"
              id="date"
              min={new Date().toISOString().slice(0, 10)}
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="input"
              required
            />
          </div>

          <div className="field">
            <label htmlFor="time" className="field-label">
              Waktu
            </label>
            <input
              type="time"
              id="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="input"
              required
            />
          </div>

          <div className="field">
            <label htmlFor="capacity" className="field-label">
              Jumlah Slot Peserta
            </label>
            <input
              type="number"
              id="capacity"
              min="2"
              max="30"
              value={capacity}
              onChange={(e) => setCapacity(e.target.value)}
              className="input"
              placeholder="Misal: 4"
              required
            />
          </div>
        </div>

        <fieldset className="game-picks flex flex-wrap gap-4 px-5 pt-3 pb-5">
          <legend>Game yang akan dimainkan</legend>
          {["Catan", "Ticket to Ride", "Codenames"].map((game) => (
            <label className="game-pick flex items-center gap-2.5" key={game}>
              <input
                type="checkbox"
                checked={selectedGames.includes(game)}
                onChange={(event) =>
                  setSelectedGames(
                    event.target.checked
                      ? [...selectedGames, game]
                      : selectedGames.filter((selected) => selected !== game),
                  )
                }
              />
              <span>{game}</span>
            </label>
          ))}
        </fieldset>

        {error && (
          <p className="form-error" role="alert">
            {error}
          </p>
        )}

        <button type="submit" className="btn btn-red self-start m-0 mt-2">
          Buat Event
        </button>
      </form>
    </div>
  );
}
