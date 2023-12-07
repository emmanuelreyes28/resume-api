# Emmanuel's Resume API

Designed and developed a RESTful API to showcase various sections of my resume, including personal information, education, work experience, projects and skills.

## How It Was Built

- **Node.js** as the server-side runtime environment
- **Express.js** as the web app framework for efficient API creation and management
- **Mocha & Chai** testing frameworks to conduct comprehensive tests, guaranteeing the functionality of API endpoints

# Documentation

**Base URL:** https://emmanuels-resume-api.onrender.com/

> [!NOTE]
> Render spins down a free web service that goes 15 minutes without receiving inbound traffic. You may notice a delay.

## Endpoints

### Personal Information

- Endpoint: [/personalInfo](https://emmanuels-resume-api.onrender.com/personalInfo)
- Description: retrieve basic personal information
- HTTP Method: **GET**
- Request: no request parameters required
- Response:
  _ Status Code: 200 OK
  _ Content Type: application/json
  \_ Response Body:
  ```
  {
    "name": "Emmanuel Reyes",
    "email": "emmanuel.reyes28@gmail.com",
    "phone": "123-123-1234",
    "city": "Los Angeles",
    "state": "California"
  }
  ```
