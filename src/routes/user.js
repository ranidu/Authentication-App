import express from 'express';
import UserController from '../controller/user.controller';

export default class UserRouter {
    static router() {
        const router = express.Router();
        router.get('/me', UserController.me);
        return router;
    }
}