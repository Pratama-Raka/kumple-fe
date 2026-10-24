import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <main className="content-page">
      <p className="empty-state">
        Halaman tidak ditemukan. Kembali ke <Link to="/">beranda</Link>.
      </p>
    </main>
  );
}
