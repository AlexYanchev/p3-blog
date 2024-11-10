import { UrlRoutes } from '../../common/routesTypes.js';
import express from 'express';
import { loginService } from '../../services/login/login.js';
const loginRoute = express.Router();

loginRoute.post(UrlRoutes.login, loginService);

export default loginRoute;
