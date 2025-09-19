# Expense Tracker

A full-stack expense and income tracker web application built with Node.js, Express, MongoDB, and React.

## Features
- User authentication (login/signup)
- Dashboard with summary of expenses and income
- Add, edit, and delete expenses and income
- Upload profile photo
- Data visualization (bar, pie, and line charts)
- Download expense/income details
- Responsive UI

## Technologies Used
- **Frontend:** React, Vite, Tailwind CSS
- **Backend:** Node.js, Express
- **Database:** MongoDB
- **Other:** Axios, Moment.js

## Folder Structure
```
backend/
  server.js
  models/
  controllers/
  routes/
  middleware/
  config/
frontend/
  expense-tracker/
    src/
      components/
      pages/
      context/
      utils/
```

## Getting Started

### Prerequisites
- Node.js
- npm or pnpm
- MongoDB (local or cloud)

### Backend Setup
```bash
cd backend
pnpm install # or npm install
# Set up .env with MongoDB URI and JWT secret
node run dev
```

### Frontend Setup
```bash
cd frontend/expense-tracker
pnpm install # or npm install
pnpm run dev # or npm run dev
```

## Environment Variables
- Backend: `.env` for MongoDB URI, JWT secret
- Frontend: `.env` for API base URL

## Usage
- Register and log in
- Add expenses and income
- View dashboard and charts
- Download data

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
MIT
