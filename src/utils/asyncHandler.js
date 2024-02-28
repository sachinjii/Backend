//*****************  Try Catch Part *********************** *//

// const asyncHandler = (fn) => async (req, res, next) => {
//   try {
//     await fn(req, res, next);
//   } catch (error) {
//     res.status(error.code || 500).json({
//       sucess: false,
//       message: error.message,
//     });
//   }
// };

//*****************  Promise Part *********************** *//

const asyncHandler = (requestHandler) => {
  (req, res, next) => {
    Promise.resolve(requestHandler(res, req, next)).catch((err) => next(err));
  };
};

export { asyncHandler };
