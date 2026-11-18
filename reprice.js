// Step 2: Confirm the price of the selected offer before payment.
export async function reprice(api, selected) {
  const priced = await api.post("/price", { offerId: selected.id });

  if (priced.totalAmount !== selected.totalAmount) {
    // Never change the price silently. Ask the traveller to confirm.
    return { changed: true, oldPrice: selected.totalAmount, newPrice: priced.totalAmount, priced };
  }
  // Show fare rules and baggage to the traveller before payment.
  return { changed: false, priced, fareRules: priced.fareRules };
}
