const express = require("express");
const winston = require("winston");

const app = express();
const port = 3000;

// Configure Winston Logger
const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  defaultMeta: { service: "calculator-microservice" },
  transports: [
    new winston.transports.Console({ format: winston.format.simple() }),
    new winston.transports.File({ filename: "logs/error.log", level: "error" }),
    new winston.transports.File({ filename: "logs/combined.log" }),
  ],
});

// Middleware to parse query parameters
app.use(express.json());

// Function to perform calculations
const calculate = (num1, num2, operation) => {
  switch (operation) {
    case "add":
      return num1 + num2;
    case "subtract":
      return num1 - num2;
    case "multiply":
      return num1 * num2;
    case "divide":
      if (num2 === 0) {
        throw new Error("Cannot divide by zero");
      }
      return num1 / num2;
    default:
      throw new Error("Invalid operation");
  }
};

// Middleware for logging requests
app.use((req, res, next) => {
  logger.info(`Incoming request: ${req.method} ${req.url}`);
  next();
});

// Route handlers for calculator operations
app.get("/:operation", (req, res) => {
  const { num1, num2 } = req.query;
  const operation = req.params.operation;

  if (!num1 || !num2 || isNaN(num1) || isNaN(num2)) {
    logger.error("Invalid input parameters");
    return res.status(400).json({ error: "Invalid input parameters" });
  }

  try {
    const result = calculate(parseFloat(num1), parseFloat(num2), operation);
    logger.info(
      `Operation: ${operation}, Num1: ${num1}, Num2: ${num2}, Result: ${result}`
    );
    res.json({ operation, num1, num2, result });
  } catch (error) {
    logger.error(error.message);
    res.status(400).json({ error: error.message });
  }
});

// Start the server
app.listen(port, () => {
  logger.info(`Calculator microservice running on http://localhost:${port}`);
});
