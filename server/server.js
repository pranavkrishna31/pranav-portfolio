const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const db = require("./db");

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

/* =========================
   MAIL TRANSPORTER
========================= */

const transporter = nodemailer.createTransport({

  host: "smtp.gmail.com",

  port: 587,

  secure: false,

  auth: {

    user: process.env.EMAIL_USER,

    pass: process.env.EMAIL_PASS,

  },

});

/* =========================
   VERIFY MAIL SERVER
========================= */

transporter.verify((error) => {

  if (error) {

    console.log(error);

  } else {

    console.log("Mail server ready");

  }

});

/* =========================
   ROOT ROUTE
========================= */

app.get("/", (req, res) => {

  res.send("Backend server running...");

});

/* =========================
   EMAIL VALIDATION
========================= */

const isValidEmail = (email) => {

  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

};

/* =========================
   HIRE REQUEST API
========================= */

app.post("/hire", (req, res) => {

  console.log(req.body);

  let {
    name,
    company_name,
    email,
    role_title,
    message
  } = req.body;

  name = name?.trim();
  company_name = company_name?.trim();
  email = email?.trim();
  role_title = role_title?.trim();
  message = message?.trim();

  if (
    !name ||
    !company_name ||
    !email ||
    !role_title ||
    !message
  ) {

    return res.status(400).json({
      message: "All fields are required"
    });

  }

  if (!isValidEmail(email)) {

    return res.status(400).json({
      message: "Invalid email format"
    });

  }

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
          message: "Database insert failed"
        });

      }

      /* SEND RESPONSE IMMEDIATELY */

      res.status(200).json({
        message:
          "Hire request submitted successfully"
      });

      /* SEND EMAIL IN BACKGROUND */

      try {

        transporter.sendMail({

          from: process.env.EMAIL_USER,

          to: process.env.EMAIL_USER,

          subject: "New Hire Request",

          html: `

            <h2>New Hire Request</h2>

            <p><strong>Name:</strong> ${name}</p>

            <p><strong>Company:</strong> ${company_name}</p>

            <p><strong>Email:</strong> ${email}</p>

            <p><strong>Role:</strong> ${role_title}</p>

            <p><strong>Message:</strong></p>

            <p>${message}</p>

          `,

        });

        console.log(
          "MAIL SENT SUCCESSFULLY"
        );

      } catch (mailError) {

        console.log(
          "MAIL ERROR:",
          mailError
        );

      }

    }
  );

});

/* =========================
   BUILD REQUEST API
========================= */

app.post("/build", (req, res) => {

  let {
    name,
    startup_name,
    email,
    project_type,
    message
  } = req.body;

  name = name?.trim();
  startup_name = startup_name?.trim();
  email = email?.trim();
  project_type = project_type?.trim();
  message = message?.trim();

  if (
    !name ||
    !startup_name ||
    !email ||
    !project_type ||
    !message
  ) {

    return res.status(400).json({
      message: "All fields are required"
    });

  }

  if (!isValidEmail(email)) {

    return res.status(400).json({
      message: "Invalid email format"
    });

  }

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
          message: "Database insert failed"
        });

      }

      /* SEND RESPONSE IMMEDIATELY */

      res.status(200).json({
        message:
          "Collaboration request submitted successfully"
      });

      /* SEND EMAIL IN BACKGROUND */

      try {

        transporter.sendMail({

          from: process.env.EMAIL_USER,

          to: process.env.EMAIL_USER,

          subject: "New Collaboration Request",

          html: `

            <h2>New Collaboration Request</h2>

            <p><strong>Name:</strong> ${name}</p>

            <p><strong>Startup:</strong> ${startup_name}</p>

            <p><strong>Email:</strong> ${email}</p>

            <p><strong>Project Type:</strong> ${project_type}</p>

            <p><strong>Message:</strong></p>

            <p>${message}</p>

          `,

        });

        console.log(
          "MAIL SENT SUCCESSFULLY"
        );

      } catch (mailError) {

        console.log(
          "MAIL ERROR:",
          mailError
        );

      }

    }
  );

});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {

  console.log(
    `Server running on port ${PORT}`
  );

});