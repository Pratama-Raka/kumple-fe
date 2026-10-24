// Menampilkan ringkasan jumlah event atau pesan khusus jika data kosong
export default function EventSummary({ count }) {
  // Conditional rendering jika data belum ada
  if (count === 0) {
    return (
      <p className="empty-state">
        Belum ada data Event. Silakan buat event baru.
      </p>
    );
  }

  return (
    <p className="event-summary" aria-live="polite">
      Menampilkan {count} event mendatang
    </p>
  );
}
