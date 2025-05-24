# MERN Portfolio Website

A modern, responsive portfolio website built with the MERN stack (MongoDB, Express.js, React.js, Node.js).

## Features

- 🎨 Modern and responsive design using Tailwind CSS
- 🌓 Dark/Light mode toggle
- 🚀 Animated components using Framer Motion
- 📱 Mobile-first responsive design
- 📝 Dynamic project showcase with filtering
- 📄 Resume download and timeline view
- 📬 Contact form with email integration
- 🔄 Real-time updates with MongoDB

## Tech Stack

### Frontend
- React.js
- React Router
- Tailwind CSS
- Framer Motion
- React Icons

### Backend
- Node.js
- Express.js
- MongoDB
- Nodemailer
- JWT Authentication

## Project Structure

```
MERN_portfolio/
├── client/                 # React frontend
│   ├── public/
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── context/
│       ├── hooks/
│       └── utils/
└── server/                 # Express backend
    ├── config/
    ├── controllers/
    ├── models/
    ├── routes/
    └── utils/
```

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/MERN_portfolio.git
cd MERN_portfolio
```

2. Install dependencies
```bash
# Install backend dependencies
cd server
npm install

# Install frontend dependencies
cd ../client
npm install
```

3. Set up environment variables
- Create `.env` file in the server directory
- Add the following variables:
  ```
  PORT=5000
  MONGODB_URI=your_mongodb_uri
  JWT_SECRET=your_jwt_secret
  EMAIL_USER=your_email
  EMAIL_PASS=your_email_password
  ```

4. Start the development servers
```bash
# Start backend server (from server directory)
npm run dev

# Start frontend server (from client directory)
npm start
```

## License

MIT

## Contact

Your Name - your.email@example.com
Project Link: https://github.com/yourusername/MERN_portfolio 