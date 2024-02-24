import express from 'express';
import authControllers from '../controllers/authController.js';
import { validRegister, validLogin } from '../middlewares/valid.js';

export const authRouters = express.Router();

authRouters.post('/register', validRegister, authControllers.register);
authRouters.post('/login', validLogin, authControllers.login);
