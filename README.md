# RentalWHEELS 🚗🏍️

A vehicle rental booking app (Cars & Bikes) built with React + Vite + React Router.

## Features
- **Auth-gated booking flow** — Login (Name + Phone) required before browsing vehicles, viewing details, or booking. Session stored in `localStorage`.
- **Home page** — hero banner, stats bar, and featured vehicles section.
- **Vehicles listing** — search by name + filter by Car/Bike.
- **Wishlist** — save/unsave vehicles with a heart toggle; dedicated Wishlist page.
- **Booking (Details page)** — date validation (no past dates, end date must be after start date), auto-fills logged-in user's name & phone, live total price calculation.
- **My Bookings** — view your bookings (scoped to logged-in phone number), cancel a booking, download a PDF receipt (via `jspdf`).
- **404 page** for unknown routes.
- **Dark UI theme** throughout, using CSS variables for consistent colors.

## Tech Stack
React 19, Vite, React Router v7, jsPDF.

## Run locally
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```

## Deploy (GitHub Pages)
```bash
npm run deploy
```

## Notes
- Data (vehicles) is static, in `src/data/vehicles.jsx`.
- Bookings and wishlist are stored in `localStorage` (no backend/database).
- Login is a lightweight session (name + phone), not a real authentication system — good for a portfolio/demo project.
