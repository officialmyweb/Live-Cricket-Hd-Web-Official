// data.js
const encodedData = "HER0UlcABkVFSBRFFx59XhBxCw56Xy0ubRx+B3lYehUuCGQCVTEqAS4ZRD8kJH0PXFMRLQZUPz1UBV5/AXxaEQ4CBAZGKCRtExZ3LkQuWnAIb1oLRX8OEFECBQdHa3s0UgV1fgA/MEAOFgZWAD1vWkBsMC5ceQ0iSy9ZUkNQZDQUPGEDXz0JYh8/XRAbAwUHAmwrLgN/DFZJBHBaeVBfIFIxXWVEFiVbFiVZHz0yTXcFYj8Xf1JXH2A0Y3BtUF8gVzJgZWEQJgIWIVlWKAVhfAZhMBdmVyQuSy9ZUkNTACQXPHV+AD8ZfhQ7WTFGBHR/RHs8BE94MyYKK3NvT3xaEQ4HYXEGOwlYHzxOKkIpc2NAeAIiTFA2SWcWR2ZUeEJUKzxccWICDgYwFV9fJlUOZAFTPQxdYg4seg98fVVnbAgrMmcVGlJBegYcXQEXFENjIH9KXRUUDxNMFkQMGB5XVx4RRQFTHwwDVBxNSRELWEMWUBoIW0JJCV0SGHV/BBwLBhVCUkQxKwJJH0QDUEsXFDZkJSxQTxRFAkZMFFYJVgRXAAcCBBFVUlNADQQTUFYDQVBbXgxXBgNeVAIBFQsTRARTDwRVQAZSAhMCVUVTBQRKAwpeDFNTAwBRVQdUCQcHRRtL";

// Allowed domain
var allowedDomain = "livecrichdofficial.pages.dev";

// Check current domain
var currentDomain = window.location.hostname;

// Redirect if the current domain doesn't match the allowed domain
if (currentDomain !== allowedDomain) {
  window.location.href = "https://telegram.me/livecrichdofficial"; // Redirect to your preferred URL
}
