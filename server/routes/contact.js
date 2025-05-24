const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

// Submit contact form
router.post('/', contactController.submitContact);

// Get all contact submissions
router.get('/', contactController.getContacts);

// Update contact status
router.patch('/:id/status', contactController.updateContactStatus);

module.exports = router; 