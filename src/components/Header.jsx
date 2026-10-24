import { Link, NavLink } from "react-router-dom";

const links = [
  ["index.html", "Beranda"],
  ["games.html", "Katalog Game"],
  ["events.html", "Event"],
  ["about.html", "Tentang"],
  ["login.html", "Log In"],
  ["register.html", "Register"],
];

const destinations = [
  "/",
  "/games",
  "/events",
  "/about",
  "/login",
  "/register",
];

export default function Header() {
  return (
    <header>
      <nav className="flex-row flex-wrap">
        <Link to="/" className="logo">
          Kumple
        </Link>
        <input type="checkbox" id="menu-toggle" className="peer sr-only" />
        <label htmlFor="menu-toggle" className="nav-toggle md:hidden">
          Menu
        </label>
        <ul className="nav-links hidden w-full flex-col gap-3 mt-3 peer-checked:flex md:mt-0 md:flex md:w-auto md:flex-row md:gap-6">
          {links.map(([, label], index) => (
            <li key={destinations[index]}>
              <NavLink to={destinations[index]} end={index === 0}>
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
