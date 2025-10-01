import { Router } from "express";
import { getPage, updatePage, createPage, deletePage, getPages } from "./service.js";

const router = Router();

router.get("/pages", async (req, res) => {
  try {
    const page = await getPages(req.params.id);
    res.json(page);
  } catch (err) {
    res.status(500).json({ error: err.response?.data || err.message });
  }
});

router.get("/page/:id", async (req, res) => {
  try {
    const page = await getPage(req.params.id);
    res.json(page);
  } catch (err) {
    res.status(500).json({ error: err.response?.data || err.message });
  }
});

router.post("/page", async (req, res) => {
  try {
    const { spaceKey, title, content } = req.body;
    const page = await createPage(spaceKey, title, content);
    res.json(page);
  } catch (err) {
    res.status(500).json({ error: err.response?.data || err.message });
  }
});

router.put("/page/:id", async (req, res) => {
  try {
    const updated = await updatePage(req.params.id, req.body.content);
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.response?.data || err.message });
  }
});

router.delete("/page/:id", async (req, res) => {
  try {
    const result = await deletePage(req.params.id);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.response?.data || err.message });
  }
});

export default router;
