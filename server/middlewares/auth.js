import jwt from 'jsonwebtoken';
import Users from '../models/userModel.js';

const auth = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization)
    return res.status(401).json({ msg: 'Unauthorized. Permission denied.' });

  const token = authorization.replace('Bearer ', '');
  jwt.verify(token, process.env.JWT_SECRET, async (err, payload) => {
    if (err)
      return res
        .status(401)
        .json({ msg: 'Token not valid. Permission denied.' });

    const { _id } = payload;
    const userData = await Users.findById(_id);
    req.user = userData;
    next();
  });
};

export default auth;
