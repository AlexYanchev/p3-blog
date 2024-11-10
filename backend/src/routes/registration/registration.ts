import express from 'express';
import { UrlRoutes } from '../../common/routesTypes.js';
import { registrationService } from '../../services/registration/registration.js';

const registerRoute = express.Router();

registerRoute.post(UrlRoutes.register, registrationService);

export default registerRoute;
