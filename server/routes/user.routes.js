import { Router }  from "express";
import { register,getProfile ,login,logout } from "../controllers/user.controller";
const router= Router();


router.post('/register', register);
router.post('/login', login);

router.post('/logout', logout);

router.post('/me', getProfile);




export default router;