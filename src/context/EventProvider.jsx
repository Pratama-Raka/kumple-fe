import { useState } from "react";
import { seedEvents } from "../data";
import { EventContext } from "./EventContext";

const storageKey = "kumple-events-v1";

function loadEvents() {
  try {
    const savedEvents = JSON.parse(localStorage.getItem(storageKey));
    return Array.isArray(savedEvents) ? savedEvents : seedEvents;
  } catch {
    return seedEvents;
  }
}

export function EventProvider({ children }) {
  const [events, setEvents] = useState(loadEvents);

  function saveEvents(nextEvents) {
    setEvents(nextEvents);
    try {
      localStorage.setItem(storageKey, JSON.stringify(nextEvents));
    } catch {
      // Keep the current session usable when browser storage is unavailable.
    }
  }

  function addEvent(eventData) {
    const event = {
      ...eventData,
      id: `event-${crypto.randomUUID()}`,
      filled: 1,
      participants: ["Kamu (Host)"],
    };
    saveEvents([...events, event]);
    return event;
  }

  function joinEvent(eventId) {
    const event = events.find((item) => item.id === eventId);
    if (
      !event ||
      event.filled >= event.capacity ||
      event.participants?.includes("Kamu")
    )
      return;
    saveEvents(
      events.map((item) =>
        item.id === eventId
          ? {
              ...item,
              filled: item.filled + 1,
              participants: [...(item.participants || []), "Kamu"],
            }
          : item,
      ),
    );
  }

  return (
    <EventContext.Provider value={{ events, addEvent, joinEvent }}>
      {children}
    </EventContext.Provider>
  );
}
