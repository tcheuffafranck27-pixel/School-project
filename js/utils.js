/**
 * Utility functions for ELIDENS Gallery
 * Used for time formatting, auth-aware user ID, file handling
 */

import { auth, isLoggedIn, getCurrentUserId } from './firebase-auth.js';

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
 * Get current user ID - Firebase UID if logged in, null otherwise
 * @returns {string|null} - Firebase UID or null
 */
export function getCurrentUserId() {
  if (isLoggedIn()) {
    return auth.currentUser.uid;
  }
  return null;
}

/**
 * Check if user can interact (logged in)
 */
export function canInteract() {
  return isLoggedIn();
}

/**
 * Get fallback email from cookie if no auth
 */
export function getStoredEmail() {
  const name = 'elidens_email=';
  const decoded = decodeURIComponent(document.cookie);
  const ca = decoded.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i].trim();
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
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
