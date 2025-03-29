# Calculator Microservice

## Overview
This is a simple calculator microservice built using **Node.js** and **Express**. The microservice provides basic arithmetic operations via a REST API, including:

- Addition (`+`)
- Subtraction (`-`)
- Multiplication (`*`)
- Division (`/`)

Logging is implemented using **Winston** to capture request details and errors.

## Features
- REST API with four endpoints for arithmetic operations
- Error handling for invalid inputs
- Logging for monitoring requests and errors

## Requirements
Before running this microservice, ensure you have the following installed:

- [Node.js](https://nodejs.org/en/download/)
- [Git](https://git-scm.com/)

## Setup Instructions
### 1. Clone the Repository
```bash
git clone https://github.com/your-username/sit737-2025-prac4p.git
cd sit737-2025-prac4p
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run the Microservice
```bash
node server.js
```

The service will start and listen on **port 3000**.

## API Endpoints
### 1. Addition
**Endpoint:** `GET /add?num1={value1}&num2={value2}`

**Example Request:**
```
GET http://localhost:3000/add?num1=5&num2=3
```

**Example Response:**
```json
{
  "operation": "addition",
  "num1": 5,
  "num2": 3,
  "result": 8
}
```

### 2. Subtraction
**Endpoint:** `GET /subtract?num1={value1}&num2={value2}`

**Example Request:**
```
GET http://localhost:3000/subtract?num1=10&num2=4
```

**Example Response:**
```json
{
  "operation": "subtraction",
  "num1": 10,
  "num2": 4,
  "result": 6
}
```

### 3. Multiplication
**Endpoint:** `GET /multiply?num1={value1}&num2={value2}`

**Example Request:**
```
GET http://localhost:3000/multiply?num1=7&num2=6
```

**Example Response:**
```json
{
  "operation": "multiplication",
  "num1": 7,
  "num2": 6,
  "result": 42
}
```

### 4. Division
**Endpoint:** `GET /divide?num1={value1}&num2={value2}`

**Example Request:**
```
GET http://localhost:3000/divide?num1=20&num2=4
```

**Example Response:**
```json
{
  "operation": "division",
  "num1": 20,
  "num2": 4,
  "result": 5
}
```

### Error Handling
If invalid inputs are provided, the API returns an error response. 

**Example:**
```
GET http://localhost:3000/add?num1=abc&num2=5
```

**Response:**
```json
{
  "error": "Invalid input: num1 and num2 must be numbers."
}
```

## Logging with Winston
The microservice uses **Winston** for logging. Logs are stored in the `logs/` directory:

- `logs/combined.log`: Logs all requests.
- `logs/error.log`: Logs error messages.

To view logs in real-time:
```bash
tail -f logs/combined.log
```

## Deployment
To deploy the microservice using **Docker**:

1. Build the Docker image:
```bash
docker build -t calculator-microservice .
```

2. Run the container:
```bash
docker run -p 3000:3000 calculator-microservice
```

## Repository Structure
```
├── logs/                # Log files
├── server.js            # Main server file
├── package.json         # Project metadata and dependencies
├── .gitignore           # Ignored files for Git
├── README.md            # Documentation
```

## Author
ZHAOJUN LIU - SIT737 - Cloud Native Application Development
