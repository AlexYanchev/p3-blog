import express from 'express';
import { UrlRoutes } from '../../common/routes.js';

const registerRoute = express.Router();

registerRoute.post(UrlRoutes.register, (req, res) => {
  console.log(req.body);
  res.status(200).json({ message: 'reg' });
});

export default registerRoute;
