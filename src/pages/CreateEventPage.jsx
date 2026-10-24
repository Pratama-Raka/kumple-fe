import { useNavigate } from "react-router-dom";
import CreateEventForm from "../components/CreateEventForm";
import { useEvents } from "../context/useEvents";

export default function CreateEventPage() {
  const { addEvent } = useEvents();
  const navigate = useNavigate();
  return (
    <main>
      <h1 className="page-title page-title-short">Buat Event Baru</h1>
      <CreateEventForm
        onAddEvent={(event) => {
          addEvent(event);
          navigate("/events");
        }}
      />
    </main>
  );
}
