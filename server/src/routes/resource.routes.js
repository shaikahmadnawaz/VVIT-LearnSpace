import { Router } from "express";
import {
 
  ResearchpaperApproval,
  createResource,
  deleteNotes,
  deletePapers,
  deleteResearch,
  deleteResourceById,
  getAllNotes,
  getAllPapers,
  getAllResearchPapers,
  getAllResources,
  getApprovedResearch,
  getResourceById,
  getUserNotes,
  getUserPaper,
  getUserResearchPapers,
  noteApproval,
  paperApproval,
  updateResourceById,
} from "../controllers/resource.controllers.js";
import { upload } from "../middlewares/upload.middleware.js";
import { isAuthenticated } from "../middlewares/auth.middleware.js";


const router = Router();

router.route("/approved").get(getApprovedResearch);

router.use(isAuthenticated);

router
  .route("/")
  .get(getAllResources)

router.route("/add")
  .post(upload.single("fileUrl"), createResource);

router.route("/notes").get(getAllNotes);

router.route("/student/notes").get(getUserNotes);

router.route("/student/papers").get(getUserPaper);

router.route("/student/research").get(getUserResearchPapers);

router.route("/notes/:notesId").delete(deleteNotes);

router.route("/notes/:notesId").patch(noteApproval)

router.route("/papers").get(getAllPapers);

router.route("/papers/:paperId").patch(paperApproval)

router.route("/papers/:paperId").delete(deletePapers);

router.route("/research").get(getAllResearchPapers);

router.route("/research/:researchId").delete(deleteResearch);

router.route("/research/:paperId").patch(ResearchpaperApproval)


router
  .route("/:resourceId")
  .get(getResourceById)
  .patch(updateResourceById)
  .delete(deleteResourceById);

export default router;
