const onError = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  res.status(err.statusCode).json({
    success: false,
    message: err.message //    err, stack: err.stack
  });
};
export default onError;

//import ErrorHandler from './errorHandler';
/*  let error = { ...err };

  error.message = err.message;
 
  // Wrong Mongoose Object ID Error
  if (err.name === 'CastError') {
    const message = `Resource not found. Invalid: ${err.path}`;
    error = new ErrorHandler(message, 400);
  }

  // Handling mongoose Validation error
  if (err.name === 'ValidationError') {
    const message = Object.values(err.errors).map(value => value.message);
    error = new ErrorHandler(message, 400);
  }
*/
