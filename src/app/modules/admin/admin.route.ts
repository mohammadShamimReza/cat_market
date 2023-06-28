import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { AdminController } from './admin.controllar';
import { AdminValidation } from './admin.validation';

const router = express.Router();

router.post(
  '/create-admin',
  validateRequest(AdminValidation.createAdminZodSchema),
  AdminController.createAdmin
);

export const AdminRoute = router;
