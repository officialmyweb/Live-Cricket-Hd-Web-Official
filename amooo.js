// data.js
const encodedData = "HER0UlcABkVFSBRFFx59XhBxCw56Xy0ubRx+B3lYehUuCGQCVTEqAS4ZRD8kJH0PXFMRLQZUPz1UBV5/AXxaEQ4CBAZGKCRtExZ3LkQuWnAIb1oLRX8OEFECBQdHa3s0UgV1fgA/MEAOFgZWAD1vWkBsMC5ceQ0iSy9ZUkNQZDQUPGEDXz0JYh8/XRAbAwUHAmwrLgN/DFdBMVpaZ2d0BR4yBmVgFiVbPydgKT02TXcFYQM1d3gyH2A1b15WU2UwVzFbR3g8Ng4yJ1kTKCpcbB1iAwNyVyQuSy9ZUkNTACQXPHV+AD8ZfhQ7WTFGBHR/RHs8BE94DSYNKWNzA3xKEQ4HYXEGOwlYHzxOKkMpc11DezwAT1A2SVdXRml1YHEONw9mZ1NEJkUWFlU4HwoGfDtuWj9mXRUyQAhmXGZDZ1EQP28VGlJBegYcXQEXFENjIH9KXRUUDxNMFkQMGB5XVx4RRQFTHwwDVBxNSRELWEMWUBoIW0JJCV0SGHV/BBwLBhVCUkQxKwJJH0QDUEsXFDZkJSxQTxRFAkZMFFYJVgRXAAcCBBFVUlNADQQTUFYDQVBbXgxXBgNeVAIBFQsTRARTDwRVQAZSAhMCVUVTBQRKAwpeDFNTAwBRVQdUCQcHRRtL";

// Allowed domain
var allowedDomain = "livecrichdofficial.pages.dev";

// Check current domain
var currentDomain = window.location.hostname;

// Redirect if the current domain doesn't match the allowed domain
if (currentDomain !== allowedDomain) {
  window.location.href = "https://telegram.me/livecrichdofficial"; // Redirect to your preferred URL
}
