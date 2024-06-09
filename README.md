# WILD OASIS

"Wild Oasis" is a small boutique hotel with 8 luxurious wooden cabins. They need a custom-built application to manage everything about the hotel: bookings, cabins and guests.
This is the internal application usied inside the hotel to check in guests as they arrive.

This project has been created for learing purposes only.

**Live Project:** [wild-oasis-murex.vercel.app/](https://wild-oasis-murex.vercel.app/)

## Table of Contents

- [Business Requirements](#business-requirements)
- [Technologies](#technologies)
- [Installation](#installation)

## Business Requirements

**AUTHENTICATION**

- Users of the app are hotel employees. They need to be logged into the application to perform tasks.
- New users can only be signed up inside the applications (to guarantee that only actual hotel employees can get accounts).
- Users should be able to upload an avatar, and change their name and password.

**CABINS**

- App needs a table view with all cabins, showing the cabin photo, name, capacity, price, and current discount.
- Users should be able to update or delete a cabin, and to create new cabins (including uploading a photo).

**BOOKINGS**

- App needs a table view with all bookings, showing arrival and departure dates, status, and paid amount, as well as cabin and guest data. The booking status can be "Unconfirmed" (booked but not yet checked in), "checked in", or "checked out". The table should be filterable by this important status.
- Other booking data includes: number of guests, number of nights, guest observations, whether they booked breakfast, breakfast price.

**CHECK IN/OUT**

- Users should be able to delete, check in, or check out a booking as the guest arrives (no editing necessary for now). Bookings may not have been paid yet on guest arrival. Therefore, on check in, users need to accept payment (outside the app), and then confirm that payment has been received (inside the app).
- On check in, the guest should have the ability to add breakfast for the entire stay, if they hadn't already.

**GUESTS**

- Guest data should contain: full name, email, national ID, nationality, and a country flag for easy identification.

**DASHBOAD**

- The initial app screen should be a dashboard, to display important information for the last 7, 30, or 90 days:
  - A list of guests checking in and out on the current day. Users should be able to perform these tasks from here.
  - Statistics on recent bookings, sales, check ins, and occupancy rate.
  - A chart showing all daily hotel sales, showing both "total" sales and "extras" sales (only breakfast at the moment).
  - A chart showing statistics on stay durations, as this is an important metric for the hotel.

**SETTINGS**

- Users should be able to define a few application-wide settings: breakfast price, min and max nights/booking, max guests/booking.
- App needs a dark mode.

## Technologies

- [Client-Side Rendering (CSR) with React](https://reactjs.org/docs/create-a-new-react-app.html)
- Routing: [React Router](https://reactrouter.com/)
- Styling: [styled components](https://styled-components.com/)
- Remote State Management: [React Query](https://react-query.tanstack.com/)
- UI State Management: [Context API](https://reactjs.org/docs/context.html)
- Form Management: [React Hook Form](https://react-hook-form.com/)

**Other Tools:**

- React icons: [https://react-icons.github.io/react-icons/](https://react-icons.github.io/react-icons/)
- React hot toast: [https://react-hot-toast.com/](https://react-hot-toast.com/)
- Recharts: [https://recharts.org/](https://recharts.org/)
- date-fns: [https://date-fns.org/](https://date-fns.org/)
- Supabase: [https://supabase.io/](https://supabase.io/)

## Installation

Instructions on how to install and set up your project.

## Installation

To install and set up the project, follow these steps:

1. Clone the repository to your local machine:

```bash
git clone https://github.com/your-username/your-repo.git
```

2. Navigate to the project directory:

```bash
cd your-repo
```

3. Install the dependencies using npm or yarn:

```bash
npm install
```

or

```bash
yarn install
```

4. Create a `.env` file in the root directory of the project and add the necessary environment variables. You can refer to the `.env.example` file for the required variables.

5. Start the development server:

```bash
npm start
```

or

```bash
yarn start
```

Make sure you have Node.js and npm (or yarn) installed on your machine before proceeding with the installation.

Note: The project dependencies and versions are specified in the `package.json` file. You can use the package manager of your choice (npm or yarn) to install them.
