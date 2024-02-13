import express from 'express';
import {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
  sendResetPasswordOTP,
  verifyResetPasswordOTP,
  resetPassword1,
} from '../controllers/userController.js';
import { protect, admin } from '../middleware/authMiddleware.js'; // Import auth middleware

const router = express.Router();

router.route('/').post(registerUser).get(protect, admin, getUsers);
router.post('/auth', authUser);
router.post('/reset-password', sendResetPasswordOTP);
router.post('/verify-otp', verifyResetPasswordOTP);
router.post('/logout', logoutUser);
router.put('/reset-password1', resetPassword1);

// Protected routes
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile);

// Admin routes
router.route('/').post(registerUser).get(protect, admin, getUsers);
router
  .route('/:id')
  .delete(protect, admin, deleteUser)
  .get(protect, admin, getUserById)
  .put(protect, admin, updateUser);

export default router;
