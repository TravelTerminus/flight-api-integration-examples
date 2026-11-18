// Step 3: Create the booking (PNR) and store the ticketing time limit.
export async function createBooking(api, priced, passengers, contact) {
  const booking = await api.post("/book", { offerId: priced.id, passengers, contact });

  // Unticketed bookings expire. Track this deadline and act before it passes.
  return { bookingId: booking.id, pnr: booking.pnr, ticketBy: booking.ticketingTimeLimit };
}
