import express from 'express';
import Contact from '../models/Contact.js';

const router = express.Router();

// POST /api/contact  — save a new message
router.post('/', async (req, res) => {
  const { name, email, subject, message } = req.body;

  // Basic validation
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  try {
    const entry = await Contact.create({ name, email, subject, message });
    return res.status(201).json({ success: true, id: entry._id });
  } catch (err) {
    console.error('Save error:', err.message);
    return res.status(500).json({ error: 'Could not save message. Try again.' });
  }
});

// GET /api/contact  — list all messages (handy for checking in dev)
router.get('/', async (_req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });
    return res.json(messages);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

export default router;
