import express from "express";
import path from 'path';
import multer from 'multer';
import { userController } from "../controllers/controller.js";


const resultRouter = express.Router();
const storage = multer.diskStorage(
    {
        destination:'./src/Images',
        filename:(req,file,cb)=>{
            return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
        }
    }
)

resultRouter.use(express.static('src/uploads'));
const upload = multer({storage:storage});

resultRouter.post('/importUser',upload.single('file'),userController);

export default resultRouter;