import jwt from "jsonwebtoken";
const GenerateToken = (user) => {
  return jwt.sign(
    { email: user.email, id: user._id },
    `${process.env.ACCESS_TOKEN_SECRET}`
  );
};

export { GenerateToken };
