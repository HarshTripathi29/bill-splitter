const express = require('express');
const { createGroup, getAllGroups, addExpense, settleUp, getGroupDetails } = require('../controllers/groupController');

const router = express.Router();

router.post('/create', createGroup);
router.get('/', getAllGroups);
router.post('/:groupId/addExpense', addExpense);
router.post('/:groupId/settleUp', settleUp);
router.get('/:id', getGroupDetails);

module.exports = router;
