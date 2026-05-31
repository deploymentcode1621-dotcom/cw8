/**
 * Format a date to readable string
 */
export function formatDate(date, options = {}) {
  const defaultOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
    ...options,
  };
  return new Date(date).toLocaleDateString("en-IN", defaultOptions);
}

/**
 * Format date to ISO string for inputs
 */
export function toInputDate(date = new Date()) {
  return new Date(date).toISOString().split("T")[0];
}

/**
 * Get minimum booking date (today + 1)
 */
export function getMinBookingDate() {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  return toInputDate(tomorrow);
}

/**
 * Get maximum booking date (today + 90 days)
 */
export function getMaxBookingDate() {
  const maxDate = new Date();
  maxDate.setDate(maxDate.getDate() + 90);
  return toInputDate(maxDate);
}

/**
 * Format time slot
 */
export function formatTimeSlot(time) {
  const [hours, minutes] = time.split(":");
  const h = parseInt(hours);
  const ampm = h >= 12 ? "PM" : "AM";
  const displayHour = h > 12 ? h - 12 : h === 0 ? 12 : h;
  return `${displayHour}:${minutes} ${ampm}`;
}
