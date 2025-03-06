const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");
const app = express();
const port = 5108;

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
//Get student list
app.get("/students", (req, res) => {
  db.all(
    `SELECT id, first_name, last_name, age, birthday, address, enroll_date, phone_num, email, username, password, department, year, gpa, attendence, advisor 
     FROM users`,
    [],
    (err, rows) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json(rows);
    }
  );
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
// app.put("/api/users/:id", (req, res) => {
//   const studentId = req.params.id;
//   const {
//     username,
//     password,
//     age,
//     first_name,
//     last_name,
//     email,
//     birthday,
//     address,
//     phone_num,
//     department,
//     enroll_date,
//     year,
//     gpa,
//     attendence,
//     advisor,
//   } = req.body;

//   db.run(
//     `UPDATE users 
//      SET username = ?, password = ?, age = ?, first_name = ?, last_name = ?, email = ?, 
//          birthday = ?, address = ?, phone_num = ?, department = ?, enroll_date = ?, 
//          year = ?, gpa = ?, attendence = ?, advisor = ? 
//      WHERE id = ?`,
//     [
//       username,
//       password,
//       age,
//       first_name,
//       last_name,
//       email,
//       birthday,
//       address,
//       phone_num,
//       department,
//       enroll_date,
//       year,
//       gpa,
//       attendence,
//       advisor,
//       studentId,
//     ],
//     function (err) {
//       if (err) {
//         res.status(500).json({ error: err.message });
//       } else if (this.changes === 0) {
//         res.status(404).json({ error: "Student not found" });
//       } else {
//         res.json({ success: true, message: "Student updated successfully" });
//       }
//     }
//   );
// });

// Get user by username
app.get("/api/users/:username", (req, res) => {
  const username = req.params.username;
  
  db.get(
    "SELECT * FROM users WHERE username = ?",
    [username],
    (err, user) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      res.json(user);
    }
  );
});


// Update user (admin only)
app.put("/api/users/:id", (req, res) => {
  const studentId = req.params.id;
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

  // Log the received data for debugging
  console.log("Updating student ID:", studentId);
  console.log("Update data:", req.body);
  
  // Make sure to handle null/undefined values
  const safeAge = age || null;
  
  db.run(
    `UPDATE users 
     SET username = COALESCE(?, username),
         password = COALESCE(?, password),
         age = COALESCE(?, age),
         first_name = COALESCE(?, first_name),
         last_name = COALESCE(?, last_name),
         email = COALESCE(?, email),
         birthday = COALESCE(?, birthday),
         address = COALESCE(?, address),
         phone_num = COALESCE(?, phone_num),
         department = COALESCE(?, department),
         enroll_date = COALESCE(?, enroll_date),
         year = COALESCE(?, year),
         gpa = COALESCE(?, gpa),
         attendence = COALESCE(?, attendence),
         advisor = COALESCE(?, advisor)
     WHERE id = ?`,
    [
      username,
      password,
      safeAge,
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
      studentId,
    ],
    function (err) {
      if (err) {
        console.error("Database error during update:", err);
        res.status(500).json({ error: err.message });
      } else if (this.changes === 0) {
        res.status(404).json({ error: "Student not found" });
      } else {
        res.json({ success: true, message: "Student updated successfully" });
      }
    }
  );
});

app.delete("/students/:id", (req, res) => {
  const studentId = req.params.id;

  db.run("DELETE FROM users WHERE id = ?", [studentId], function (err) {
    if (err) {
      res.status(500).json({ error: err.message });
    } else if (this.changes === 0) {
      res.status(404).json({ error: "Student not found" });
    } else {
      res.json({ success: true, message: "Student deleted successfully" });
    }
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
