/* next(err): 
so err can be handled in global error handler middleware
defined nextConnect({ onError });
*/
const catchAsyncErrors = fn => {
  return (req, res, next) => {
    fn(req, res, next).catch(err => next(err));
  };
};
export default catchAsyncErrors;
/*
export default func => (req, res, next) =>
Promise.resolve(func(req, res, next))
.catch(next)
*/
