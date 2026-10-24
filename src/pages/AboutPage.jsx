export default function AboutPage() {
  return (
    <main className="content-page">
      <section className="about-intro grid grid-cols-1 items-center gap-8 pt-0 md:grid-cols-[minmax(0,1fr)_360px] md:gap-12">
        <div>
          <h1 className="page-title page-title-short">Tentang Kumple</h1>
          <p className="about-lead">
            Kumple lahir dari masalah sederhana: susah cari teman untuk main
            boardgame di Bandung. Banyak yang punya koleksi game bagus tapi
            kehabisan teman main, atau ingin coba hobi baru tapi tidak tahu
            harus mulai dari mana.
          </p>
          <p className="about-lead">
            Kami percaya boardgame adalah cara terbaik untuk kumpul tanpa
            handphone, dan setiap orang harus punya akses mudah untuk menemukan
            komunitasnya.
          </p>
        </div>
        <div className="about-art" aria-hidden="true" />
      </section>
      <div className="about-boxes grid grid-cols-1 items-start gap-8 md:grid-cols-2 md:gap-12">
        <section>
          <h2 className="section-title">Venue Partner</h2>
          <ul className="venue-list">
            <li className="venue-tile">Kopi Session, Dago</li>
            <li className="venue-tile">Board &amp; Brew, Buah Batu</li>
          </ul>
        </section>
        <section>
          <h2 className="section-title">Hubungi Kami</h2>
          <address className="contact-card">
            Email: <a href="mailto:halo@kumple.id">halo@kumple.id</a>
            <br />
            Instagram: <a href="https://instagram.com/kumple.id">@kumple.id</a>
          </address>
        </section>
      </div>
    </main>
  );
}
