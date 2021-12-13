import { Router } from "express";
import { getAllPastExercises,
        deletePastExercises,  
        getAllCurrentExercises, 
        getAllFutureExercises} 
    from "../controllers/api.controller.js";


const apiRouter = Router();

// Past
apiRouter.get("/pastExercises", getAllPastExercises)
apiRouter.delete("/delete/:title", deletePastExercises)

// Current
apiRouter.get("/currentExercises", getAllCurrentExercises)

// Future
apiRouter.get("/futureExercises", getAllFutureExercises)

export default apiRouter;