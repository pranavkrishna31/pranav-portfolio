const express = require("express");
const cors = require("cors");
const db = require("./db");

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend server running...");
});

/* =========================
   HIRE REQUEST API
========================= */

app.post("/hire", (req, res) => {

    console.log(req.body);

  const {
    name,
    company_name,
    email,
    role_title,
    message
  } = req.body;

  const sql = `
    INSERT INTO hire_requests
    (name, company_name, email, role_title, message)
    VALUES (?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [
      name,
      company_name,
      email,
      role_title,
      message
    ],
    (err, result) => {

      if (err) {

        console.log(err);

        return res.status(500).json({
          error: "Database insert failed"
        });

      }

      res.status(200).json({
        message: "Hire request submitted successfully"
      });

    }
  );

});

/* =========================
   BUILD REQUEST API
========================= */

app.post("/build", (req, res) => {

  const {
    name,
    startup_name,
    email,
    project_type,
    message
  } = req.body;

  const sql = `
    INSERT INTO collaborations
    (name, startup_name, email, project_type, message)
    VALUES (?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [
      name,
      startup_name,
      email,
      project_type,
      message
    ],
    (err, result) => {

      if (err) {

        console.log(err);

        return res.status(500).json({
          error: "Database insert failed"
        });

      }

      res.status(200).json({
        message: "Collaboration request submitted successfully"
      });

    }
  );

});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {

  console.log(`Server running on port ${PORT}`);

});