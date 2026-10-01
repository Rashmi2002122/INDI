const configuredApiUrl = import.meta.env.VITE_API_BASE_URL?.trim();
const apiOrigin = configuredApiUrl || (import.meta.env.PROD ? 'https://indi-server.onrender.com' : '');

export const API_BASE = `${apiOrigin.replace(/\/+$/, '')}/api`;
