import cors from "cors";
import express from "express";

const app = express();

// Auth middleware
function checkAuth(req, res, next) {
  if (req.query["api-key"] === "12345") {
    next();
  } else {
    res.status(401).send("Access denied. Invalid API key.");
  }
}

const corsOptions = {
  origin: "http://127.0.0.1:5500",
};

const corsMiddleware = cors(corsOptions);

// Handle CORS preflight request for /movies
app.options("/movies", corsMiddleware);

// Protected route
app.get("/user", checkAuth, (req, res) => {
  res.send("Access granted to the protected route.");
});

// Public route
app.get("/", (req, res) => {
  res.send("Hello, World! Welcome to my Node.js app.");
});

// CORS-enabled route
app.get("/movies", corsMiddleware, (req, res) => {
  res.json([
    { id: 1, title: "Inception", director: "Christopher Nolan" },
    {
      id: 2,
      title: "The Matrix",
      director: "Lana Wachowski and Lilly Wachowski",
    },
    { id: 3, title: "Interstellar", director: "Christopher Nolan" },
    { id: 4, title: "The Godfather", director: "Francis Ford Coppola" },
    { id: 5, title: "Pulp Fiction", director: "Quentin Tarantino" },
  ]);
});

// Start server
app.listen(8080, (error) => {
  if (error) {
    console.error(error);
  } else {
    console.log("Server is running on port 8080");
  }
});
