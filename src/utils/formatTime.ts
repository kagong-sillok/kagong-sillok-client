export function formatTime(timeString: string) {
  const [hours, minutes] = timeString.split(':');
  return `${hours}:${minutes}`;
}
