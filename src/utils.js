export function formatEventDate(date, time) {
  const dateText = new Intl.DateTimeFormat("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(`${date}T${time}`));
  return `${dateText}, ${time.replace(":", ".")}`;
}