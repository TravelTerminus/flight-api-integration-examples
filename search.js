// Step 1: Search flights across GDS, NDC and low cost carrier content.
// Endpoint is a generic placeholder. Map it to your provider's API docs.
const API = "https://api.example-flight-provider.com";

export async function searchFlights(apiKey) {
  const res = await fetch(`${API}/search`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${apiKey}` },
    body: JSON.stringify({
      origin: "DEL",
      destination: "DXB",
      departureDate: "2026-12-20",
      adults: 2,
      cabin: "ECONOMY"
    })
  });
  const { offers } = await res.json();
  // Treat these prices as estimates. Always re-price before payment.
  return offers;
}
