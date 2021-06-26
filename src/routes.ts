import {Router} from 'express';
import { CreateUsersController } from './controllers/CreateUsersController';
import { CreateTagsController } from './controllers/CreateTagsController';
import { ensureAdmin } from './middlewares/ensureAdmin';
import { AuthenticateUserController } from './controllers/AuthenticateUserController';
import { CreateComplimentController } from './controllers/CreateComplimentController';
import { ensureAuthenticate } from './middlewares/ensureAuthenticated';
import { ListUserSendComplimentsController } from './controllers/ListUserSendComplimentsController';
import { ListUserReceiveComplimentsController } from './controllers/ListUserReceiveComplimentsController';
import { ListTagsController } from './controllers/ListTagsController';
import { ListUsersController } from './controllers/ListUsersController';

const routes = Router();
const createUsersController = new CreateUsersController();
const createTagsController = new CreateTagsController();
const createComplimentsController = new CreateComplimentController();
const authenticateUserController = new AuthenticateUserController();
const listUserSendComplimentsController = new ListUserSendComplimentsController();
const listUserReceiveComplimentsController = new ListUserReceiveComplimentsController();
const listTagsController = new ListTagsController();
const listUsersController = new ListUsersController();

routes.post("/users", createUsersController.handle);
routes.post("/tags", ensureAuthenticate, ensureAdmin, createTagsController.handle);
routes.post("/login", authenticateUserController.handle);
routes.post("/compliments", ensureAuthenticate, createComplimentsController.handle);

routes.get("/users/compliments/send", ensureAuthenticate, listUserSendComplimentsController.handle);
routes.get("/users/compliments/receive", ensureAuthenticate, listUserReceiveComplimentsController.handle);
routes.get("/tags", ensureAuthenticate, listTagsController.handle);
routes.get("/users", ensureAuthenticate, listUsersController.handle);

export {routes};