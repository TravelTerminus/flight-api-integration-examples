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

## Articles

### For Online Travel Agencies (OTAs)
- [How Online Travel Agencies Build Flight Booking with an API: Search, Reprice, Book and Ticket](https://dev.to/travelterminus/how-online-travel-agencies-build-flight-booking-with-an-api-search-re-price-book-and-ticket-4kfi) (dev.to)
- [How to Choose a Flight Booking API for Your OTA](https://travelterminus-api.blogspot.com/2026/11/how-to-choose-flight-booking-api-ota.html) (Blogger)
- [How to Launch a Flight Booking Website for Your Travel Agency](https://travelterminus.wordpress.com/2026/11/18/how-to-launch-a-flight-booking-website-for-your-travel-agency-a-step-by-step-guide-for-2026/) (WordPress)
- [7 Questions Every Online Travel Agency Should Ask Before Choosing a Flight API](https://www.tumblr.com/travelterminus/833620505676349440/7-questions-every-online-travel-agency-should-ask) (Tumblr)
- [One Inventory, Every Channel: How OTAs Will Sell Flights on Web, App and WhatsApp in 2027](https://medium.com/@info_24143/one-inventory-three-channels-how-otas-will-sell-flights-on-web-app-and-whatsapp-in-2027-960b3a6c2745) (Medium)

### For Corporate Travel (B2E)
- [Building a Policy Aware Flight Booking Flow for Corporate Travel: A Developer's Guide](https://dev.to/travelterminus/building-a-policy-aware-flight-booking-flow-for-corporate-travel-b2e-a-developers-guide-4lgm) (dev.to)
- [Online Booking Tool vs Corporate Travel API: Which Is Right for Your Company?](https://travelterminus-api.blogspot.com/2026/11/online-booking-tool-vs-corporate-travel-api.html) (Blogger)
- [Why Employees Still Book Business Flights Outside Company Tools](https://travelterminus.substack.com/p/why-employees-book-flights-outside-company-toolstside-company-tools) (Substack)

### More
- [Travel Terminus on Weebly](https://travelterminus.weebly.com/)
- [Flight API integration examples](https://github.com/TravelTerminus/flight-api-integration-examples)
