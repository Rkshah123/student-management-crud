# Student Manager

A simple and professional **Student Management System** built using HTML, CSS, and JavaScript with a REST API for storing and managing student records.

##  Features

* Add new students
* View all students
* Edit student information
* Delete students
* Real-time student count
* REST API integration
* Blue/White and Beige themes
* Theme preference saved using Local Storage
* Responsive dashboard UI

##  Technologies Used

* HTML5
* CSS3
* JavaScript
* REST API
* Fetch API
* Local Storage

##  CRUD Operations

The application uses the following CRUD operations:

| Operation | Method | Purpose                    |
| --------- | ------ | -------------------------- |
| Create    | POST   | Add a new student          |
| Read      | GET    | Get all students           |
| Update    | PUT    | Update student information |
| Delete    | DELETE | Delete a student           |

##  How It Works

1. The application sends a **GET** request to load existing students.
2. Student data is displayed in the dashboard.
3. A new student is added using a **POST** request.
4. Existing student information is updated using **PUT**.
5. A student can be removed using **DELETE**.
6. The total student count updates automatically.

##  Project Structure

```text
Student-Manager/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

##  How to Run

1. Clone the repository:

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

2. Open the project folder.

3. Open `index.html` in your browser.

That's it. No backend installation is required for the current version because the project uses a REST API.

##  API

This project uses a REST API to store student data.

The JavaScript application communicates with the API using the browser's **Fetch API**.

> **Note:** The API endpoint used in this project may expire depending on the API service. If it expires, replace the API URL inside `script.js` with a new endpoint.

##  Themes

The application includes two themes:

* **Blue/White** – Default theme
* **Beige** – Alternative theme

The selected theme is saved in the browser using **Local Storage**, so it remains selected after refreshing the page.

##  Developer

**Developed by Khan**
