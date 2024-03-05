import { Router } from "express";
import {
  createProject,
  deleteProject,
  getAllProjects,
  getProjectById,
  updateProjectById,
} from "../controllers/project.controllers.js";
import { verifyUserJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/").post(verifyUserJWT, createProject).get(getAllProjects);

router
  .route("/:projectId")
  .get(getProjectById)
  .patch(updateProjectById)
  .delete(deleteProject);

export default router;
