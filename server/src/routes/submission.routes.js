import { Router } from "express";
import { isAuthenticated } from "../middlewares/auth.middleware.js";
import {
  createSubmission,
  deleteSubmissionById,
  getAllSubmissions,
  getEverySubmission,
  getStudentSubmissionByProblemId,
  getStudentSubmissions,
  getSubmissionById,
  updateSubmissionById,
} from "../controllers/submission.controllers.js";

const router = Router();

router.use(isAuthenticated);

router.route("/all").get(getEverySubmission);

router.route("/").post(createSubmission).get(getStudentSubmissions);
router.route("/submission/:problemId").get(getStudentSubmissionByProblemId);
router.route("/problem/:problemId").get(getAllSubmissions);

router
  .route("/:submissionId")
  .get(getSubmissionById)
  .patch(updateSubmissionById)
  .delete(deleteSubmissionById);

export default router;
