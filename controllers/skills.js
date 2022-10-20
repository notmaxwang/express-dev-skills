const Skill = require('../models/skill');

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill
};

function deleteSkill(req, res) {
    Skill.deleteOne(req.params.id);
    res.redirect('/skills');
}


function create(req, res) {
    Skill.create(req.body);
    res.redirect('/skills');
}


function newSkill(req, res) {
    res.render('skills/new', {title: 'New Skill'});
}

function show(req, res) {
    res.render('skills/show', {
        skill: Skill.getOne(req.params.id)
    });
}


function index(req, res) {
    res.render('skills/index', {
        skills: Skill.getAll()
    });
}