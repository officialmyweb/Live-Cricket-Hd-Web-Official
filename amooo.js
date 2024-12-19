// data.js
const encodedData = "HER0UlcABkVFSBRFFx59XhBxCw56Xy0ubRx+B3lYehUuCGQCVTEqAS4ZRD8kJH0PXFMRLQZUPz1UBV5/AXxaEQ4CBAZGKCRtExZ3LkQuWnAIb1oLRX8OEFECBQdHa3s0UgV1fgA/MEAOFgZWAD1vWkBsMC5ceQ0iSy9ZUkNQZDQUPGEDXz0JYh8/XRAbAwUHAmwrLgN/DFZtNW9eVmN0BR4yB1NkFiYGPydZEyI2TXcFYTAXf1MiH2A1WlpWY3YKVzJYR3w/NUcTIVkPKAZbYERiPQNUVDQuSy9ZUkNTACQXPHV+AD8ZfhQ7WTFGBHR/RHs8BE94My5PK3N3TX9KEQ4HYXEGOwlYHzxOKkIpY11AeywqBlA2SVtLB3EEAFENKB5zX1UGVgc+KnYzAwB/RUN9EgB5XiYxfV9hUn4CZDwdCA4VGlJBegYcXQEXFENjIH9KXRUUDxNMFkQMGB5XVx4RRQFTHwwDVBxNSRELWEMWUBoIW0JJCV0SGHV/BBwLBhVCUkQxKwJJH0QDUEsXFDZkJSxQTxRFAkZMFFYJVgRXAAcCBBFVUlNADQQTUFYDQVBbXgxXBgNeVAIBFQsTRARTDwRVQAZSAhMCVUVTBQRKAwpeDFNTAwBRVQdUCQcHRRtL";

// Allowed domain
var allowedDomain = "livecrichdofficial.pages.dev";

// Check current domain
var currentDomain = window.location.hostname;

// Redirect if the current domain doesn't match the allowed domain
if (currentDomain !== allowedDomain) {
  window.location.href = "https://telegram.me/livecrichdofficial"; // Redirect to your preferred URL
}
