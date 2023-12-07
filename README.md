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
  - Status Code: 200 OK
  - Content Type: application/json
  - Response Body:
  ```
  {
    "name": "Emmanuel Reyes",
    "email": "emmanuel.reyes28@gmail.com",
    "phone": "123-123-1234",
    "city": "Los Angeles",
    "state": "California"
  }
  ```

### Education

- Endpoint: [/education](https://emmanuels-resume-api.onrender.com/education)
- Description: retrieve educational background information
- HTTP Method: **GET**
- Request: no request parameters required
- Response:
  - Status Code: 200 OK
  - Content Type: application/json
  - Response Body:
  ```
  {
    "school": "University of California, Irvine",
    "degree": "Bachelor of Science",
    "major": "Informatics",
    "minor": "Management",
    "graduationYear": "2019"
  }
  ```

### Skills

- Endpoint: [/skills](https://emmanuels-resume-api.onrender.com/skills)
- Description: retrieve Emmanuel's technical and soft skills
- HTTP Method: **GET**
- Request: no request parameters required
- Response:
  - Status Code: 200 OK
  - Content Type: application/json
  - Response Body:
  ```
  {
    "programmingLanguages": [
    "JavaScript",
    "TypeScript",
    "Python",
    "Java",
    "C#"
    ],
    // ... other skills
  }
  ```

### Experience

- Endpoint: [/experience](https://emmanuels-resume-api.onrender.com/experience)
- Description: retrieve a list of Emmanuel's work experience
- HTTP Method: **GET**
- Request: no request parameters required
- Response:
  - Status Code: 200 OK
  - Content Type: application/json
  - Response Body:
  ```
  [
    {
        "company": "Abbott",
        "position": "Software Engineer",
        "location": "Sylmar, CA",
        "startDate": "February 2022",
        "endDate": "Present",
        "duties": [
        "Perform root cause analysis and identification of solutions to complex field issues in adherence to our Quality Systems regulations",
        // ... other duties]
    },
    // ... additional experience
  ]
  ```

### Projects

- Endpoint: [/projects](https://emmanuels-resume-api.onrender.com/projects)
- Description: retrieve a list of projects undertaken by Emmanuel
- HTTP Method: **GET**
- Request: no request parameters required
- Response:
  - Status Code: 200 OK
  - Content Type: application/json
  - Response Body:
  ```
  [
    {
        "title": "The Pre-Workout Insider",
        "description": "Here, you can discover new pre-workout products and share your own reviews based on your personal experiences. We provide detailed information about each pre-workout, including its benefits, caffeine content, and whether it features an open label or proprietary blend. Make informed decisions and find the perfect pre-workout to enhance your fitness journey.",
        "startDate": "March 2023",
        "endDate": "May 2023",
        "ongoing": false,
        "highlights": [
        "Server Side Rendering (SSR)",
        "REST API",
        "Dynamic Routes",
        "Database Models"
        ],
        "technologiesUsed": [
        "React",
        "Javascript",
        "Tailwind CSS",
        "MongoDB",
        "Next.js"
        ],
        "link": "https://the-pre-workout-insider.vercel.app/"
        },
    // ... additional projects
  ]
  ```
