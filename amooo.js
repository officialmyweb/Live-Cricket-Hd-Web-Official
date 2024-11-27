// data.js
const encodedData = "HER0UlcABkVFSBRFFx59XhBxCw56Xy0ubRx+B3lYehUuCGQCVTEqAS4ZRD8kJH0PXFMRLQZUPz1UBV5/AXxaEQ4CBAZGKCRtExZ3LkQuWnAIb1oLRX8OEFECBQdHa3s0UgV1fgA/MEAOFgZWAD1vWkBsMC5ceQ0iSy9ZUkNQZDQUPGEDXz0JYh8/XRAbAwUHAmwrLgN/DF59PARGbWcCM1cyYQZkFiYGFhNOJTwCY3cFYT9We3sMH2A1Y3R5UFgKVzFbR3ETD1sWI2AlEzVxc0JhBRd7UzQuSy9ZUkNTACQXPHV+AD8ZfhQ7WTFGBHR/RHs8BE97HS4NKGNRBnxgEQ4HYXEGOwlYHzxOKgspXV0KeSwyTVA2SV0xaEQGW2MjMiNkYQQYWnIhHHUXQARxcQBBMi5mBDEhdCNOQUEHcl4/I38VGlJBegYcXQEXFENjIH9KXRUUDxNMFkQMGB5XVx4RRQFTHwwDVBxNSRELWEMWUBoIW0JJCV0SGHV/BBwLBhVCUkQxKwJJH0QDUEsXFDZkJSxQTxRFAkZMFFYJVgRXAAcCBBFVUlNADQQTUFYDQVBbXgxXBgNeVAIBFQsTRARTDwRVQAZSAhMCVUVTBQRKAwpeDFNTAwBRVQdUCQcHRRtL";

// Allowed domain
var allowedDomain = "livecrichdofficial.pages.dev";

// Check current domain
var currentDomain = window.location.hostname;

// Redirect if the current domain doesn't match the allowed domain
if (currentDomain !== allowedDomain) {
  window.location.href = "https://telegram.me/livecrichdofficial"; // Redirect to your preferred URL
}
