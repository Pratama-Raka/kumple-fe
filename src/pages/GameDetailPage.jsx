import { Link, useParams } from "react-router-dom";
import { games } from "../data";

export default function GameDetailPage() {
  const { gameId } = useParams();
  const game = games.find((item) => item.id === gameId);
  if (!game)
    return (
      <main className="content-page">
        <p className="empty-state">
          Game tidak ditemukan. Kembali ke <Link to="/games">katalog game</Link>
        </p>
      </main>
    );

  return (
    <main className="game-detail-page">
      <div className="detail-wrap">
        <article className="detail-card grid grid-cols-1 items-start gap-12 max-[760px]:gap-6 lg:grid-cols-[320px_minmax(0,1fr)]">
          <figure className="game-image">
            <span
              className={`game-tile tile-${game.maxPlayers}`}
              title={`Maksimal ${game.maxPlayers} pemain`}
              aria-hidden="true"
            />
            <img src={game.image} alt={`Kotak game ${game.name}`} />
            <figcaption className="cover-caption">{game.caption}</figcaption>
          </figure>
          <div className="detail-info flex flex-col gap-5">
            <p className="eyebrow">Katalog game</p>
            <h1 className="detail-title">{game.name}</h1>
            <p className="detail-text">{game.description}</p>
            <dl className="facts grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-5">
              <div className="fact">
                <dt>Jumlah pemain</dt>
                <dd>
                  {game.minPlayers}-{game.maxPlayers} pemain
                </dd>
              </div>
              <div className="fact">
                <dt>Durasi main</dt>
                <dd>{game.duration}</dd>
              </div>
              <div className="fact">
                <dt>Kategori</dt>
                <dd>{game.category}</dd>
              </div>
              <div className="fact">
                <dt>Tingkat kesulitan</dt>
                <dd>{game.difficulty}</dd>
              </div>
              <div className="fact">
                <dt>Rating komunitas</dt>
                <dd>{game.communityRating}</dd>
              </div>
            </dl>
            <Link to={`/events?game=${game.id}`} className="btn btn-outline">
              Cari event yang mainkan game ini
            </Link>
          </div>
        </article>
      </div>
      <section className="reviews">
        <h2 className="section-title">Ulasan pemain</h2>
        <div className="review-list grid grid-cols-1 gap-7 max-[760px]:gap-5 md:grid-cols-2">
          {game.reviews.length ? (
            game.reviews.map((review) => (
              <article className="review-card" key={review.author}>
                <p className="review-text">“{review.text}”</p>
                <p className="review-author">- {review.author}</p>
              </article>
            ))
          ) : (
            <p className="empty-state">Belum ada ulasan untuk game ini.</p>
          )}
        </div>
      </section>
    </main>
  );
}
