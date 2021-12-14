import { Router } from "express";
import { getAllPastExercises,
        deletePastExercises,  
        getAllCurrentExercises, 
        getAllFutureExercises,
        getKey} 
    from "../controllers/api.controller.js";


const apiRouter = Router();

//API Key Route
apiRouter.get('/key', getKey)

// Past
apiRouter.get("/pastExercises", getAllPastExercises)
apiRouter.delete("/delete/:title", deletePastExercises)

// Current
apiRouter.get("/currentExercises", getAllCurrentExercises)

// Future
apiRouter.get("/futureExercises", getAllFutureExercises)

export default apiRouter;