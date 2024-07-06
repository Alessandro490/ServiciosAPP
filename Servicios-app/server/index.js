import express, { json } from 'express';
import cors from 'cors';
import pkg from 'pg';
const { Pool } = pkg;

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(json());

const pool = new Pool({
    user: 'admin',
    host: 'admin.dpg-cq1mdmqju9rs73babqf0-a.oregon-postgres.render.com',
    database: 'dba_sv',
    password: 'Pm4pPXQeWTihinVJCgtFWRzAdZKHZLXP',
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

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });