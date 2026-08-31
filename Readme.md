# GraphQL Dashboard

A web dashboard built with **Vanilla JavaScript, HTML, CSS, and GraphQL**.

The application allows users to authenticate, retrieve data through GraphQL queries, and visualize information such as their profile, XP, rank, skills, audits, and transactions through a responsive dashboard.

---

## 📂 Project Structure

```text
GRAPHQL/
├── css/
│   ├── home.css              # Dashboard styles
│   ├── index.css             # Global styles
│   └── login.css             # Login page styles
│
├── images/
│   ├── logo.png              # Project logo
│   └── noun-to-do-list-5340944.svg
│
├── index.html                # Main entry point
│
├── js/
│   ├── auth/
│   │   ├── loginForm.js      # Login form and authentication
│   │   └── logOut.js         # Logout functionality
│   │
│   ├── gql/
│   │   └── querys.js         # GraphQL queries
│   │
│   ├── home/
│   │   ├── AuditsSect.js     # Audits section
│   │   ├── BodyHome.js       # Main dashboard body
│   │   ├── displayHome.js    # Dashboard data rendering
│   │   ├── head.js           # Header logic
│   │   └── ProgressSect.js   # Progress and XP section
│   │
│   ├── notif/
│   │   ├── failureToast.js   # Error notifications
│   │   └── succedToast.js    # Success notifications
│   │
│   └── main.js               # Application entry point
│
├── utils/
│   ├── SetUrl.js             # API endpoint configuration
│   ├── verifyError.js        # Error handling utility
│   └── XpConcerter.js        # XP formatting utility
│
├── README.md                 # Project documentation
└── subject.md                # Project specification
```

---

## ✨ Features

* 🔑 **Authentication** — Login using token-based GraphQL Bearer authentication.
* 📊 **Profile Dashboard** — Display user information such as XP, rank, skills, audits, and transactions.
* 📡 **GraphQL Integration** — Fetch and process data using reusable GraphQL queries.
* 🖥️ **Dynamic Rendering** — Build and update the interface using native DOM manipulation.
* 🎨 **Responsive UI** — Dashboard designed to work across different screen sizes.
* 🔔 **Toast Notifications** — Provide visual feedback for successful actions and errors.

---

## 🚀 Getting Started

### Option 1 — Live Server

1. Install the **Live Server** extension in your code editor, such as VS Code.
2. Open the project folder.
3. Open `index.html`.
4. Right-click the file and select **"Go Live"**.

### Option 2 — Using `serve`

Make sure Node.js is installed, then run:

```bash
npx serve .
```

The project will then be available at the local address shown in your terminal.

---

## 🌐 Live Demo

The project is hosted on Vercel:

**https://graphql-omega-one.vercel.app/**

---

## 🛠️ Technologies

* HTML5
* CSS3
* JavaScript (Vanilla JS)
* GraphQL
* REST/HTTP APIs
* Vercel

---

## 📌 Project

This project was created to practice working with **GraphQL APIs**, authentication, data fetching, and building a dynamic dashboard using vanilla JavaScript without a frontend framework.
