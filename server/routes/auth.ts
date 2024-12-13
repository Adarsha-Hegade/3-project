import { Router } from 'express';
import { createAdmin, loginUser } from '../services/auth';
import { asyncHandler } from '../middleware/async';
import { User } from '../models/User';

const router = Router();

router.post('/login', asyncHandler(async (req, res) => {
  const { username, password } = req.body;
  const result = await loginUser(username, password);
  res.json(result);
}));

router.post('/admin/create', asyncHandler(async (req, res) => {
  const { username, password } = req.body;
  const result = await createAdmin(username, password);
  res.json(result);
}));

router.get('/admin/exists', asyncHandler(async (req, res) => {
  const adminExists = await User.exists({ role: 'admin' });
  res.json({ exists: !!adminExists });
}));

export { router as authRouter };