# neokred

```markdown
# Real-Time Markdown Editor

This is a real-time Markdown editor with live preview functionality. It converts Markdown input into HTML in real-time and displays the rendered HTML in a separate preview pane. The project uses React for the frontend and Node.js for the backend.

---

## Features
- **Markdown Editor**: A text area for writing Markdown syntax.
- **Live Preview**: See the rendered HTML output in real time.
- **Backend Integration**: Backend processing for Markdown-to-HTML conversion.
- **Optional Syntax Highlighting**: Highlight Markdown syntax in the editor.

---

## Prerequisites
Ensure you have the following installed on your system:
- **Node.js** (v14 or above)
- **npm** (Node Package Manager)

---

## Project Structure
```
/project-root
│
├── /frontend         # Frontend application built with React
│   ├── src           # Source code for the frontend
│   └── package.json  # Frontend dependencies
│
├── /backend          # Backend application built with Node.js
│   ├── index.js     # Node.js server
│   └── package.json  # Backend dependencies
│
└── README.md         # Project documentation
```

---

## Getting Started

### 1. Clone the Repository
```bash
git clone git@github.com:AdityaVernekar/neokred.git
cd neokred
```

### 2. Install Dependencies

#### Backend
```bash
cd backend
npm install
```

#### Frontend
```bash
cd frontend
npm install
```

---

## Starting the Application

### 1. Start the Backend Server
In a terminal, navigate to the backend directory and run:
```bash
cd backend
npm start
```
The backend will start on `http://localhost:5000` (or another port, as configured).

### 2. Start the Frontend
In a separate terminal, navigate to the frontend directory and run:
```bash
cd frontend
npm start
```
The frontend will start on `http://localhost:3000` (by default).

---

## Usage
1. Open your browser and navigate to `http://localhost:3000`.
2. Write Markdown in the editor pane on the left.
3. See the rendered HTML in real time on the right preview pane.

---

## Troubleshooting
- If you encounter issues, ensure both the frontend and backend are running.
- Verify the `node_modules` directories are properly installed in both `frontend` and `backend`.

---

## Contributing
Feel free to fork the repository and submit pull requests. Contributions are welcome!

---

## License
This project is licensed under the [MIT License](LICENSE).

---

## Author
Developed by Aditya Vernekar
```

