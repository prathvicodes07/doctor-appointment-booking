# Doctor Booking

A simple doctor appointment booking project made with React, Vite and Supabase.

## Pages

- Home
- Doctors
- Book Appointment
- Booking History

## Supabase setup

Open Supabase SQL Editor and run the code from `supabase.sql`. It creates the `appointments` table and the simple permissions needed for booking and viewing appointments.

The Supabase URL and key are already placed in `src/supabase.js` to follow the same style as the reference project.

## Run

```bash
npm install
npm run dev
```


## If you see a 404 for /appointments

This means the `appointments` table has not been created in Supabase yet.
Open Supabase SQL Editor and run `supabase.sql`.

The project also has a simple browser fallback. If Supabase is not ready, a booking is saved in the browser so the demo still works.
