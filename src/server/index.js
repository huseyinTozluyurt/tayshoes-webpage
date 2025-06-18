require('dotenv').config();

console.log("Loaded env:", {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});




const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();
app.use(cors());
app.use(express.json());

// 📦 MySQL database connection setup
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME
});

// ✅ Connect to database
db.connect(err => {
  if (err) {
    console.error('❌ MySQL connection failed:', err);
  } else {
    console.log('✅ MySQL connected!');
  }
});

// 📝 Register Route
app.post('/api/register', async (req, res) => {
  const { name, surname, age, email, phone, password } = req.body;

  if (!name || !surname || !email || !phone || !password || !age) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const sql = `
      INSERT INTO users (name, surname, age, email, phone, password)
      VALUES (?, ?, ?, ?, ?, ?)
    `;

    db.query(sql, [name, surname, age, email, phone, hashedPassword], (err, result) => {
      if (err) {
        console.error('❌ Registration failed:', err);
        return res.status(500).json({ error: 'Database error or user already exists' });
      }
      res.status(201).json({ message: 'User registered successfully' });
    });
  } catch (error) {
    console.error('❌ Error in hashing or query:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// 🔐 Login Route
app.post('/api/login', (req, res) => {
  const { email, password, role } = req.body;

  db.query('SELECT * FROM users WHERE email = ?', [email], async (err, results) => {
    if (err) return res.status(500).json({ error: 'Server error' });
    if (results.length === 0) return res.status(401).json({ error: 'User not found' });

    const user = results[0];
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) return res.status(401).json({ error: 'Incorrect password' });

    // Here we could check the role if it's stored in the database (optional)
    const token = jwt.sign(
      { id: user.id, email: user.email, role },
      process.env.JWT_SECRET || 'default_secret',
      { expiresIn: '2h' }
    );

    res.json({ message: 'Login successful', token });
  });
});


// 🚀 Launch server
app.listen(3001, () => {
  console.log('🚀 Server is running on http://localhost:3001');
});
