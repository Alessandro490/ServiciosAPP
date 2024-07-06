import dotenv from 'dotenv';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../.env') });


import express, { json } from 'express';
import cors from 'cors';
import pkg from 'pg';
import path from 'path';
const { Pool } = pkg;



const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(json());

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: 5432, // default port for PostgreSQL,
    ssl: {
        rejectUnauthorized: false,
      },
  });

  app.get('/api/gigs', async (req, res) => {
    try {
      const result = await pool.query('SELECT * FROM servicio');
      res.json(result.rows);
    } catch (error) {
      console.error('Error executing query', error.stack);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

app.get('/api/gig/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await pool.query('SELECT s.*, t.* FROM servicio s left join trabajador t on s.trabajador_id = t.trabajador_id WHERE s.servicio_id = $1', [id]);
        res.json(result.rows);
    } catch (error) {
        console.error('Error executing query', error.stack);
        res.status(500).json({ error: 'Internal server error' });
    }
});

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });