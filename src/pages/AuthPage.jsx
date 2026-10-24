import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function AuthPage({ isRegister = false }) {
  const [message, setMessage] = useState("");
  const { pathname } = useLocation();
  const register = isRegister || pathname === "/register";
  return (
    <main className="content-page auth-page">
      <h1 className="page-title page-title-short">
        {register ? "Buat Akun Kumple" : "Log In ke Kumple"}
      </h1>
      <section className="auth grid grid-cols-1 items-center gap-x-16 gap-y-8 max-[760px]:gap-6 md:grid-cols-[minmax(0,480px)_1fr]">
        <form
          className="form-card flex flex-col gap-6 p-8 max-[760px]:gap-5 max-[760px]:px-6 max-[760px]:pb-6 max-[760px]:pt-10"
          onSubmit={(event) => {
            event.preventDefault();
            setMessage("Fitur akun belum terhubung ke layanan autentikasi.");
          }}
        >
          <span
            className={`game-tile ${register ? "tile-9" : "tile-1"}`}
            aria-hidden="true"
          />
          {register && (
            <div className="field">
              <label className="field-label" htmlFor="name">
                Nama lengkap
              </label>
              <input className="input" id="name" required />
            </div>
          )}
          <div className="field">
            <label className="field-label" htmlFor="email">
              Email
            </label>
            <input className="input" id="email" type="email" required />
          </div>
          <div className="field">
            <label className="field-label" htmlFor="password">
              Kata sandi
            </label>
            <input
              className="input"
              id="password"
              type="password"
              minLength={register ? 8 : undefined}
              required
            />
          </div>
          <button className="btn btn-red" type="submit">
            {register ? "Register" : "Log In"}
          </button>
          <p role="status" className="interaction-message">
            {message}
          </p>
        </form>
        <div
          className={`auth-art ${register ? "art-pieces" : "art-coins"}`}
          aria-hidden="true"
        />
        <p className="auth-switch col-span-full">
          {register ? "Sudah punya akun?" : "Belum punya akun?"}{" "}
          <Link to={register ? "/login" : "/register"}>
            {register ? "Log In di sini" : "Register di sini"}
          </Link>
        </p>
      </section>
    </main>
  );
}
