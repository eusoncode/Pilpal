// load .env data into process.env
require('dotenv').config();

// Web server config
const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const cookieSessionHelper = require('./cookie_session_helper'); // Import the generateRandomString function

// Set up cookie-session API
const sessionession = require('cookie-session');

//Use a cookie session to fetch and encrypt session
const key1 = cookieSessionHelper.generateRandomString(32);
const key2 = cookieSessionHelper.generateRandomString(32);

app.use(
  sessionession({
    name: "session",
    keys: [key1, key2], //Secret keys to protect session

    // Cookie Options
    maxAge: 7 * 24 * 60 * 60 * 1000, // Session duration in milliseconds (e.g., 24 hours)
  })
);

//Middleware
//app.use(cors());
app.use(
  cors({
    origin: 'http://localhost:3000', // Replace with the actual origin of your frontend
    credentials: true,
  })
);

// Handle preflight OPTIONS requests
app.options('*', cors());

app.use(express.json());
app.use(morgan('dev'));

//Define the port
const PORT = process.env.PORT || 8005;

// Routes for each resources
const supplementRoutes = require("./src/routes/supplementRoutes");
const userRoutes = require("./src/routes/userRoutes");
const user_supplementRoutes = require("./src/routes/user_supplementRoutes");

// // /supplement/endpoints
app.use("/supplements", supplementRoutes);
app.use("/user_supplements", user_supplementRoutes);

// /user/endpoints
app.use("/users", userRoutes);

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));