import pool from '@/helpers/db/db';
import ErrorHandler from '@/helpers/utils/errorHandler';
import catchAsyncErrors from '@/helpers/utils/catchAsyncErrors';

const getNotes = catchAsyncErrors(async (req, res, next) => {
  const [rows, fields] = await pool.query('SELECT title,content from notes where 1=2 limit 3;');

  if (rows.length === 0) {
    console.log('no notes found');
    return next(new ErrorHandler('notes not found', 404));
  }
  res.status(200).json({ success: true, rows });
  return;
});

export { getNotes };
