import  express from "express";
import { createHotel, deleteHotel, getHotel, getidHotel, updateHotel } from "../controllers/hotel.js";
import Hotel from "../models/Hotel.js";
import { verifyAdmin } from "../Utils/verifyToken.js";
const router = express.Router();
//Create
router.post("/",verifyAdmin, createHotel)
//update
router.put('/:id',verifyAdmin, updateHotel)
//delete 
router.delete('/:id',verifyAdmin, deleteHotel)
// get id
router.get('/:id',getidHotel)
//get
router.get('/',getHotel)



export default router