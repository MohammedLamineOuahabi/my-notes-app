import pool from '@/api-helpers/db/db';

const notes = [
  { id: 1, title: 'how to 1', content: 'hello mysql content1', notebook: 'mysql' },
  { id: 2, title: 'how to 2', content: 'hello mysql content2', notebook: 'mysql' },
  { id: 3, title: 'how to 1', content: 'hello mysql content3', notebook: 'nodejs' }
];

const getNotes = async (req, res) => {
  try {
    const [rows, fields] = await pool.query('SELECT title from notes limit 10;');
    res.status(200).json({ rows });
  } catch (error) {
    console.log('error', error);
    res.status(500).json({ message: 'error', rows: [] });
  }
  return;
};

export { getNotes };
