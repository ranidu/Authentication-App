import express from 'express';
import UserController from '../controller/user.controller';
import AuthController from '../controller/auth.controller';

export default class AuthRouter {
    static router() {
        const router = express.Router();
        router.post('/register', UserController.create);
        router.post('/login', AuthController.login);
        router.get('/logout', AuthController.logout);
        return router;
    }
}