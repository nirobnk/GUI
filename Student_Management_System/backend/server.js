// // server.js
// const express = require("express");
// const sqlite3 = require("sqlite3").verbose();
// const cors = require("cors");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// require("dotenv").config(); // Load environment variables from .env file

// const app = express();

// // CORS configuration
// const corsOptions = {
//   origin: "http://localhost:3000", // Your React app's URL
//   credentials: true,
//   methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
//   allowedHeaders: ["Content-Type", "Authorization"],
// };

// app.use(cors(corsOptions));
// app.use(express.json());

// // JWT secret key
// const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key";

// // Database setup
// const db = new sqlite3.Database("students.db");

// // Create students table
// db.run(`
//   CREATE TABLE IF NOT EXISTS eestudents (
//     student_id TEXT PRIMARY KEY,
// first_name TEXT,
// last_name TEXT,
// email TEXT UNIQUE,
// birthday TEXT,
// address TEXT,
// phone_num TEXT,
// department TEXT,
// enroll_date TEXT,
// year TEXT,
// gpa TEXT,
// attendence TEXT,
// password TEXT
//   )
// `);

// // Authentication middleware
// const authenticateToken = (req, res, next) => {
//   const token = req.headers["authorization"]?.split(" ")[1];

//   if (!token) {
//     return res.status(401).json({ error: "Authentication required" });
//   }

//   jwt.verify(token, JWT_SECRET, (err, user) => {
//     if (err) return res.status(403).json({ error: "Invalid token" });
//     req.user = user;
//     next();
//   });
// };

// // Input validation for student data
// const validateStudentData = (student) => {
//   if (
//     !student.student_id ||
//     !student.first_name ||
//     !student.last_name ||
//     !student.email ||
//     !student.birthday ||
//     !student.address ||
//     !student.phone_num ||
//     !student.department ||
//     !student.enroll_date ||
//     !student.year ||
//     !student.gpa ||
//     !student.attendence ||
//     !student.password
//   ) {
//     return false;
//   }
//   return true;
// };

// // Login endpoint
// app.post("/api/login", (req, res) => {
//   console.log("Login request received:", req.body);
//   const { username, password, role } = req.body;

//   if (role === "admin") {
//     console.log("Admin login attempt");
//     if (username === "admin" && password === "admin") {
//       console.log("Admin login successful");
//       const token = jwt.sign({ username, role }, JWT_SECRET);
//       return res.json({ token, role: "admin" });
//     }
//     return res.status(401).json({ error: "Invalid credentials" });
//   }

//   // Student login
//   db.get(
//     "SELECT * FROM eestudents WHERE student_id = ?",
//     [username],
//     async (err, student) => {
//       if (err) {
//         console.error("Database error:", err);
//         return res.status(500).json({ error: "Database error" });
//       }
//       if (!student) {
//         return res.status(401).json({ error: "Invalid credentials" });
//       }

//       // Compare hashed password
//       const passwordMatch = await bcrypt.compare(password, student.password);
//       if (passwordMatch) {
//         const token = jwt.sign(
//           { username: student.student_id, role: "student" },
//           JWT_SECRET
//         );
//         return res.json({ token, role: "student", studentData: student });
//       }
//       return res.status(401).json({ error: "Invalid credentials" });
//     }
//   );
// });

// // Get next student ID
// app.get("/api/next-student-id", authenticateToken, (req, res) => {
//   if (req.user.role !== "admin") {
//     return res.status(403).json({ error: "Admin access required" });
//   }

//   db.get(
//     "SELECT student_id FROM eestudents ORDER BY student_id DESC LIMIT 1",
//     (err, row) => {
//       if (err) {
//         console.error("Database error:", err);
//         return res.status(500).json({ error: "Database error" });
//       }

//       if (!row) {
//         return res.json({ nextId: "EG24001" });
//       }

//       const currentNumber = parseInt(row.student_id.slice(4));
//       const nextNumber = currentNumber + 1;
//       const nextId = `EG24${String(nextNumber).padStart(3, "0")}`;
//       res.json({ nextId });
//     }
//   );
// });

// // Add new student (admin only)
// app.post("/api/students", authenticateToken, async (req, res) => {
//   if (req.user.role !== "admin") {
//     return res.status(403).json({ error: "Admin access required" });
//   }

//   const student = req.body;

//   if (!validateStudentData(student)) {
//     return res.status(400).json({ error: "Invalid student data" });
//   }

//   // Hash the password
//   const saltRounds = 10;
//   const hashedPassword = await bcrypt.hash(student.password, saltRounds);

//   db.run(
//     `
//     INSERT INTO eestudents (
//       student_id, first_name, last_name, email, birthday, address,
//       phone_num, department, enroll_date, year, gpa, attendence, password
//     ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
//   `,
//     [
//       student.student_id,
//       student.first_name,
//       student.last_name,
//       student.email,
//       student.birthday,
//       student.address,
//       student.phone_num,
//       student.department,
//       student.enroll_date,
//       student.year,
//       student.gpa,
//       student.attendence,
//       hashedPassword,
//     ],
//     (err) => {
//       if (err) {
//         console.error("Database error:", err);
//         return res.status(500).json({ error: "Database error" });
//       }
//       res.json({ message: "Student added successfully" });
//     }
//   );
// });

// // Get all students (admin only)
// app.get("/api/students", authenticateToken, (req, res) => {
//   if (req.user.role !== "admin") {
//     return res.status(403).json({ error: "Admin access required" });
//   }

//   db.all("SELECT * FROM eestudents", (err, rows) => {
//     if (err) {
//       console.error("Database error:", err);
//       return res.status(500).json({ error: "Database error" });
//     }
//     res.json(rows);
//   });
// });

// // Get student by ID
// app.get("/api/students/:id", authenticateToken, (req, res) => {
//   if (req.user.role !== "admin" && req.user.username !== req.params.id) {
//     return res.status(403).json({ error: "Access denied" });
//   }

//   db.get(
//     "SELECT * FROM eestudents WHERE student_id = ?",
//     [req.params.id],
//     (err, row) => {
//       if (err) {
//         console.error("Database error:", err);
//         return res.status(500).json({ error: "Database error" });
//       }
//       if (!row) {
//         return res.status(404).json({ error: "Student not found" });
//       }
//       res.json(row);
//     }
//   );
// });

// // Test endpoint
// app.get("/api/test", (req, res) => {
//   res.json({ message: "Server is running!" });
// });
// // Add this endpoint to your server.js
// app.get("/api/students", authenticateToken, (req, res) => {
//   db.all("SELECT * FROM eestudents", (err, rows) => {
//     if (err) {
//       console.error("Database error:", err);
//       return res.status(500).json({ error: "Database error" });
//     }
//     res.json(rows);
//   });
// });

// // Start the server
// const PORT = 5008;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");
const app = express();
const port = 5110;

// Middleware
app.use(cors());
app.use(express.json());

// Database setup
const db = new sqlite3.Database("studetsgui.db", (err) => {
  if (err) {
    console.error("Error connecting to database:", err);
  } else {
    console.log("Connected to SQLite database");
    // Create users table if it doesn't exist
    db.run(`
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT UNIQUE,
        password TEXT,
        age INTEGER,
        first_name TEXT,
        last_name TEXT,
        email TEXT UNIQUE,
        birthday TEXT,
        address TEXT,
        phone_num TEXT,
        department TEXT,
        enroll_date TEXT,
        year TEXT,
        gpa TEXT,
        attendence TEXT,
        advisor TEXT
      )
    `);
  }
});

// Login route
app.post("/api/login", (req, res) => {
  const { userType, username, password } = req.body;

  if (userType === "admin") {
    // Check admin credentials (hardcoded)
    if (username === "admin" && password === "admin") {
      res.json({ success: true, userType: "admin" });
    } else {
      res
        .status(401)
        .json({ success: false, message: "Invalid admin credentials" });
    }
  } else {
    // Check user credentials from database
    db.get(
      "SELECT * FROM users WHERE username = ? AND password = ?",
      [username, password],
      (err, user) => {
        if (err) {
          res.status(500).json({ success: false, message: "Database error" });
        } else if (user) {
          res.json({ success: true, userType: "user" });
        } else {
          res
            .status(401)
            .json({ success: false, message: "Invalid user credentials" });
        }
      }
    );
  }
});

// Get all users
app.get("/api/users", (req, res) => {
  db.all("SELECT id, username, age FROM users", (err, users) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(users);
    }
  });
});

// Add new user (admin only)
app.post("/api/users", (req, res) => {
  const {
    username,
    password,
    age,
    first_name,
    last_name,
    email,
    birthday,
    address,
    phone_num,
    department,
    enroll_date,
    year,
    gpa,
    attendence,
    advisor,
  } = req.body;

  db.run(
    `INSERT INTO users 
     (username, password, age, first_name, last_name, email, birthday, address, phone_num, 
      department, enroll_date, year, gpa, attendence, advisor) 
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      username,
      password,
      age,
      first_name,
      last_name,
      email,
      birthday,
      address,
      phone_num,
      department,
      enroll_date,
      year,
      gpa,
      attendence,
      advisor,
    ],
    function (err) {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.json({ id: this.lastID });
      }
    }
  );
});

// Update user (admin only)
app.put("/api/users/:id", (req, res) => {
  const { username, age } = req.body;
  db.run(
    "UPDATE users SET username = ?, age = ? WHERE id = ?",
    [username, age, req.params.id],
    (err) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.json({ success: true });
      }
    }
  );
});

// Delete user (admin only)
app.delete("/api/users/:id", (req, res) => {
  db.run("DELETE FROM users WHERE id = ?", req.params.id, (err) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json({ success: true });
    }
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
