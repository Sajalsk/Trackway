import express from 'express';
import { CreateTour,DeleteTour, GetAllTour, GetFeatured, GetSingleTour, UpdateTour, GetTourbySearch, GetTourCount } from '../controllers/toursControllers.js';
import { verifyAdmin } from '../utils/verifyToken.js';

const router = express.Router();

//create New Tour
router.post('/',verifyAdmin, CreateTour);

//create Update Tour
router.put("/:id",verifyAdmin,UpdateTour);

//create Delete Tour
router.delete('/:id',verifyAdmin,DeleteTour);

//create Get Single Tour
router.get('/:id',GetSingleTour);

//create Get All Tour
router.get('/',GetAllTour);

//create Get Tour by Search
router.get('/search/getTourBySearch',GetTourbySearch);

//create Get Tour by Featured
router.get('/search/getTourByFeatured',GetFeatured);

//create Get Tour by Count
router.get('/search/getTourByCount',GetTourCount);

export default  router;