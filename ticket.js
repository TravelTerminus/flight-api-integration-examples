// Step 4: Issue the ticket after payment, safely retryable.
export async function issueTicket(api, bookingId, paymentId) {
  // Use the payment ID as an idempotency key so a retry never issues twice.
  return api.post("/ticket", { bookingId }, {
    headers: { "Idempotency-Key": paymentId }
  });
}
