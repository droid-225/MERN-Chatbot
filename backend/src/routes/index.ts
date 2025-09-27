import { Router } from 'express';
import userRoutes from './user-routes.js';
import chatRoutes from './chat-routes.js';

const appRouter = Router();

appRouter.use("/user", userRoutes); // domain/api/user
appRouter.use("/chats", chatRoutes); // domain/api/chats

export default appRouter;