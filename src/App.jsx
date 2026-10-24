import { useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes, useLocation, useSearchParams } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import AuthPage from "./pages/AuthPage";
import CreateEventPage from "./pages/CreateEventPage";
import EventDetailPage from "./pages/EventDetailPage";
import EventsPage from "./pages/EventsPage";
import GameDetailPage from "./pages/GameDetailPage";
import GamesPage from "./pages/GamesPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { EventProvider } from "./context/EventProvider";
import { useEvents } from "./context/useEvents";
import { games } from "./data";

function LegacyGameDetail() {
	const [searchParams] = useSearchParams();
	return <Navigate to={`/games/${searchParams.get("id") || "catan"}`} replace />;
}

function LegacyEventDetail() {
	const [searchParams] = useSearchParams();
	return <Navigate to={`/events/${searchParams.get("id") || "strategy-night"}`} replace />;
}

function AppRoutes() {
	const location = useLocation();
	const { events } = useEvents();
	const path = location.pathname;

	useEffect(() => {
		const titles = {
			"/": "Cari Teman Main Boardgame di Bandung | Kumple",
			"/games": "Katalog Game | Kumple",
			"/events": "Event | Kumple",
			"/events/new": "Buat Event Baru | Kumple",
			"/about": "Tentang Kumple",
			"/login": "Log In Kumple",
			"/register": "Register Kumple",
		};
		const gameMatch = path.match(/^\/games\/([^/]+)$/);
		const eventMatch = path.match(/^\/events\/([^/]+)$/);
		const game = gameMatch ? games.find((item) => item.id === gameMatch[1]) : null;
		const event = eventMatch ? events.find((item) => item.id === eventMatch[1]) : null;
		document.title = game ? `${game.name} | Detail Game | Kumple` : event ? `${event.title} | Kumple` : titles[path] || "Kumple";
	}, [events, path]);

	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/games" element={<GamesPage />} />
				<Route path="/games/:gameId" element={<GameDetailPage />} />
				<Route path="/events" element={<EventsPage />} />
				<Route path="/events/new" element={<CreateEventPage />} />
				<Route path="/events/:eventId" element={<EventDetailPage />} />
				<Route path="/about" element={<AboutPage />} />
				<Route path="/login" element={<AuthPage />} />
				<Route path="/register" element={<AuthPage isRegister />} />
				<Route path="/index.html" element={<Navigate to="/" replace />} />
				<Route path="/games.html" element={<Navigate to="/games" replace />} />
				<Route path="/events.html" element={<Navigate to="/events" replace />} />
				<Route path="/game-detail.html" element={<LegacyGameDetail />} />
				<Route path="/event-detail.html" element={<LegacyEventDetail />} />
				<Route path="/create-event.html" element={<Navigate to="/events/new" replace />} />
				<Route path="/about.html" element={<Navigate to="/about" replace />} />
				<Route path="/login.html" element={<Navigate to="/login" replace />} />
				<Route path="/register.html" element={<Navigate to="/register" replace />} />
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
			<Footer />
		</>
	);
}

export default function App() {
	return <BrowserRouter><EventProvider><AppRoutes /></EventProvider></BrowserRouter>;
}
