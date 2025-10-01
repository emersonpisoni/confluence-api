import { Router } from "express";
import { getPageById, getPages } from "./service.js";

const router = Router();

router.get("/pages", async (req, res) => {
  try {
    const page = await getPages(req.params.id);
    res.json(page);
  } catch (err) {
    res.status(500).json({ error: err.response?.data || err.message });
  }
});

router.get("/page", async (req, res) => {
  try {
    const page = await getPageById(req.query.id);
    res.json(page);
  } catch (err) {
    res.status(500).json({ error: err.response?.data || err.message });
  }
});

export default router;
