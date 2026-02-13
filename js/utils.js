/**
 * Utility functions for ELIDENS Gallery
 * Used for time formatting, user creation, and file handling
 */

/**
 * Converts a timestamp to a human-readable "time ago" string
 * @param {Date|number} date - The date or timestamp to convert
 * @returns {string} - e.g. "just now", "5 min ago", "2 hours ago"
 */
export function getTimeAgo(date) {
  const seconds = Math.floor((new Date() - date) / 1000);

  if (seconds < 60) return "just now";

  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return minutes + " min ago";

  const hours = Math.floor(minutes / 60);
  if (hours < 24) return hours + " hour" + (hours > 1 ? "s" : "") + " ago";

  const days = Math.floor(hours / 24);
  return days + " day" + (days > 1 ? "s" : "") + " ago";
}

/**
 * Creates a unique anonymous user ID for commenting
 * @returns {string} - e.g. "Anonymous_abc123xyz"
 */
export function createUser() {
  return "Anonymous_" + Math.random().toString(36).substr(2, 9);
}

/**
 * Converts a File object to a base64 Data URL (for uploading to Firebase)
 * @param {File} file - The file to convert (image or video)
 * @returns {Promise<string>} - The data URL string
 */
export function fileToDataURL(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
  });
}
