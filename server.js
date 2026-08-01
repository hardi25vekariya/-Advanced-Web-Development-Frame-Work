const express = require("express");

const app = express();

const logger = require("./middleware/logger");
const validateJson = require("./middleware/validateJson");
const errorHandler = require("./middleware/errorHandler");

const taskRoutes = require("./routes/taskRoutes");

// Parse JSON
app.use(express.json());

// Global Logging Middleware
app.use(logger);

// Global JSON Validation Middleware
app.use(validateJson);

// Routes
app.use("/tasks", taskRoutes);

// 404 Handler
app.use((req, res) => {
    res.status(404).json({
        message: "Route Not Found"
    });
});

// Global Error Handler (must be last)
app.use(errorHandler);

const PORT = 5000;

app.listen(PORT, () => {

    console.log(`Server Running on Port ${PORT}`);

});