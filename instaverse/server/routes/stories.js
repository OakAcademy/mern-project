import { Router } from "express";
import { getStories, createStory, updateStory, deleteStory, likeStory } from "../controllers/stories.js";
const router = Router();

router.get("/", getStories);
router.post("/", createStory);
router.patch("/:id", updateStory);
router.delete("/:id", deleteStory);
router.patch("/:id/likeStory", likeStory);

export default router;