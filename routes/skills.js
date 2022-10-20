var express = require('express');
var router = express.Router();
var skillsCtrl = require('../controllers/skills');

// All actual paths start with /skills

// GET /skills
router.get('/', skillsCtrl.index);

// GET /skills/new
router.get('/new', skillsCtrl.new);


router.get('/:id', skillsCtrl.show);


router.post('/', skillsCtrl.create);

// DELETE /skills/:id
router.delete('/:id', skillsCtrl.delete);

module.exports = router;
