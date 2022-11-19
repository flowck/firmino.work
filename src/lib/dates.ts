export function formatDate(date: Date) {
  return Intl.DateTimeFormat("en-GB", { month: "short", day: "2-digit", year: "numeric" }).format(new Date(date));
}
