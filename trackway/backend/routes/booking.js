import express from 'express';
import { verifyAdmin, verifyUser } from '../utils/verifyToken.js';
import { createBooking, getAllBooking, getBooking } from '../controllers/bookingController.js';

const router = express.Router();

router.post('/',createBooking)
router.get('/:id',getBooking)
router.get('/',getAllBooking)     /* verifyAdmin */

export default router;