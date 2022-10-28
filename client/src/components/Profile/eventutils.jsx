const eventGuid = 0;
const todayStr = new Date().toISOString(); // YYYY-MM-DD of today

export function createEventId() {
  return String(eventGuid + 1);
}

export const INITIAL_EVENTS = [
  {
    id: createEventId(),
    title: 'All-day event',
    start: todayStr,
  },
  {
    id: createEventId(),
    title: 'Timed event',
    start: `${todayStr} 12:00:00`,
  },
];
