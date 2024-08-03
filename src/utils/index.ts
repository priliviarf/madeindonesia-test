export function clearSession() {
  window.sessionStorage.clear();
}

export function parseDate(date: Date) {
  const localeDateString = date ? new Date(date).toLocaleDateString() : null;

  return localeDateString;
}
