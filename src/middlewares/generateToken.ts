import jwt from 'jsonwebtoken';

const secret = process.env.SECRET || 'secret';

const generateToken = (username: string, userId: number): string => {
  const token = jwt.sign({ username, userId }, secret);

  return token;
};

export default generateToken;