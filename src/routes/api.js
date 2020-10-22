import express from 'express';
import AuthRouter from './auth';
import UserRouter from './user';
import auth from '../lib/auth';

export default class ApiRouter {
    static router(){
        const router = express.Router();
        router.use('/auth', AuthRouter.router());
        router.use('/user', auth, UserRouter.router());
        return router;
    }
}