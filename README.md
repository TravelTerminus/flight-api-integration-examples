# Flight API Integration Examples for Online Travel Agencies

Example code showing the booking flow an online travel agency (OTA) needs when integrating a flight booking API:

1. **Search** flights across GDS, NDC and low cost carrier content
2. **Re-price** the selected offer before payment
3. **Book** and store the ticketing time limit
4. **Ticket** with an idempotency key so retries never issue twice
5. **Service** bookings: changes, cancellations and refunds

> The endpoints in these examples are generic placeholders (`api.example-flight-provider.com`). Map them to your provider's API documentation.

## Files

- `search.js`: flight search request
- `reprice.js`: price confirmation and price change handling
- `book.js`: booking creation and time limit tracking
- `ticket.js`: idempotent ticketing

## Checklist for OTA flight integrations

- Treat search prices as estimates; always re-price before payment
- Show fare rules and baggage before payment
- Track ticketing time limits for every unticketed booking
- Make ticketing idempotent
- Offer self service changes and refunds

## About

Maintained by [Travel Terminus](https://travelterminus.com). For a production API with live GDS, NDC and low cost fares, see the [flight booking API for online travel agencies](https://travelterminus.com/flight-api/online-travel-agencies).

## License

MIT
