import jwt from 'jsonwebtoken';

export const signToken = (id: string, login: string) => {
  return jwt.sign({ id, login }, process.env.SECRET_KEY!, { expiresIn: '720m' });
}

export const checkToken = (token: string) => {
  try {
    jwt.verify(token, process.env.SECRET_KEY!);
    return true;
  } catch (error) {
    return false;
  }
}
